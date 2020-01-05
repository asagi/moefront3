<template>
  <section class="container">
    <div>ログアウトしました</div>
    <div>
      <nuxt-link class="btn btn-blue" to="/">トップに戻る</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'ログアウト'
    }
  },
  fetch({ store }) {
    store.dispatch('header/hideLoginLink')
  },
  beforeDestroy() {
    this.$store.dispatch('header/showLoginLink')
  }
}
</script>

<style lang="postcss" scoped>
.container {
  @apply flex flex-col justify-center text-center;
  min-height: calc(100vh - 54px);
}
.container div {
  @apply text-center w-full p-2 mb-5;
}
</style>
