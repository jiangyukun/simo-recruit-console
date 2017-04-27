/**
 * Created by jiangyukun on 2017/4/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {merge} from 'lodash'

import Button from '../../components/element/Button'
import SearchBox from '../../components/ui/SearchBox'
import {FilterItem, SelectedFilter, SelectedItem} from '../../components/query-filter/'
import PaginateList from '../../components/PaginateList'
import {FlexList, FixHead, FixRow, HeadItem, RowItem, FlexBodyWrap} from '../../components/list'

import {YEAR, MONTH, DEPARTMENT} from '../../core/pages/monthly-performance'
import {fetchList} from './monthly-performance.action'

class MonthlyPerformance extends React.Component {
  state = {
    index: -1,
    searchMore: false,

    yearValue: '',
    monthValue: '',
    departmentValue: '',

    showAdd: false,
    showEdit: false,
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

  render() {
    const hasFilter = !!(this.state.yearValue || this.state.monthValue || this.state.departmentValue)

    return (
      <div className="app-function-page monthly-performance">

        <div className="query-filter">
          <SearchBox value={this.state.searchKey}
                     placeholder="输入关键字"
                     showMore={true}
                     onSearchKeyChange={key => this.setState({searchKey: key})}
                     onMoreChange={() => this.setState({searchMore: !this.state.searchMore})}
                     beginFetch={this.beginFetch}
          >
            <Button type="add" onClick={() => this.setState({showAdd: true})}>新增</Button>
          </SearchBox>

          <div className={classnames('more-filter', {'hide': !this.state.searchMore})}>
            <FilterItem value={this.state.yearValue} label={YEAR.label}
                        itemList={YEAR.itemList} onChange={value => this.setState({yearValue: value})}/>

            <FilterItem value={this.state.monthValue} label={MONTH.label}
                        itemList={MONTH.itemList} onChange={value => this.setState({monthValue: value})}/>

            <FilterItem value={this.state.departmentValue} label={DEPARTMENT.label}
                        itemList={DEPARTMENT.itemList} onChange={value => this.setState({departmentValue: value})}/>

          </div>

          {
            (this.state.searchMore || hasFilter) && (
              <SelectedFilter clearAll={() => this.setState({diseaseValue: '', crowdValue: '', instalmentValue: '', statusValue: ''})}
                              notEmpty={hasFilter}
                              beginFilter={this.beginFilter}>
                <SelectedItem label={YEAR.label} value={this.state.yearValue}
                              itemList={YEAR.itemList} onReset={() => this.setState({yearValue: ''})}/>

                <SelectedItem label={MONTH.label} value={this.state.monthValue}
                              itemList={MONTH.itemList} onReset={() => this.setState({monthValue: ''})}/>

                <SelectedItem label={DEPARTMENT.label} value={this.state.departmentValue}
                              itemList={DEPARTMENT.itemList} onReset={() => this.setState({departmentValue: ''})}/>
              </SelectedFilter>
            )
          }

        </div>

        <PaginateList ref={c => this._paginateList = c}
                      hasMore={this.props.hasMore}
                      doFetch={this.doFetch}
                      lengthName='limit'
        >
          <FlexList minWidth='900px'
                    weight={[1, 1, 1, 1, 1, 1, 1]}
                    total={this.props.total}
                    loading={this.props.loading}
          >
            <FixHead>
              <HeadItem>年度</HeadItem>
              <HeadItem>月份</HeadItem>
              <HeadItem>部门</HeadItem>
              <HeadItem>人员</HeadItem>
              <HeadItem>贡献额</HeadItem>
              <HeadItem>贡献率</HeadItem>
              <HeadItem>入组数</HeadItem>
            </FixHead>
            <FlexBodyWrap>
              {
                this.props.list.map((item, index) => {
                  return (
                    <FixRow key={index}
                            selected={this.state.index == index}
                            onClick={() => this.setState({index})}
                            style={{minHeight: '50px'}}
                    >
                      <RowItem>{item['year']}</RowItem>
                      <RowItem>{item['month']}</RowItem>
                      <RowItem>{item['deparment']}</RowItem>
                      <RowItem>{item['personnel']}</RowItem>
                      <RowItem>{item['contribution']}</RowItem>
                      <RowItem>{item['contribution_rate']}</RowItem>
                      <RowItem>{item['in_group_count']}</RowItem>
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

MonthlyPerformance.propTypes = {}

function mapStateToProps(state) {
  return {
    ...state['monthly_performance']
  }
}

export default connect(mapStateToProps, {fetchList})(MonthlyPerformance)
