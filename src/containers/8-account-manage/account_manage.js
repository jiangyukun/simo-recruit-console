/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import {accountManage} from '../../core/constants/types'
import phase from '../../core/constants/phase'
import {updateList, handleCommonState, handleClear} from '../../core/util/reducer-utils'

const initValue = {
  hasMore: true,
  list: [],
  loading: false,
  addAccountSuccess: false
}

export default function account_manage(iState = fromJS(initValue), action) {

  let nextIState = iState
  switch (action.type) {

    case accountManage.FETCH_LIST + phase.SUCCESS:
      nextIState = updateList(iState, list => list.concat(action.list)).set('hasMore', action.hasMore)
      break

    case accountManage.ADD_ACCOUNT + phase.SUCCESS:
      nextIState = iState.set('addAccountSuccess', true)
      break

  }
  nextIState = handleClear(action, accountManage.ADD_ACCOUNT, 'addAccountSuccess', nextIState)
  return handleCommonState(action, accountManage.FETCH_LIST, nextIState)
}
