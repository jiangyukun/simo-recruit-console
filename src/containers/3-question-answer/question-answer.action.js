/**
 * Created by jiangyukun on 2017/4/24.
 */
import {_post} from '../../services/http'
import {questionAnswer} from '../../core/constants/types'
import {THREE_PHASE} from '../../middleware/request_3_phase'


export function fetchList(options) {
  return {
    [THREE_PHASE]: {
      type: questionAnswer.FETCH_LIST,
      http: () => _post('/backend/question/v1/getQuestionList', {body: options}),
      handleResponse: data => ({hasMore: data['hasMore'], list: data['list'], recommendList: data['topList']})
    }
  }
}
