export const state = () => ({
  authToken: null
})

export const mutations = {
  setToken(state, token) {
    state.authToken = token
  }
}

export const actions = {
  login({ commit }, token) {
    commit('setToken', token)
  },
  logout({ commit }) {
    commit('setToken', null)
  }
}
