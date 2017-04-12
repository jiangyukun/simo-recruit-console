/**
 * Created by jiangyukun on 2017/4/12.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {merge} from 'lodash'

import PaginateList from '../../components/PaginateList'
import QueryFilter from '../../components/query-filter/QueryFilter'
import {FlexList, FixHead, FixRow, HeadItem, RowItem, FlexBodyWrap} from '../../components/list'
import SearchBox from '../../components/ui/SearchBox'
import Button from '../../components/element/Button'

import * as actions from './account-manage'
import FilterItem from "../../components/query-filter/FilterItem"

class AccountManage extends Component {
  state = {
    index: -1
  }

  beginFetch = (fromPage) => {
    this._paginateList.beginFetch(fromPage)
  }

  doFetch = () => {
    this.props.fetchList(merge({}, this._paginateList.getParams()))
  }

  componentDidMount() {
    this.beginFetch()
  }

  render() {
    return (
      <div className="app-function-page">

        <SearchBox>
          <Button>添加</Button>
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

AccountManage.propTypes = {}

function mapStateToProps(state) {
  return {
    ...state['account_manage']
  }
}

export default connect(mapStateToProps, actions)(AccountManage)
