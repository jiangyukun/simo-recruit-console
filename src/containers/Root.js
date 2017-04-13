/**
 * Created by jiangyukun on 2016/11/26.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Router} from 'react-router'
import {Provider} from 'react-redux'
import getRoutes from '../routes/routes'

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router routes={getRoutes(this.props.pageList)} history={this.props.history}/>
      </Provider>
    )
  }
}

Root.propTypes = {
  pageList: PropTypes.array
}

export default Root
