/**
 * Created by jiangyukun on 2017/3/17.
 */
import QuestionAnswer from '../../../containers/3-question-answer/QuestionAnswer'
import getAuthority from '../../../core/getAuthority'

export default function (pageList, pageName) {
  return getAuthority(pageList, pageName, QuestionAnswer)
}
