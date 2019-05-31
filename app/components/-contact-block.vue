<template>
  <div class="contact-block">
    <h2>Contact</h2>
    <ul>
      <li>
        <span class="icon-mail"></span>
        <a href="mailto:k.asagi@nifty.com">k.asagi@nifty.com</a>
      </li>
      <li>
        <span class="icon-twitter"></span>
        <a href="http://twitter.com/diplomacymoe">@diplomacymoe</a>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
li {
  @apply pb-2;
}
.contact {
  @apply w-full mt-4;
}
@screen sm {
  .contact {
    @apply pl-5 pr-0;
  }
}
.icon-mail {
  @apply inline-block w-5 h-5 mx-2 bg-cover align-text-bottom;
  background-image: url('~assets/img/icon-mail.png');
}
.icon-twitter {
  @apply inline-block w-5 h-5 mx-2 bg-cover align-text-bottom;
  background-image: url('~assets/img/icon-twitter.png');
}
</style>
