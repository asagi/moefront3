export const state = () => ({
  authToken: null,
  image_url: null
})

export const mutations = {
  setToken(state, token) {
    state.authToken = token
  },
  setInfo(state, payload) {
    state.image_url = payload.image_url
  }
}

export const actions = {
  login({ commit }, token) {
    commit('setToken', token)
  },
  logout({ commit, state }) {
    this.$axios.setToken(state.authToken, 'Bearer')
    this.$axios.get('/logout')
    commit('setToken', null)
  },
  load({ commit }, info) {
    commit('setInfo', info)
  }
}

export const getters = {
  getAuthToken: state => {
    return state.authToken
  }
}
