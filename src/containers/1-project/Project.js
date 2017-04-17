/**
 * Created by jiangyukun on 2017/4/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {merge} from 'lodash'

import Button from '../../components/element/Button'
import SearchBox from '../../components/ui/SearchBox'
import {QueryFilter, FilterItems, FilterItem} from '../../components/query-filter/'
import PaginateList from '../../components/PaginateList'

import {getFilterItem} from '../../core/util/page-utils'
import {fetchList} from './-project'

const list1 = getFilterItem('diseaseType', '疾病种类', [
  {value: '1', text: '慢病'},
  {value: '2', text: '肿瘤'},
  {value: '3', text: '其它'},
])

const list2 = getFilterItem('diseaseType', '人群', [
  {value: '1', text: '患者'},
  {value: '2', text: '健康志愿者'},
])

const list3 = getFilterItem('instalment', '分期', [
  {value: '1', text: 'BE'},
  {value: '2', text: 'PK/PD'},
  {value: '3', text: 'I 期'},
  {value: '4', text: 'II 期'},
  {value: '5', text: 'III 期'},
  {value: '6', text: 'IV 期'},
])

class Project extends React.Component {
  state = {}

  beginFetch = (restart) => {
    this._paginateList.beginFetch(restart)
  }

  doFetch = () => {
    this.props.fetchList(merge({}, this._paginateList.getParams(), {"key_Words": this.state.searchKey}))
  }

  componentDidMount() {
    this.beginFetch()
  }

  render() {
    return (
      <div className="app-function-page project">
        <QueryFilter beginFilter={this.beginFetch} show={true}>
          <SearchBox value={this.state.searchKey} placeholder="输入关键字查询疾病、申办方或药物"
                     onSearchKeyChange={key => this.setState({searchKey: key})}
                     beginFetch={this.beginFetch}
          >
            <Button type="add" onClick={() => this.setState({showAdd: true})}>创建账号</Button>
            <Button type="edit" disabled={this.state.index == -1} onClick={() => this.setState({showEdit: true})}>编辑</Button>
          </SearchBox>

          <FilterItems show={true}>
            <FilterItem item={list1}/>
            <FilterItem item={list2}/>
            <FilterItem item={list3}/>
          </FilterItems>
        </QueryFilter>

        <PaginateList ref={c => this._paginateList = c}
                      hasMore={this.props.hasMore}
                      doFetch={this.doFetch}
                      lengthName='limit'
        >
          {
            this.props.list.map((item, index) => {
                return (
                  <div>z</div>
                )
              }
            )
          }
        </PaginateList>

      </div>
    )
  }
}

Project.propTypes = {
  clearState: PropTypes.func
}

function mapStateToProps(state) {
  return {
    ...state['_project']
  }
}

export default connect(mapStateToProps, {fetchList})(Project)
