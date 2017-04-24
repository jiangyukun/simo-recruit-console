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
  addAccountSuccess: false,
  editAccountSuccess: false,
  resetPasswordSuccess: false,
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

    case accountManage.EDIT_ACCOUNT + phase.SUCCESS:
      nextIState = iState.set('editAccountSuccess', true)
      break

    case accountManage.RESET_PASSWORD + phase.SUCCESS:
      nextIState = iState.set('resetPasswordSuccess', true)
      break

    default:
      break

  }
  nextIState = handleClear(action, accountManage.ADD_ACCOUNT, 'addAccountSuccess', nextIState)
  nextIState = handleClear(action, accountManage.EDIT_ACCOUNT, 'editAccountSuccess', nextIState)
  nextIState = handleClear(action, accountManage.RESET_PASSWORD, 'resetPasswordSuccess', nextIState)
  return handleCommonState(action, accountManage.FETCH_LIST, nextIState)
}
