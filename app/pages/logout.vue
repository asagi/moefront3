<template>
  <section class="container">
    <div>ログアウトしました</div>
    <div>
      <nuxt-link class="btn btn-blue" to="/">
        トップに戻る
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('header/show')
    next()
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('header/hide')
    }, 0)
  }
}
</script>

<style lang="postcss" scoped>
.container {
  @apply flex-col justify-center text-center;
  min-height: calc(100vh - 59px);
}
.container div {
  @apply text-center w-full p-2 mb-5;
}
.btn {
  @apply font-bold py-2 px-3 rounded mt-10;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
