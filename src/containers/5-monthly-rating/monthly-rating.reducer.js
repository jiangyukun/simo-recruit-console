/**
 * Created by jiangyukun on 2017/4/24.
 */
import {fromJS} from 'immutable'
import {MONTHLY_RATING} from '../../core/constants/types'
import phase from '../../core/constants/phase'
import {updateList, handleCommonState, handleClear} from '../../core/util/reducer-utils'

const initValue = {
  hasMore: true,
  list: [],
  recommendList: [],
  loading: false,
}

export default function monthly_rating(iState = fromJS(initValue), action) {

  let nextIState = iState
  switch (action.type) {

    case MONTHLY_RATING.FETCH_LIST + phase.SUCCESS:
      nextIState = updateList(nextIState, list => list.concat(action.list)).set('hasMore', action.hasMore)
      break

    default:
      break

  }

  return handleCommonState(action, MONTHLY_RATING.FETCH_LIST, nextIState)
}
