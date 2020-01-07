<template>
  <div class="amaquick-box">
    <div class="amaquick-image">
      <a
        href="https://www.amazon.co.jp/dp/B0015MN6JE?tag=asagi-22"
        target="_blank"
        ><img
          src="https://images-fe.ssl-images-amazon.com/images/I/61vuOcPXzpL._SL75_.jpg"
          style="border: none;"
      /></a>
    </div>
    <div class="amaquick-info">
      <div class="amaquick-name">
        <a
          href="https://www.amazon.co.jp/dp/B0015MN6JE?tag=asagi-22"
          target="_blank"
        >
          <div><img src="@/assets/img/amazon_link.png" /></div>
          ディプロマシー
        </a>
      </div>
      <div class="amaquick-detail">
        Wizards of the Coast
      </div>
      <div class="amaquick-description"></div>
    </div>
    <div class="amaquick-footer" style="clear: left;"></div>
  </div>
</template>

<style lang="postcss" scoped>
.amaquick-box {
  @apply border-solid border border-gray-400;
  @apply bg-white;
  @apply rounded;

  & .amaquick-image {
    @apply inline-block mr-4;
  }
  & .amaquick-info {
    @apply inline-block;
  }
}
</style>
