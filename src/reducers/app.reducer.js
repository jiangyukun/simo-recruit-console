/**
 * Created by jiangyukun on 2017/4/12.
 */
import {fromJS} from 'immutable'
import {APP} from '../core/constants/types'
import * as phase from '../core/constants/phase'

const initValue = {

}

export default function _app(iState = fromJS(initValue), action) {
  let nextIState = iState
  switch (action.type) {

  }
  return nextIState
}
