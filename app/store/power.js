import Powers from '~/assets/json/power.json'

export const state = () => ({
  powers: Powers
})

export const getters = {
  getPowerInfo: state => symbol => {
    return state.powers.find(power => {
      return power.symbol === symbol
    })
  }
}
