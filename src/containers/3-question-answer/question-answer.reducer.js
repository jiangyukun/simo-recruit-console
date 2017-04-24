/**
 * Created by jiangyukun on 2017/4/24.
 */
import {fromJS} from 'immutable'
import {questionAnswer} from '../../core/constants/types'
import phase from '../../core/constants/phase'
import {updateList, handleCommonState, handleClear} from '../../core/util/reducer-utils'

const initValue = {
  hasMore: true,
  list: [],
  recommendList: [],
  loading: false,
}

export default function question_answer(iState = fromJS(initValue), action) {

  let nextIState = iState
  switch (action.type) {

    case questionAnswer.FETCH_LIST + phase.SUCCESS:
      nextIState = iState.set('recommendList', action.recommendList)
      nextIState = updateList(nextIState, list => list.concat(action.list)).set('hasMore', action.hasMore)
      break

    default:
      break

  }

  return handleCommonState(action, questionAnswer.FETCH_LIST, nextIState)
}
