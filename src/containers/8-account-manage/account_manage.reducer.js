/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import {ACCOUNT_MANAGE} from '../../core/constants/types'
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

    case ACCOUNT_MANAGE.FETCH_LIST + phase.SUCCESS:
      nextIState = updateList(iState, list => list.concat(action.list)).set('hasMore', action.hasMore)
      break

    case ACCOUNT_MANAGE.ADD_ACCOUNT + phase.SUCCESS:
      nextIState = iState.set('addAccountSuccess', true)
      break

    case ACCOUNT_MANAGE.EDIT_ACCOUNT + phase.SUCCESS:
      nextIState = iState.set('editAccountSuccess', true)
      break

    case ACCOUNT_MANAGE.RESET_PASSWORD + phase.SUCCESS:
      nextIState = iState.set('resetPasswordSuccess', true)
      break

    default:
      break

  }
  nextIState = handleClear(action, ACCOUNT_MANAGE.ADD_ACCOUNT, 'addAccountSuccess', nextIState)
  nextIState = handleClear(action, ACCOUNT_MANAGE.EDIT_ACCOUNT, 'editAccountSuccess', nextIState)
  nextIState = handleClear(action, ACCOUNT_MANAGE.RESET_PASSWORD, 'resetPasswordSuccess', nextIState)
  return handleCommonState(action, ACCOUNT_MANAGE.FETCH_LIST, nextIState)
}
