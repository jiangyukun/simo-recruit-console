/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import {accountManage} from '../../core/constants/types'
import * as phase from '../../core/constants/phase'
import {handleNewState, updateList} from '../../core/util/reducer-utils'

const initValue = {
  hasMore: true,
  list: []
}

export default function account_manage(state = initValue, action) {
  const iState = fromJS(state)
  return handleNewState(state, iState, getNextIState())

  function getNextIState() {
    let nextIState = iState
    switch (action.type) {
      case accountManage.FETCH_LIST + phase.SUCCESS:
        console.log(1)
        nextIState = updateList(iState, list => list.concat(action.list))
        console.log(nextIState.toJS())
        break
    }
    return nextIState
  }
}
