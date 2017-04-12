/**
 * Created by jiangyukun on 2017/4/12.
 */

export function handleNewState(state, iState, nextIState) {
  if (iState === nextIState) {
    return state
  }
  return nextIState.toJS()
}

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
