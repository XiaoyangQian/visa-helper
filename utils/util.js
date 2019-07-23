const formatTime = date => {
  //TODO typecasting - why is this necessary?
  date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth()+1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('/')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
