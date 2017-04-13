/**
 * Created by jiangyukun on 2017/4/12.
 */
import {_post} from '../../services/http'
import {accountManage} from '../../core/constants/types'
import phase from '../../core/constants/phase'
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

export function addAccount(email, username, userType, isInOffice) {
  const options = {
    'user_name': email,
    'name': username,
    'group_Id': userType,
    'user_is_working': isInOffice == '1'
  }
  return {
    [THREE_PHASE]: {
      type: accountManage.ADD_ACCOUNT,
      http: () => _post('/backend/user/v1/addUser', {body: options})
    }
  }
}

export function clear() {
  return {
    type: phase.CLEAR + accountManage.ADD_ACCOUNT
  }
}
