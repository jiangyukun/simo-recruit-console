/**
 * Created by jiangyukun on 2017/4/12.
 */
import {List} from 'immutable'
import phase from '../../core/constants/phase'

export function updateList(curIState, callback) {
  const list = curIState.get('list')

  return curIState.update('list', list => callback(list))
}

export function updateListItem(curIState, listItemKey, id, callback) {
  const list = curIState.get('list')
  const match = list.find(item => item.get(listItemKey) == id)
  if (!match) {
    console.warn('no match ' + listItemKey)
    return curIState
  }
  return curIState.update('list', list => list.update(list.indexOf(match), item => callback(item)))
}

/**
 * 处理loading和list
 * @param action
 * @param targetType
 * @param iState
 * @returns nextIState
 */
export function handleCommonState(action, targetType, iState) {
  let nextIState = iState
  switch (action.type) {
    case targetType + phase.START:
      nextIState = iState.set('loading', true).set('list', List([]))
      break

    case targetType + phase.SUCCESS:
    case targetType + phase.FAILURE:
      nextIState = iState.set('loading', false)
      break
  }
  return nextIState
}

export function handleClear(action, targetType, key, iState) {
  if (action.type == phase.CLEAR + targetType) {
    return iState.set(key, false)
  }
  return iState
}
