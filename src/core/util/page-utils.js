/**
 * Created by jiangyukun on 2017/4/12.
 */
/**
 * 获取FilterItem的item参数对象
 * @param typeCode
 * @param typeText
 * @param typeItemList
 * @returns {{typeCode: *, typeText: *, typeItemList: *}}
 */
export function getFilterItem(typeCode, typeText, typeItemList) {
  if (!typeItemList) {
    typeItemList = [
      {value: constants.yesOrNo.yes, text: '是'}, {value: constants.yesOrNo.no, text: '否'}
    ]
  }
  return {
    typeCode: typeCode,
    typeText: typeText,
    typeItemList: typeItemList
  }
}