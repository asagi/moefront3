export const state = () => ({
  isActive: false,
  isHidden: true
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
  setHidden(state) {
    state.isHidden = true
  },
  unsetHidden(state) {
    state.isHidden = false
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
  hideLoginLink({ commit }) {
    commit('setHidden')
  },
  showLoginLink({ commit }) {
    commit('unsetHidden')
  }
}
