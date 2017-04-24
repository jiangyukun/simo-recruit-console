/**
 * Created by jiangyukun on 2017/4/24.
 */
import React from 'react'
import PropTypes from 'prop-types'

class Width extends React.Component {

  render() {
    return (
      <div style={{width: this.props.width}}>
        {this.props.children}
      </div>
    )
  }
}

Width.propTypes = {
  width: PropTypes.string
}

export default Width
