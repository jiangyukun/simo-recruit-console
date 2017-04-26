/**
 * Created by jiangyukun on 2017/4/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class BitSweet extends React.Component {
  render() {
    return (
      <div className="app-function-page experience">

      </div>
    )
  }
}

BitSweet.propTypes = {}

function mapStateToProps(state) {
  return {
    ...state['bit_sweet']
  }
}

export default connect(mapStateToProps, {})(BitSweet)
