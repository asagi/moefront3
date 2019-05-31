<template>
  <div v-if="!authToken" id="login-area">
    <p>
      参加登録にはログインが必要です。
    </p>
    <nuxt-link
      v-cloak
      class="link btn btn-twitter-login"
      to="/login"
      @click.native="isWait = true"
      ><span id="twitter-logo"></span> Twitter アカウントでログイン</nuxt-link
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      authToken: 'user/getAuthToken'
    })
  }
}
</script>

<style lang="postcss" scoped>
#login-area {
  @apply py-5 bg-white rounded-lg text-sm shadow w-full flex-shrink;
}
#login-area p {
  @apply px-2;
  height: 2rem;
}
#twitter-logo {
  @apply w-6 h-6 inline-block align-bottom;
  width: 24px;
  background: url('~assets/img/twitter_logo.png') center no-repeat;
  background-size: contain;
}
.btn-twitter-login {
  @apply inline-block align-bottom py-2 px-3 rounded-sm;
  @apply text-white;
  background-color: #55acee;
}
.btn-twitter-login:hover {
  @apply bg-blue-700;
}
</style>
