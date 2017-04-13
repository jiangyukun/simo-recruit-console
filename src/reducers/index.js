/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import {combineReducers} from 'redux'

import _app from './_app'
import account_manage from '../containers/8-account-manage/account_manage'
import {routerReducer as routing} from 'react-router-redux'

/**
 * 使用immutable，将state封装为iState，不可变数据
 * @param reducerFun 原reducer函数
 * @return 封装后的reducer函数
 */
const wrapState = reducerFun => (state, action) => {
  const iState = fromJS(state)
  return unwrapState(state, iState, reducerFun(iState, action))
}

function unwrapState(state, iState, nextIState) {
  if (iState === nextIState) {
    return state
  }
  return nextIState.toJS()
}

export default combineReducers({
  _app: wrapState(_app),
  account_manage: wrapState(account_manage),
  routing
})
