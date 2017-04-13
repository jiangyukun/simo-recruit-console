/**
 * Created by jiangyukun on 2017/4/12.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Button extends Component {
  render() {
    const {className, ...otherProps} = this.props
    return (
      <button className={classnames('button', this.props.type, className)} {...otherProps}>
      </button>
    )
  }
}

Button.defaultProps = {
  type: ''
}

Button.propTypes = {
  type: PropTypes.string
}

export default Button
