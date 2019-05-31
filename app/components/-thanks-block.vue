<template>
  <div class="thanks-block">
    <div class="thanks">
      <h2>Thanks</h2>
      <ul>
        <li>旗卓国旗は <em>DLK</em> さんからご提供頂きました。</li>
        <li>
          娘卓画像は <em>緑一色</em> 先生（<a
            target="_blank"
            href="https://twitter.com/aru_mido"
            ><span class="icon-twitter"></span>@aru_mido</a
          >）からご提供頂きました。
        </li>
      </ul>
      <p>お二方には謹んで御礼申し上げます。</p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
li {
  @apply pb-2;
}
.thanks p {
  @apply text-left pt-5 pl-5;
}
@screen sm {
  .thanks {
    @apply px-10;
  }
}
.icon-twitter {
  @apply inline-block w-5 h-5 mx-1 bg-cover align-text-bottom;
  background-image: url('~assets/img/icon-twitter.png');
}
</style>
