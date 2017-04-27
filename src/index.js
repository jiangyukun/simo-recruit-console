/**
 * Created by jiangyukun on 2017/4/11.
 */
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import '../css/'
import configureStore from './store/configureStore'
import Root from './containers/Root'

let history = createBrowserHistory()

let store = configureStore(history)

const pageList = [
  {
    pageName: 'project'
  },
  {
    pageName: 'process'
  },
  {
    pageName: 'training'
  },
  {
    pageName: 'knowledge'
  },
  {
    pageName: 'question-answer'
  },
  {
    pageName: 'experience'
  },
  {
    pageName: 'monthly-rating'
  },
  {
    pageName: 'monthly-performance'
  },
  {
    pageName: 'bit-sweet'
  },
  {
    pageName: 'account-manage'
  },
]

render(
  <Root pageList={pageList} store={store} history={history}/>,
  document.getElementById('root')
)
