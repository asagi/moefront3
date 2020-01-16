export const state = () => ({
  isMenuActive: false,
  isConfirmDialogActive: false
})

export const mutations = {
  setMenuActive(state) {
    state.isMenuActive = true
  },
  unsetMenuActive(state) {
    state.isMenuActive = false
  },
  toggleMenuActive(state) {
    state.isMenuActive = !state.isMenuActive
  },
  setConfirmDialogActive(state) {
    state.isConfirmDialogActive = true
  },
  unsetConfirmDialogActive(state) {
    state.isConfirmDialogActive = false
  }
}

export const actions = {
  openMenu({ commit }) {
    commit('setMenuActive')
  },
  closeMenu({ commit }) {
    commit('unsetMenuActive')
  },
  toggleMenu({ commit }) {
    commit('toggleMenuActive')
  },
  showConfirmDialog({ commit }) {
    commit('setConfirmDialogActive')
  },
  closeConfirmDialog({ commit }) {
    commit('unsetConfirmDialogActive')
  }
}
