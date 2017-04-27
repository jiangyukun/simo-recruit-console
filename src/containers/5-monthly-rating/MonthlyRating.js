/**
 * Created by jiangyukun on 2017/4/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {merge} from 'lodash'

import Tag from '../../components/Tag'
import SearchBox from '../../components/ui/SearchBox'
import Button from '../../components/element/Button'
import PaginateList from '../../components/PaginateList'

import {fetchList} from './monthly-rating.action'

class MonthlyRating extends React.Component {
  state = {
    index: -1,
    searchKey: '',
    showAdd: false
  }

  beginFetch = (restart) => {
    this._paginateList.beginFetch(restart)
  }

  doFetch = () => {
    this.props.fetchList(0)
  }

  componentDidMount() {
    this.beginFetch()
  }

  render() {
    return (
      <div className="app-function-page monthly-rating">
        <div className="well">
          <button className="button" onClick={() => this.setState({showAdd: true})}>新增</button>
        </div>

        <PaginateList ref={c => this._paginateList = c}
                      hasMore={this.props.hasMore}
                      doFetch={this.doFetch}
                      lengthName='limit'
        >
          <div className="list-container">
            {
              this.props.list.map((item, index) => {
                console.log(item)
                return (
                  <div key={item['rating_id']} className="list-item">
                    <div className="flex">
                      <div className="item-contents">
                        <div className="content-row">
                          <div className="flex">
                            <div className="flex1">
                              {item['rating_year']}年{item['rating_month']}月评比
                            </div>
                            <div>{item['rating_status']}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </PaginateList>
      </div>
    )
  }
}

MonthlyRating.propTypes = {}

function mapStateToProps(state) {
  return {
    ...state['monthly_rating']
  }
}

export default connect(mapStateToProps, {fetchList})(MonthlyRating)
