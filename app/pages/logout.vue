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
  middleware: ['disable-direct-access'],
  head() {
    return {
      title: 'ログアウト'
    }
  },
  fetch({ store }) {
    store.dispatch('header/unsetAllowLogin')
  },
  beforeDestroy() {
    this.$store.dispatch('header/setAllowLogin')
  }
}
</script>

<style lang="postcss" scoped>
.container {
  @apply flex flex-col justify-center text-center;
  min-height: calc(100vh - 54px);

  & div {
    @apply text-center w-full p-2 mb-5;
  }
}
</style>
