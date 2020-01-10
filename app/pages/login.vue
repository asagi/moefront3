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
  fetch({ store, env, redirect }) {
    store.dispatch('header/unsetAllowLogin')
    window.location.href =
      env.baseURL + '/login/twitter?callback=' + env.frontURL + '/auth'
  }
}
</script>

<style scoped>
body {
  display: none;
}
</style>
