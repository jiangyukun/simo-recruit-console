/**
 * Created by jiangyukun on 2017/4/18.
 */
import {getFilterItem} from '../util/page-utils'

export const diseaseType = getFilterItem('diseaseType', '疾病种类', [
  {value: '1', text: '慢病'},
  {value: '2', text: '肿瘤'},
  {value: '3', text: '其它'},
])

export const crowd = getFilterItem('crowd', '人群', [
  {value: '1', text: '患者'},
  {value: '2', text: '健康志愿者'},
])

export const instalment = getFilterItem('instalment', '分期', [
  {value: '1', text: 'BE'},
  {value: '2', text: 'PK/PD'},
  {value: '3', text: 'I 期'},
  {value: '4', text: 'II 期'},
  {value: '5', text: 'III 期'},
  {value: '6', text: 'IV 期'},
])

export const status = getFilterItem('status', '状态', [
  {value: '1', text: '进行中'},
  {value: '2', text: '已结束'},
])
