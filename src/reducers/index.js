/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import {combineReducers} from 'redux'

import app from './app.reducer'
import project from '../containers/1-project/project.reducer'

import question_answer from '../containers/3-question-answer/question-answer.reducer'
import experience from '../containers/4-experience/experience.reducer'
import monthly_rating from '../containers/5-monthly-rating/monthly-rating.reducer'
import monthly_performance from '../containers/6-monthly-performance/monthly-performance.reducer'
import bit_sweet from '../containers/7-bit-sweet/bit-sweet.reducer'
import account_manage from '../containers/8-account-manage/account_manage.reducer'

import {routerReducer} from 'react-router-redux'

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
  app: wrapReducerState(app),
  project: wrapReducerState(project),
  question_answer: wrapReducerState(question_answer),
  experience: wrapReducerState(experience),
  monthly_rating: wrapReducerState(monthly_rating),
  monthly_performance: wrapReducerState(monthly_performance),
  bit_sweet: wrapReducerState(bit_sweet),
  account_manage: wrapReducerState(account_manage),

  router: routerReducer
})
