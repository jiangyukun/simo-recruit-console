/**
 * Created by jiangyukun on 2017/4/26.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class MonthlyRating extends React.Component {
  render() {
    return (
      <div className="app-function-page experience">

      </div>
    )
  }
}

MonthlyRating.propTypes = {}

function mapStateToProps(state) {
  return {
    ...state['monthly_rating']
  }
}

export default connect(mapStateToProps, {})(MonthlyRating)
