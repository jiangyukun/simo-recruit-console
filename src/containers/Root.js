/**
 * Created by jiangyukun on 2016/11/26.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

import PageRoute from '../routes/PageRoute'

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <PageRoute pageList={this.props.pageList}/>
        </ConnectedRouter>
      </Provider>
    )
  }

  getChildContext() {
    return {
      pageList: this.props.pageList
    }
  }
}

Root.propTypes = {
  pageList: PropTypes.array
}

Root.childContextTypes = {
  pageList: PropTypes.array
}

export default Root
