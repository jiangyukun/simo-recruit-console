/**
 * Created by jiangyukun on 2017/4/24.
 */
import {fromJS} from 'immutable'
import {BIT_SWEET} from '../../core/constants/types'
import phase from '../../core/constants/phase'
import {updateList, handleCommonState, handleClear} from '../../core/util/reducer-utils'

const initValue = {
  hasMore: true,
  list: [],
  loading: false,
}

export default function bit_sweet(iState = fromJS(initValue), action) {

  let nextIState = iState
  switch (action.type) {

    case BIT_SWEET.FETCH_LIST + phase.SUCCESS:
      nextIState = updateList(nextIState, list => list.concat(action.list)).set('hasMore', action.hasMore)
      break

    default:
      break

  }

  return handleCommonState(action, BIT_SWEET.FETCH_LIST, nextIState)
}
