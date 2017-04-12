/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import * as types from '../core/constants/types'
import * as phase from '../core/constants/phase'
import {handleNewState} from '../core/util/reducer-utils'

const initValue = {
  loginSuccess: false,
  failureMessage: '',
}

export default function _app(state = initValue, action) {
  const iState = fromJS(state)
  return handleNewState(state, iState, getNextIState())

  function getNextIState() {
    let nextIState = iState
    switch (action.type) {

    }
    return nextIState
  }
}
