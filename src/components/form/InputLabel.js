/**
 * Created by jiangyukun on 2017/4/13.
 */
import React from 'react'
import PropTypes from 'prop-types'

class InputLabel extends React.Component {

  render() {
    return (
      <div className="input-label">
        {this.props.children}
      </div>
    )
  }
}

InputLabel.propTypes = {}

export default InputLabel
