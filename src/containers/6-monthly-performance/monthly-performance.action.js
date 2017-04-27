/**
 * Created by jiangyukun on 2017/4/24.
 */
import {_post} from '../../services/http'
import {MONTHLY_PERFORMANCE} from '../../core/constants/types'
import {THREE_PHASE} from '../../middleware/request_3_phase'

const apiPrefix = '/backend/performance'

export function fetchList(options) {
  return {
    [THREE_PHASE]: {
      type: MONTHLY_PERFORMANCE.FETCH_LIST,
      http: () => _post(`${apiPrefix}/v1/getPerformanceList`, {body: options}),
      handleResponse: data => ({hasMore: false, list: data['list']})
    }
  }
}
