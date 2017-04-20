/**
 * Created by jiangyukun on 2017/3/17.
 */
import Project from '../../../containers/1-project/Project'
import getAuthority from '../../../core/getAuthority'

export default function (pageList, pageName) {
  return getAuthority(pageList, pageName, Project)
}
