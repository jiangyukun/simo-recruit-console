/**
 * Created by jiangyukun on 2017/4/12.
 */


/**
 * 各种环境下的路由前缀
 * @param page
 * @returns {string}
 */
export function getPath(page) {
  let path = ''
  let prefix = ''
  if (process.env.NODE_ENV == 'production') {
    prefix = '/simo-recruit-console/'
  }
  if (process.env.NODE_ENV == 'inline') {
    prefix = '/simo-recruit-console/'
    path = 'inline/'
  }
  if (process.env.NODE_ENV == 'dev') {
    path = '/dev/'
  }

  return prefix + path + page
}
