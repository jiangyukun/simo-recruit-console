/**
 * Created by jiangyukun on 2017/4/12.
 */
import {combineReducers} from 'redux'

import _app from './_app'
import account_manage from '../containers/8-account-manage/account_manage'
import {routerReducer as routing} from 'react-router-redux'

export default combineReducers({
  _app,
  account_manage,
  routing
})
