export const state = () => ({
  isMenuActive: false,
  isConfirmDialogActive: false,
  isFakePowerSelectorActive: false
})

export const mutations = {
  setMenuActive(state) {
    state.isMenuActive = true
  },
  unsetMenuActive(state) {
    state.isMenuActive = false
  },
  setConfirmDialogActive(state) {
    state.isConfirmDialogActive = true
  },
  unsetConfirmDialogActive(state) {
    state.isConfirmDialogActive = false
  },
  setFakePowerSelectorActive(state) {
    state.isFakePowerSelectorActive = true
  },
  toggleFakePowerSelectorActive(state) {
    state.isFakePowerSelectorActive = !state.isFakePowerSelectorActive
  },
  unsetFakePowerSelectorActive(state) {
    state.isFakePowerSelectorActive = false
  }
}

export const actions = {
  openMenu({ commit }) {
    commit('setMenuActive')
  },
  closeMenu({ commit }) {
    commit('unsetMenuActive')
  },
  showConfirmDialog({ commit }) {
    commit('setConfirmDialogActive')
  },
  closeConfirmDialog({ commit }) {
    commit('unsetConfirmDialogActive')
  },
  showFakePowerSelector({ commit }) {
    commit('setFakePowerSelectorActive')
  },
  toggleFakePowerSelector({ commit }) {
    commit('toggleFakePowerSelectorActive')
  },
  closeFakePowerSelector({ commit }) {
    commit('unsetFakePowerSelectorActive')
  }
}
