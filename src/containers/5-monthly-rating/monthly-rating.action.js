/**
 * Created by jiangyukun on 2017/4/24.
 */
import {_get, _post} from '../../services/http'
import {MONTHLY_RATING} from '../../core/constants/types'
import {THREE_PHASE} from '../../middleware/request_3_phase'

const apiPrefix = '/backend/rating'

export function fetchList(start) {
  return {
    [THREE_PHASE]: {
      type: MONTHLY_RATING.FETCH_LIST,
      http: () => _get(`${apiPrefix}/v1/getRatingList/${start}`),
      handleResponse: data => ({hasMore: data['hasMore'], list: data['list']})
    }
  }
}
