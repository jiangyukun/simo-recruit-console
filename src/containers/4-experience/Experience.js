/**
 * Created by jiangyukun on 2017/4/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Experience extends React.Component {
  render() {
    return (
      <div className="app-function-page experience">

      </div>
    )
  }
}

Experience.propTypes = {}

function mapStateToProps(state) {
  return {
    ...state['experience']
  }
}

export default connect(mapStateToProps, {})(Experience)
