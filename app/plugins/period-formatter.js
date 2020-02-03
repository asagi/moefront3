import Vue from 'vue'

Vue.prototype.$formatPeriod = period => {
  const datetime = new Date(period)
  const year = datetime.getFullYear()
  const month = (datetime.getMonth() + 101).toString().substr(-2)
  const date = (datetime.getDate() + 100).toString().substr(-2)
  const dow = datetime.getDay()
  const hours = (datetime.getHours() + 100).toString().substr(-2)
  const minutes = (datetime.getMinutes() + 100).toString().substr(-2)
  const dowlist = [
    '（日） ',
    '（月） ',
    '（火） ',
    '（水） ',
    '（木） ',
    '（金） ',
    '（土） '
  ]
  return (
    [year, month, date].join('-') + dowlist[dow] + [hours, minutes].join(':')
  )
}
