<template>
  <div class="container">
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
  </div>
</template>

<style lang="postcss" scoped>
.container {
  @apply flex flex-row justify-center items-center text-left;
  @apply w-full px-5 pb-5;
}
.amaquick-box {
  @apply flex flex-row justify-center;
  @apply mt-10 py-5 px-10 bg-white;
  width: 550px;
}
@screen sm {
  .amaquick-box {
    @apply px-20;
    width: 560px;
  }
}
@screen lg {
  .amaquick-box {
    @apply px-10;
    width: 800px;
  }
}
.amaquick-image {
  @apply inline-block mr-4;
}
.amaquick-info {
  @apply inline-block;
}
</style>
