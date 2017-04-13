/**
 * Created by jiangyukun on 2017/4/13.
 */
import React from 'react'
import PropTypes from 'prop-types'

class InputGroup extends React.Component {

  render() {
    return (
      <div className="group">
        {this.props.children}
      </div>
    )
  }
}

InputGroup.propTypes = {}

export default InputGroup
