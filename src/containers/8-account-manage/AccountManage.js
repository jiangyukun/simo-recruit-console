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

import {accountManage} from '../../core/constants/types'
import * as actions from './account-manage'

class AccountManage extends React.Component {
  state = {
    index: -1,
    searchKey: '',
    showAdd: false
  }

  beginFetch = (restart) => {
    this._paginateList.beginFetch(restart)
  }

  doFetch = () => {
    this.props.fetchList(merge({}, this._paginateList.getParams(), {"key_Words": this.state.searchKey}))
  }

  componentDidMount() {
    this.beginFetch()
  }

  componentDidUpdate() {
    if (this.props.addAccountSuccess) {
      this.props.clearState(accountManage.ADD_ACCOUNT)
      this.beginFetch(true)
    }
  }

  render() {
    return (
      <div className="app-function-page">

        {
          this.state.showAdd && (
            <AddAccountDialog
              addAccount={this.props.addAccount}
              closeSignal={this.props.addAccountSuccess}
              onExited={() => this.setState({showAdd: false})}/>
          )
        }

        <SearchBox value={this.state.searchKey} placeholder="输入分组名称"
                   onSearchKeyChange={key => this.setState({searchKey: key})}
                   beginFetch={this.beginFetch}
        >
          <Button type="add" onClick={() => this.setState({showAdd: true})}>创建账号</Button>
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
                    <FixRow key={item['user_name']}
                            selected={this.state.index == index}
                            onClick={() => this.setState({index})}
                            style={{minHeight: '50px'}}
                    >
                      <RowItem>{item['user_name']}</RowItem>
                      <RowItem>{item['name']}</RowItem>
                      <RowItem>{item['user_type']}</RowItem>
                      <RowItem>{item['user_is_working']}</RowItem>
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

export default connect(mapStateToProps, actions)(AccountManage)
