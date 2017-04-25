/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import {project} from '../../core/constants/types'
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

    case project.FETCH_LIST + phase.SUCCESS:
      nextIState = updateList(iState, list => list.concat(action.list)).set('hasMore', action.hasMore)
      break

    case project.FETCH_PROJECT_INFO + phase.SUCCESS:
      nextIState = iState.set('projectInfo', action.projectInfo)
      break

    case project.ADD_PROJECT + phase.SUCCESS:
      nextIState = iState.set('addProjectSuccess', true)
      break

    case project.EDIT_PROJECT + phase.SUCCESS:
      nextIState = iState.set('updateProjectSuccess', true)
      break

    case project.DELETE_PROJECT + phase.SUCCESS:
      nextIState = iState.set('deleteProjectSuccess', true)
      break

    default:
      break

  }
  nextIState = handleClear(action, project.ADD_PROJECT, 'addProjectSuccess', nextIState)
  nextIState = handleClear(action, project.EDIT_PROJECT, 'updateProjectSuccess', nextIState)
  nextIState = handleClear(action, project.DELETE_PROJECT, 'deleteProjectSuccess', nextIState)
  return handleCommonState(action, project.FETCH_LIST, nextIState)
}
