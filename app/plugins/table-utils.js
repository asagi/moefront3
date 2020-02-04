import Vue from 'vue'

Vue.prototype.$getDuration = value => {
  switch (value) {
    case 'short':
      return '短期'
    case 'standard':
      return '標準'
    default:
      return '不明'
  }
}

Vue.prototype.$getFaceType = value => {
  switch (value) {
    case 'girl':
      return '娘'
    case 'flag':
      return '旗'
    default:
      return '不明'
  }
}

Vue.prototype.$getPeriodRule = value => {
  switch (value) {
    case 'fixed':
      return '固定'
    case 'flexible':
      return '変動'
    default:
      return 'unknown'
  }
}

Vue.prototype.$getPrivateState = value => {
  return value ? 'あり' : 'なし'
}

Vue.prototype.$getJugglingState = value => {
  return value === 'allow' ? '可' : '不可'
}

Vue.prototype.$getTableNumber = number => {
  return '#' + ('000' + number).slice(-3)
}

Vue.prototype.$getFinishTurn = (turn, phase) => {
  const year = 1900 + turn
  let season = ''
  switch (phase) {
    case 'spr_1st':
    case 'spr_2nd':
      season = '春 終結'
      break
    case 'fal_1st':
    case 'fal_2nd':
    case 'fal_3rd':
      season = '秋 終結'
      break
  }
  return year + '年' + season
}

Vue.prototype.$getTurn = (turn, phase) => {
  const year = 1900 + turn
  let season = ''
  switch (phase) {
    case 'spr_1st':
      season = '春 外交'
      break
    case 'spr_2nd':
      season = '春 撤退'
      break
    case 'fal_1st':
      season = '秋 外交'
      break
    case 'fal_2nd':
      season = '秋 撤退'
      break
    case 'fal_3rd':
      season = '秋 調整'
      break
  }
  return year + '年' + season
}
