import createPersistedState from 'vuex-persistedstate'

export const actions = {
  persistedstate() {
    createPersistedState({ paths: ['user'] })(this)
  }
}
