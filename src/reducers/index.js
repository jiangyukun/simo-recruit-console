/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import {combineReducers} from 'redux'

import _app from './_app'
import account_manage from '../containers/8-account-manage/account_manage'
import {routerReducer as routing} from 'react-router-redux'

/**
 * 使用immutable，将reducer的state封装为iState，不可变数据
 * @param reducerFun 原reducer函数
 * @return 封装后的reducer函数
 */
const wrapReducerState = reducerFun => (state, action) => {
  const iState = fromJS(state)
  return unwrapReducerState(state, iState, reducerFun(iState, action))
}

function unwrapReducerState(state, iState, nextIState) {
  if (iState === nextIState) {
    return state
  }
  return nextIState.toJS()
}

export default combineReducers({
  _app: wrapReducerState(_app),
  account_manage: wrapReducerState(account_manage),
  routing
})
