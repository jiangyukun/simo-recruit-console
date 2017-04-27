/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import {PROJECT} from '../../core/constants/types'
import phase from '../../core/constants/phase'
import {updateList, handleCommonState, handleClear} from '../../core/util/reducer-utils'

const initValue = {
  hasMore: true,
  list: [],
  loading: false,
  projectInfo: {},
  addProjectSuccess: false,
  updateProjectSuccess: false,
  deleteProjectSuccess: false
}

export default function _project(iState = fromJS(initValue), action) {

  let nextIState = iState
  switch (action.type) {

    case PROJECT.FETCH_LIST + phase.SUCCESS:
      nextIState = updateList(iState, list => list.concat(action.list)).set('hasMore', action.hasMore)
      break

    case PROJECT.FETCH_PROJECT_INFO + phase.SUCCESS:
      nextIState = iState.set('projectInfo', action.projectInfo)
      break

    case PROJECT.ADD_PROJECT + phase.SUCCESS:
      nextIState = iState.set('addProjectSuccess', true)
      break

    case PROJECT.EDIT_PROJECT + phase.SUCCESS:
      nextIState = iState.set('updateProjectSuccess', true)
      break

    case PROJECT.DELETE_PROJECT + phase.SUCCESS:
      nextIState = iState.set('deleteProjectSuccess', true)
      break

    default:
      break

  }
  nextIState = handleClear(action, PROJECT.ADD_PROJECT, 'addProjectSuccess', nextIState)
  nextIState = handleClear(action, PROJECT.EDIT_PROJECT, 'updateProjectSuccess', nextIState)
  nextIState = handleClear(action, PROJECT.DELETE_PROJECT, 'deleteProjectSuccess', nextIState)
  return handleCommonState(action, PROJECT.FETCH_LIST, nextIState)
}
