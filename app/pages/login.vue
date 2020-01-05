<template>
  <div />
</template>

<script>
export default {
  head() {
    return {
      title: 'ログイン'
    }
  },
  data: () => {
    return { isActive: false }
  },
  fetch({ store, env, redirect }) {
    store.dispatch('header/hideLoginLink')
    window.location.href =
      env.baseURL + '/login/twitter?callback=' + env.serverURL + '/auth'
  }
}
</script>

<style scoped>
body {
  display: none;
}
</style>
