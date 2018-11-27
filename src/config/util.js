export const time = {
  getNowTime () {
    let date = new Date(Date.now())
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let h = date.getHours()
    let mn = date.getMinutes()
    // let s = date.getSeconds()
    m = m < 10 ? ('0' + m) : m
    d = d < 10 ? ('0' + d) : d
    h = h < 10 ? ('0' + h) : h
    mn = mn < 10 ? ('0' + mn) : mn
    // s = s < 10 ? ('0' + s) : s
    let dateNumber = parseInt(y.toString() + m.toString() + d.toString())
    let dateTime = `${y}年${m}月${d}日`
    let specificTime = `${h}:${mn}`
    return { dateTime, specificTime, dateNumber }
  },
  format (time) {
    let date = new Date(time)
    let h = date.getHours()
    let mn = date.getMinutes()

    h = h < 10 ? ('0' + h) : h
    mn = mn < 10 ? ('0' + mn) : mn
    let specificTime = `${h}:${mn}`
    return specificTime
  },
  getDayEnd (t) {
    let date = new Date(t)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let time = new Date(y, m, d, 23, 59, 59).getTime()
    return time
  },
  getDayStart (t) {
    let date = new Date(t)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let time = new Date(y, m, d, 0, 0, 0).getTime()
    return time
  }
}
/**
 *
 * 从树形结构数组中提取对象值并返回为一维数组
 * @export
 * @param {*} arr
 * @returns
 */
export let extract = function (arr) {
  let array = []
  ;(function iteration (arr) {
    for (const element of arr) {
      array.push({ id: element._id, name: element.name, icon: element.icon })
      if (element.hasOwnProperty('children') && element.children.length > 0) {
        iteration(element.children)
      }
    }
  })(arr)
  return array
}

export let Event = class {
  constructor ({ date, tag, record, icon, startTime, endTime, lengthTime }) {
    this.date = date || time.getNowTime().dateNumber
    this.tag = tag || '其他'
    this.record = record || '继续加油'
    this.icon = icon || ''
    this.startTime = startTime || Date.now()
    this.endTime = endTime || 0
    this.lengthTime = lengthTime || 0
  }
}
