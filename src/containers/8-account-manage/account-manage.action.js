/**
 * Created by jiangyukun on 2017/4/12.
 */
import {_post} from '../../services/http'
import {ACCOUNT_MANAGE} from '../../core/constants/types'
import {THREE_PHASE} from '../../middleware/request_3_phase'

export function fetchList(options) {
  return {
    [THREE_PHASE]: {
      type: ACCOUNT_MANAGE.FETCH_LIST,
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
      type: ACCOUNT_MANAGE.ADD_ACCOUNT,
      http: () => _post('/backend/user/v1/addUser', {body: options})
    }
  }
}

export function editAccount(userId, email, username, userType, isInOffice) {
  const options = {
    'user_id': userId,
    'user_name': email,
    'name': username,
    'group_Id': userType,
    'user_is_working': isInOffice == '1'
  }
  return {
    [THREE_PHASE]: {
      type: ACCOUNT_MANAGE.EDIT_ACCOUNT,
      http: () => _post('/backend/user/v1/updateUserInfo', {body: options})
    }
  }
}

export function resetPassword() {
  return {
    [THREE_PHASE]: {
      type: ACCOUNT_MANAGE.RESET_PASSWORD,
      http: () => _post('/backend/user/v1/updatePassword')
    }
  }
}
