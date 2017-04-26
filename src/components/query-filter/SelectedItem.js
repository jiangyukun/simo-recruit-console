/**
 * Created by jiangyukun on 2017/4/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class SelectedItem extends React.Component {
  render() {
    if (!this.props.value) {
      return null
    }
    let value = this.props.value
    if (this.props.itemList) {
      value = this.props.itemList.find(item => item.value == value).text
    }

    return (
      <a
        className={classnames('select-result select-result2 select-resultqage')}>
        <span>{this.props.label}： {value}</span>
        <i className="icon-close" onClick={this.props.onReset}></i>
      </a>
    )
  }
}

SelectedItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  itemList: PropTypes.array,
  onReset: PropTypes.func
}

export default SelectedItem
