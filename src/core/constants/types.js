function getActionTypeFn(prefix) {
  return function (type) {
    return prefix + '__' + type
  }
}

function generatorValueFromKey(prefix, obj) {
  let newObj = {}
  let typeFn = getActionTypeFn(prefix)
  Object.keys(obj).forEach(key => newObj[key] = typeFn(key))
  return newObj
}

export const app = generatorValueFromKey('APP', {})

export const accountManage = generatorValueFromKey('ACCOUNT_MANAGE', {
  FETCH_LIST: null,
  ADD_ACCOUNT: null,
})
