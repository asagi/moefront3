export const state = () => ({
  id: null,
  uid: null,
  authToken: null,
  imageUrl: null,
  isAdmin: false
})

export const mutations = {
  setToken(state, token) {
    state.authToken = token
  },
  setInfo(state, payload) {
    state.id = payload.id
    state.uid = payload.uid
    state.imageUrl = payload.image_url
    state.isAdmin = payload.admin
  }
}

export const actions = {
  login({ commit }, token) {
    commit('setToken', token)
  },
  logout({ commit, state }) {
    this.$axios.setToken(state.authToken, 'Bearer')
    this.$axios.delete('/api/sessions/token')
    commit('setToken', null)
  },
  load({ commit }, info) {
    commit('setInfo', info)
  }
}

export const getters = {
  getAuthToken: state => {
    return state.authToken
  },
  isAdmin: state => {
    return state.isAdmin
  }
}
