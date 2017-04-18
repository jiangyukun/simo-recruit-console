/**
 * Created by jiangyukun on 2017/4/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Part extends React.Component {

  render() {
    const style = {}
    style.flex = this.props.weight
    style.textAlign = this.props.textAlign

    const {weight, textAlign, otherProps} = this.props

    return (
      <div style={style} {...otherProps}>
        {this.props.children}
      </div>
    )
  }
}

Part.defaultProps = {
  weight: 1,
  textAlign: 'left'
}

Part.propTypes = {
  className: PropTypes.string,
  weight: PropTypes.number,
  textAlign: PropTypes.string,
}

export default Part
