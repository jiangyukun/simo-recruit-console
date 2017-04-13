/**
 * Created by jiangyukun on 2017/4/13.
 */
import phase from '../core/constants/phase'

export function clearState(type) {
  return {
    type: phase.CLEAR + type
  }
}
