const strToUnixtime = (datetimeStr) => {
  return new Date(datetimeStr).getTime()
}

const unixtimeToStr = (unixtime) => {
  const d = new Date( unixtime )
  const year  = d.getFullYear()
  const month = d.getMonth() + 1
  const day  = d.getDate()
  const hour = ( '0' + d.getHours() ).slice(-2)
  const min  = ( '0' + d.getMinutes() ).slice(-2)
  const sec   = ( '0' + d.getSeconds() ).slice(-2)

  return `${month}/${day} ${hour}:${min}:${sec}`
}

export {
  strToUnixtime,
  unixtimeToStr,
}
