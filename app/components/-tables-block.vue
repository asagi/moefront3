<template>
  <div class="tables-block">
    <div class="tables">
      <h2>進行中の卓一覧</h2>
    </div>
    <div class="tables">
      <h2>募集中の卓一覧</h2>
    </div>
  </div>
</template>

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
