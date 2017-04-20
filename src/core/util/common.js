/**
 * Created by jiangyukun on 2017/4/20.
 */
import {fromJS} from 'immutable'

/**
 * 复制对象，object或者list
 * @param obj
 * @return {object}
 */
export function copyList(obj) {
  return fromJS(obj).toJS()
}
