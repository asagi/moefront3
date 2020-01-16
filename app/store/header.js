export const state = () => ({
  allowLogin: true
})

export const mutations = {
  setAllowLogin(state) {
    state.allowLogin = true
  },
  unsetAllowLogin(state) {
    state.allowLogin = false
  }
}

export const actions = {
  setAllowLogin({ commit }) {
    commit('setAllowLogin')
  },
  unsetAllowLogin({ commit }) {
    commit('unsetAllowLogin')
  }
}
