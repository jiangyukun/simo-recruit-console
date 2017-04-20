/**
 * Created by jiangyukun on 2017/3/17.
 */
import AccountManage from '../../../containers/8-account-manage/AccountManage'
import getAuthority from '../../../core/getAuthority'

export default function (pageList, pageName) {
  return getAuthority(pageList, pageName, AccountManage)
}
