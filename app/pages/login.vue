<template>
  <div>認証画面に遷移します</div>
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
    const path =
      env.baseURL + '/login/twitter?callback=' + env.frontURL + '/auth'
    window.location.replace(path)
  }
}
</script>

<style lang="postcss" scoped>
* {
  display: none;
}
</style>
