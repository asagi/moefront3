<template>
  <div class="thanks-block">
    <div class="thanks">
      <h2>Thanks</h2>
      <ul>
        <li>
          旗卓国旗は <em>DLK</em> さん、 娘卓画像は <em>緑一色</em> 先生（
          <span class="icon-twitter"></span>
          <a target="_blank" href="https://twitter.com/aru_mido">
            @aru_mido
          </a>
          ）からご提供頂きました。
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.thanks-block {
  & .thanks {
    & ul {
      & li {
        @apply pb-2;

        & .icon-twitter {
          @apply inline-block w-4 h-4 mx-0 bg-cover align-text-bottom;
          background-image: url('~assets/img/icon-twitter.png');
        }
      }
    }
    & p {
      @apply text-left pt-5 pl-5;
    }
  }
}

@screen sm {
  .thanks-block {
    & .thanks {
      @apply px-10;
    }
  }
}
</style>
