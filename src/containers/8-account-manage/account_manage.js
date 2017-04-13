/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import {accountManage} from '../../core/constants/types'
import phase from '../../core/constants/phase'
import {updateList, handleCommonState} from '../../core/util/reducer-utils'

const initValue = {
  hasMore: true,
  list: [],
  loading: false
}

export default function account_manage(iState = fromJS(initValue), action) {

  let nextIState = iState
  switch (action.type) {

    case accountManage.FETCH_LIST + phase.SUCCESS:
      nextIState = updateList(iState, list => list.concat(action.list)).set('hasMore', action.hasMore)
      break

  }

  return handleCommonState(action, accountManage.FETCH_LIST, nextIState)
}
