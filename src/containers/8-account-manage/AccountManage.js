/**
 * Created by jiangyukun on 2017/4/12.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {merge} from 'lodash'

import SearchBox from '../../components/ui/SearchBox'
import Button from '../../components/element/Button'
import PaginateList from '../../components/PaginateList'
import {FlexList, FixHead, FixRow, HeadItem, RowItem, FlexBodyWrap} from '../../components/list'
import AddAccountDialog from './dialog/AddAccountDialog'
import EditAccountDialog from './dialog/EditAccountDialog'

import {getUserType} from '../../core/formatBusData'
import {accountManage} from '../../core/constants/types'
import {fetchList, addAccount, editAccount, resetPassword} from './account-manage.action'

class AccountManage extends React.Component {
  state = {
    index: -1,
    searchKey: '',
    moreSearch: false,
    showAdd: false,
    showEdit: false,
  }

  beginFetch = (restart) => {
    this._paginateList.beginFetch(restart)
  }

  doFetch = () => {
    this.props.fetchList(merge({}, this._paginateList.getParams(), {"key_Words": this.state.searchKey}))
  }

  closeAddDialog = type => {
    this.setState({showEdit: false})
    if (type == 'add') {
      this.beginFetch()
    }
  }

  closeEditDialog = type => {
    this.setState({showEdit: false})
    if (type == 'edit') {
      this.beginFetch()
    }
  }

  componentDidMount() {
    this.beginFetch()
  }

  componentDidUpdate() {
    if (this.props.addAccountSuccess) {
      this.props.clearState(accountManage.ADD_ACCOUNT)
    }
    if (this.props.editAccountSuccess) {
      this.props.clearState(accountManage.EDIT_ACCOUNT)
    }
    if (this.props.resetPasswordSuccess) {
      this.props.clearState(accountManage.RESET_PASSWORD)
    }
  }

  render() {
    const item = this.props.list[this.state.index]

    return (
      <div className="app-function-page">

        {
          this.state.showAdd && (
            <AddAccountDialog
              addAccount={this.props.addAccount}
              closeSignal={this.props.addAccountSuccess}
              onExited={this.closeAddDialog}/>
          )
        }

        {
          this.state.showEdit && this.state.index != -1 && (
            <EditAccountDialog
              userInfo={item}
              resetPassword={this.props.resetPassword}
              editAccount={this.props.editAccount}
              closeSignal={this.props.editAccountSuccess || this.props.resetPasswordSuccess}
              onExited={this.closeEditDialog}/>
          )
        }

        <SearchBox value={this.state.searchKey} placeholder="输入关键字查询名字或邮箱"
                   onSearchKeyChange={key => this.setState({searchKey: key})}
                   showMore={false}
                   beginFetch={this.beginFetch}
        >
          <Button type="add" onClick={() => this.setState({showAdd: true})}>创建账号</Button>
          <Button type="edit" className="ml-10" disabled={this.state.index == -1} onClick={() => this.setState({showEdit: true})}>编辑</Button>
        </SearchBox>

        <PaginateList ref={c => this._paginateList = c}
                      hasMore={this.props.hasMore}
                      doFetch={this.doFetch}
                      lengthName='limit'
        >
          <FlexList minWidth='900px'
                    weight={[1, 1, 1, 1, 1]}
                    total={this.props.total}
                    loading={this.props.loading}
          >
            <FixHead>
              <HeadItem>账号（公司邮箱）</HeadItem>
              <HeadItem>姓名</HeadItem>
              <HeadItem>身份</HeadItem>
              <HeadItem>是否在职</HeadItem>
              <HeadItem>创建时间</HeadItem>
            </FixHead>
            <FlexBodyWrap>
              {
                this.props.list.map((item, index) => {
                  return (
                    <FixRow key={item['user_id']}
                            selected={this.state.index == index}
                            onClick={() => this.setState({index})}
                            style={{minHeight: '50px'}}
                    >
                      <RowItem>{item['user_name']}</RowItem>
                      <RowItem>{item['name']}</RowItem>
                      <RowItem>{getUserType(item['user_type'])}</RowItem>
                      <RowItem>{item['user_is_working'] == '1' ? '是' : '否'}</RowItem>
                      <RowItem>{item['user_regrist_time']}</RowItem>
                    </FixRow>
                  )
                })
              }
            </FlexBodyWrap>
          </FlexList>
        </PaginateList>
      </div>
    )
  }
}

AccountManage.propTypes = {
  clearState: PropTypes.func
}

function mapStateToProps(state) {
  return {
    ...state['account_manage']
  }
}

export default connect(mapStateToProps, {fetchList, addAccount, editAccount, resetPassword})(AccountManage)
