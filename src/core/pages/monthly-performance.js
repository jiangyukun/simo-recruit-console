/**
 * Created by jiangyukun on 2017/4/18.
 */

export const YEAR = {
  label: '年度',
  itemList: [
    {value: '2017', text: '2017'},
    {value: '2016', text: '2016'},
    {value: '2015', text: '2015'},
    {value: '2014', text: '2014'},
  ]
}

export const MONTH = {
  label: '月份',
  itemList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(d => ({value: d, text: d + '月'}))
}

export const DEPARTMENT = {
  label: '部门',
  itemList: [
    {value: '1', text: '招募Ⅰ部'},
    {value: '2', text: '招募Ⅱ部'},
    {value: '3', text: '招募Ⅲ部'},
    {value: '4', text: '招募中心'},
  ]
}
