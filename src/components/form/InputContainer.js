/**
 * Created by jiangyukun on 2017/4/13.
 */
import React from 'react'
import PropTypes from 'prop-types'

class InputContainer extends React.Component {

  render() {
    return (
      <div className="input-container">
        {this.props.children}
      </div>
    )
  }
}

InputContainer.propTypes = {}

export default InputContainer
