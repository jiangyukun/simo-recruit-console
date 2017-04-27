/**
 * Created by jiangyukun on 2017/4/24.
 */
import {_post} from '../../services/http'
import {EXPERIENCE} from '../../core/constants/types'
import {THREE_PHASE} from '../../middleware/request_3_phase'


const apiPrefix = '/backend/experience'

export function fetchList(options) {
  return {
    [THREE_PHASE]: {
      type: EXPERIENCE.FETCH_LIST,
      http: () => _post(apiPrefix + '/v1/getExperienceList', {body: options}),
      handleResponse: data => ({hasMore: data['hasMore'], list: data['list']})
    }
  }
}
