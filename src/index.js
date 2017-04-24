/**
 * Created by jiangyukun on 2017/4/11.
 */
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {useRouterHistory} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import '../css/'
import configureStore from './store/configureStore'
import Root from './containers/Root'

let history = createBrowserHistory()
let store = configureStore(history)

const pageList = [
  {
    pageName: 'account-manage'
  },
  {
    pageName: 'project'
  },
  {
    pageName: 'question-answer'
  }
]

render(
  <Root pageList={pageList} store={store} history={history}/>,
  document.getElementById('root')
)
