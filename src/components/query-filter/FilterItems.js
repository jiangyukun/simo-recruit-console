/**
 * Created by jiangyukun on 2017/4/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class FilterItems extends React.Component {
  filterItemList = []
  state = {
    filterConditions: []
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
  }

  removeFilterItem = (typeCode) => {
    let newFilterCondition = this.state.filterConditions.filter(filterCondition => {
      if (filterCondition.typeCode == typeCode) {
        filterCondition.filterItem.reset()
      }
      return filterCondition.typeCode != typeCode
    })
    this.setState({filterConditions: newFilterCondition})
  }

  render() {
    return (
      <div className={classnames('group-select-more', {'hide': !this.props.show})}>

        {this.props.children}
        <div className="group-select-more-btm">
          <div style={{width: '80px'}}>筛选条件:</div>
          <div className="flex1 ">
            <div className="clearfix">
              {
                this.state.filterConditions.map((filterCondition, index) => {
                  return (
                    <a key={index}
                       className={classnames('select-result select-result2 select-resultqage', {'invalidate': filterCondition.invalidate})}>
                      <span>{filterCondition.typeText}： {filterCondition.typeItem.text}</span>
                      {
                        filterCondition.invalidate && (
                          <i className="fa fa-warning filter-item-warning" title={filterCondition.errorTip}></i>
                        )
                      }
                      <i className="icon-close" onClick={e => this.removeFilterItem(filterCondition.typeCode)}></i>
                    </a>
                  )
                })
              }
            </div>
          </div>
          <div className="select-result">
            <button
              className={classnames('clear', {'disabled': this.state.filterConditions.length == 0})}
              onClick={e => this.clearAllFilterCondition()}
              disabled={this.state.filterConditions.length == 0}>
              清除
            </button>
            <button className="submit" onClick={e => this.filter()}>确定</button>
          </div>
          <div className="clear disabled"></div>
        </div>
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

FilterItems.childContextTypes = {
  addFilterItem: PropTypes.func,
  removeFilterItem: PropTypes.func,
  updateFilterItem: PropTypes.func
}

FilterItems.propTypes = {
  show: PropTypes.bool,
}

export default FilterItems
