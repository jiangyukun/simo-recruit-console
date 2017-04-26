/**
 * Created by jiangyukun on 2017/4/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class SelectedFilter extends React.Component {
  render() {
    return (
      <div className="selected-filter">
        <div style={{width: '80px'}}>筛选条件:</div>
        <div className="flex1 ">
          {this.props.children}
        </div>
        <div className="select-result">
          <button
            className={classnames('clear', {'disabled': !this.props.notEmpty})}
            onClick={this.props.clearAll}
            disabled={!this.props.notEmpty}>
            清除
          </button>
          <button className="submit" onClick={this.props.beginFilter}>确定</button>
        </div>
        <div className="clear disabled"></div>
      </div>
    )
  }
}

SelectedFilter.propTypes = {
  notEmpty: PropTypes.bool,
  clearAll: PropTypes.func,
  beginFilter: PropTypes.func,
}

export default SelectedFilter
