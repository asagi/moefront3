export const state = () => ({
  isActive: false
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
  }
}
