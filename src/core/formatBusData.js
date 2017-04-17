/**
 * Created by jiangyukun on 2017/4/17.
 */
const userTypeMapper = {
  '1': '管理员',
  '2': '领导（兼PM）',
  '3': '领导',
  '4': 'PM',
  '5': '普通',
}

export function getUserType(type) {
  if (userTypeMapper[type]) {
    return userTypeMapper[type]
  }
  return '未知'
}