/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}
export function timeago(dateTimeStamp) { // dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
  var minute = 1000 * 60 // 把分，时，天，周，半个月，一个月用毫秒表示
  var hour = minute * 60
  var day = hour * 24
  var week = day * 7
  var month = day * 30
  var year = day * 365
  var now = new Date().getTime() // 获取当前时间毫秒
  var diffValue = now - dateTimeStamp// 时间差

  if (diffValue < 0) {
    return
  }
  var minC = parseInt(diffValue / minute) // 计算时间差的分，时，天，周，月
  var hourC = parseInt(diffValue / hour)
  var dayC = parseInt(diffValue / day)
  var weekC = parseInt(diffValue / week)
  var monthC = parseInt(diffValue / month)
  var yearC = parseInt(diffValue / year)
  var result = ''
  if (yearC >= 1) {
    result = ' ' + yearC + '年' + (dayC - (yearC * 365)) + '天'
  } else if (monthC >= 1 && monthC <= 12) {
    result = ' ' + monthC + '月' + (dayC - (monthC * 30)) + '天'
  } else if (weekC >= 1 && weekC <= 3) {
    result = ' ' + weekC + '周' + (dayC - (weekC * 7)) + '天'
  } else if (dayC >= 1 && dayC <= 6) {
    result = ' ' + dayC + '天' + (hourC - (dayC * 24)) + '小时'
  } else if (hourC >= 1 && hourC <= 23) {
    result = ' ' + hourC + '小时' + (minC - (hourC * 60)) + '小时'
  } else if (minC >= 1 && minC <= 59) {
    result = ' ' + minC + '分钟'
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = ' ' + parseInt(diffValue / 1000) + '秒'
  }
  return result
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}
