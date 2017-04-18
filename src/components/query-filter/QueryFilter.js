/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {merge} from 'lodash'

class QueryFilter extends Component {
  constructor() {
    super()
    this.state = {filterConditions: []}
  }

  clearAllFilterCondition() {
    this.state.filterConditions.forEach(filterCondition => filterCondition.filterItem.reset())
    this.setState({filterConditions: []})
  }

  filter() {
    this.props.beginFilter()
  }

  getParams() {
    let params = {}
    this.filterItemList.forEach(filterItem => {
      merge(params, filterItem.getParam())
    })
    return params
  }

  render() {
    return (
      <div className={classnames('query-filter', this.props.className)}>
          {this.props.children}
      </div>
    )
  }

}

QueryFilter.propTypes = {
  className: PropTypes.string,
  beginFilter: PropTypes.func.isRequired,
}

export default QueryFilter
