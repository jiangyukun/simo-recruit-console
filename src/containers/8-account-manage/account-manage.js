/**
 * Created by jiangyukun on 2017/4/12.
 */
import {_post} from '../../services/http'
import {accountManage} from '../../core/constants/types'
import {THREE_PHASE} from '../../middleware/request_3_phase'

export function fetchList(options) {
  return {
    [THREE_PHASE]: {
      type: accountManage.FETCH_LIST,
      http: () => _post('/backend/user/v1/getUserList', {body: options}),
      handleResponse: data => ({hasMore: data['hasMore'], list: data['list']})
    }
  }
}
