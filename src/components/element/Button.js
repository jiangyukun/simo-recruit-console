/**
 * Created by jiangyukun on 2017/4/12.
 */
import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'

class Button extends Component {
  render() {
    const {className, ...otherProps} = this.props
    return (
      <button className={classnames('btn', className)} {...otherProps}>
      </button>
    )
  }
}

Button.propTypes = {}

export default Button
