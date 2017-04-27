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

export const APP = generatorValueFromKey('APP', {})


export const PROJECT = generatorValueFromKey('PROJECT', {
  FETCH_LIST: null,
  ADD_PROJECT: null,
  FETCH_PROJECT_INFO: null,
  EDIT_PROJECT: null,
  DELETE_PROJECT: null,
})

export const EXPERIENCE = generatorValueFromKey('PROJECT', {
  FETCH_LIST: null,
  ADD_PROJECT: null,
  FETCH_PROJECT_INFO: null,
  EDIT_PROJECT: null,
  DELETE_PROJECT: null,
})

export const MONTHLY_RATING = generatorValueFromKey('MONTHLY_RATING', {
  FETCH_LIST: null,
  ADD_PROJECT: null,
  FETCH_PROJECT_INFO: null,
  EDIT_PROJECT: null,
  DELETE_PROJECT: null,
})


export const MONTHLY_PERFORMANCE = generatorValueFromKey('MONTHLY_PERFORMANCE', {
  FETCH_LIST: null,
  UPDATE: null,
  DELETE: null,
})

export const BIT_SWEET = generatorValueFromKey('BIT_SWEET', {
  FETCH_LIST: null,
  UPDATE: null,
  DELETE: null,
})

export const QUESTION_ANSWER = generatorValueFromKey('QUESTION_ANSWER', {
  FETCH_LIST: null,
  UPDATE: null,
  DELETE: null,
})

export const ACCOUNT_MANAGE = generatorValueFromKey('ACCOUNT_MANAGE', {
  FETCH_LIST: null,
  ADD_ACCOUNT: null,
  EDIT_ACCOUNT: null,
  RESET_PASSWORD: null,
})
