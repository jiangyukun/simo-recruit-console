/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {merge} from 'lodash'

class QueryFilter extends Component {
  filterItemList = []
  state = {
    filterConditions: []
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

  addFilterItem = (filterItem) => {
    this.filterItemList.push(filterItem)
  }

  updateFilterItem = (newFilterCondition) => {
    let match = this.state.filterConditions.find(condition => condition.typeCode == newFilterCondition.typeCode)
    if (match) {
      let index = this.state.filterConditions.indexOf(match)
      this.state.filterConditions[index] = newFilterCondition
    } else {
      this.state.filterConditions.push(newFilterCondition)
    }
    this.forceUpdate()
    this.props.onChange(this.state.filterConditions)
  }

  removeFilterItem = (typeCode) => {
    let newFilterCondition = this.state.filterConditions.filter(filterCondition => {
      if (filterCondition.typeCode == typeCode) {
        filterCondition.filterItem.reset()
      }
      return filterCondition.typeCode != typeCode
    })
    this.setState({filterConditions: newFilterCondition})
    this.props.onChange(this.state.filterConditions)
  }

  render() {
    return (
      <div className={classnames('query-filter', this.props.className)}>
        {this.props.children}
      </div>
    )
  }

  getChildContext() {
    return {
      addFilterItem: this.addFilterItem,
      removeFilterItem: this.removeFilterItem,
      updateFilterItem: this.updateFilterItem
    }
  }
}

QueryFilter.childContextTypes = {
  addFilterItem: PropTypes.func,
  removeFilterItem: PropTypes.func,
  updateFilterItem: PropTypes.func
}

QueryFilter.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func
}

export default QueryFilter
