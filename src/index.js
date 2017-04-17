/**
 * Created by jiangyukun on 2017/4/11.
 */
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {useRouterHistory} from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import {syncHistoryWithStore} from 'react-router-redux'

import './style/'
import configureStore from './store/configureStore'
import Root from './containers/Root'

let store = configureStore()
let browserHistory = syncHistoryWithStore(useRouterHistory(createBrowserHistory)({basename: '/'}), store)

const pageList = [
  {
    pageName: 'account-manage'
  },
  {
    pageName: 'project'
  }
]

render(
  <Root pageList={pageList} store={store} history={browserHistory}/>,
  document.getElementById('root')
)
