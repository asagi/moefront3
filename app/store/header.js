export const state = () => ({
  isActive: false,
  allowLogin: true
})

export const mutations = {
  setActive(state) {
    state.isActive = true
  },
  unsetActive(state) {
    state.isActive = false
  },
  toggleActive(state) {
    state.isActive = !state.isActive
  },
  setAllowLogin(state) {
    state.allowLogin = true
  },
  unsetAllowLogin(state) {
    state.allowLogin = false
  }
}

export const actions = {
  openMenu({ commit }) {
    commit('setActive')
  },
  closeMenu({ commit }) {
    commit('unsetActive')
  },
  toggleMenu({ commit }) {
    commit('toggleActive')
  },
  setAllowLogin({ commit }) {
    commit('setAllowLogin')
  },
  unsetAllowLogin({ commit }) {
    commit('unsetAllowLogin')
  }
}
