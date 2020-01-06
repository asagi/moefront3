<template>
  <section class="container">
    <div class="btn-area">
      <nuxt-link class="btn btn-blue" to="/mypage/newtable">
        卓を立てる
      </nuxt-link>
    </div>
    <div class="tables-block">
      <div class="tables">
        <h2>参加中の卓一覧</h2>
      </div>
      <div class="tables">
        <h2>戦績</h2>
      </div>
      <div class="tables">
        <h2>お気に入りの卓一覧</h2>
      </div>
      <div class="tables">
        <h2>過去に参加した卓一覧</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  head() {
    return {
      title: 'マイページ'
    }
  }
}
</script>

<style lang="postcss" scoped>
.btn-area {
  @apply flex flex-row justify-center;
}
</style>

<style lang="postcss" scoped>
h2 {
  @apply border-l-4 border-b border-gray-500;
}
.tables {
  @apply w-full my-4 mx-auto;
}
@screen sm {
  .tables {
    @apply pl-0;
    width: 560px;
  }
}
@screen lg {
  .amaquick-box {
    @apply px-10;
    width: auto;
  }
}
</style>
