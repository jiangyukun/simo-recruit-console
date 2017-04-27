/**
 * Created by jiangyukun on 2017/4/24.
 */
import {_get, _post} from '../../services/http'
import {BIT_SWEET} from '../../core/constants/types'
import {THREE_PHASE} from '../../middleware/request_3_phase'

const apiPrefix = '/backend/album'

export function fetchList(start) {
  return {
    [THREE_PHASE]: {
      type: BIT_SWEET.FETCH_LIST,
      http: () => _get(`${apiPrefix}/v1/getAlbumList/${start}`),
      handleResponse: data => ({hasMore: data['hasMore'], list: data['list']})
    }
  }
}
