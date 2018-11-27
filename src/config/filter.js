export let tagsFilter = function (arr) {
  let array = arr
  ;(function filter (array) {
    for (const element of array) {
      for (const key in element) {
        if (key === '_id' || key === 'name' || key === 'children') {

        } else {
          delete element[key]
        }
      }
      if (element.hasOwnProperty('children') && element.children.length > 0) {
        filter(element.children)
      }
    }
  })(array)
  return array
}
export const deepClone = function (obj) {
  let isArr = Array.isArray(obj)
  let isJson = Object.prototype.toString.call(obj) === '[object Object]'
  if (isArr) {
    // 克隆数组
    let newObj = []
    for (let i = 0; i < obj.length; i++) {
      newObj[i] = deepClone(obj[i])
    }
    return newObj
  } else if (isJson) {
    // 克隆Object
    let newObj = {}
    for (let i in obj) {
      newObj[i] = deepClone(obj[i])
    }
    return newObj
  }
  // 不是引用类型直接返回
  return obj
}
