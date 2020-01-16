export const state = () => ({
  isMenuActive: false,
  allowLogin: true
})

export const mutations = {
  setActive(state) {
    state.isMenuActive = true
  },
  unsetActive(state) {
    state.isMenuActive = false
  },
  toggleActive(state) {
    state.isMenuActive = !state.isMenuActive
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
