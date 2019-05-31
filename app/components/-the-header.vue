<template>
  <nav class="flex justify-between flex-wrap px-6 py-2">
    <div class="header text-xl mb-1">
      <img src="@/assets/img/logo.svg" class="svg logo" />
      <nuxt-link class="h-6 no-underline" to="/">Diplomacy MOE</nuxt-link>
    </div>
    <no-ssr>
      <div v-if="authToken" class="pt-1">
        <div class="cursor-pointer" @click="toggleMenu">
          <img class="user-image" :src="image_url" />
          <span class="dropdown-caret"></span>
        </div>
        <div v-if="isActive" class="menu">
          <div class="caret">
            <span class="caret-outer"></span> <span class="caret-inner"></span>
          </div>
          <ul>
            <li>マイページ</li>
            <li class="link" @click="clickLogout">
              ログアウト
            </li>
          </ul>
        </div>
      </div>
    </no-ssr>
    <div v-if="isActive" class="dropdown-bg" @click="closeMenu"></div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['authToken', 'image_url']),
    ...mapState('header', ['isActive'])
  },
  mounted() {
    setTimeout(() => {
      const token = this.$store.state.user.authToken
      if (token) {
        this.$nextTick(() => {
          this.$axios.setToken(token, 'Bearer')
          this.$axios
            .get('/users/0')
            .then(res => {
              this.$store.dispatch('user/load', res.data)
            })
            .catch(error => {
              this.$store.dispatch('user/logout')
              this.isActive = false
              console.log(error.message)
            })
        })
      }
    }, 0)
  },
  methods: {
    ...mapActions('user', ['login']),
    ...mapActions('header', ['openMenu', 'closeMenu', 'toggleMenu']),
    clickLogout: function() {
      this.$store.dispatch('user/logout')
      this.$store.dispatch('header/hide')
      this.isActive = false
    },
    waitCursor: function() {
      this.isActive = true
      this.pointer = 'cursor-wait'
    }
  }
}
</script>

<style lang="postcss">
.logo {
  @apply inline-block;
  width: 32px;
}
</style>

<style lang="postcss" scoped>
.header a {
  @apply text-gray-800;
}
nav {
  @apply bg-gray-400 text-gray-700 text-sm;
}
#login-menu {
  @apply pt-2;
}
.user-image {
  @apply w-6 h-6 rounded-full inline-block mr-2 align-bottom;
}
.dropdown-caret {
  @apply border-gray-700;
  @apply border-solid border-b-0 h-0 w-0 inline-block align-middle;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top-width: 4px;
}
.caret {
  @apply border-white;
  @apply absolute right-0 mr-2;
  @apply border-solid border-b-0 h-0 w-0 inline-block align-middle;
  top: -6px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top-width: 8px;
  transform: rotate(180deg);
}
.link {
  @apply cursor-pointer;
}
.menu {
  @apply w-40 border border-solid rounded bg-white shadow-md;
  @apply py-2 m-3;
  @apply absolute left-auto right-0 z-20;
  border-left: 1px #edf2f7 solid;
  border-right: 1px #edf2f7 solid;
}
.menu ul {
  @apply p-0 text-sm z-30 w-full list-none;
}
.menu ul li {
  @apply w-full px-3 py-1 bg-transparent;
}
.menu ul li a {
  @apply text-sm;
}
.menu ul li:hover {
  @apply bg-blue-700 text-gray-200;
}
.dropdown-bg {
  @apply w-full h-screen absolute inset-0 z-10;
}
</style>

<style lang="postcss" scoped>
#twitter-logo {
  @apply w-6 h-6 inline-block align-bottom;
  width: 24px;
  background: url('~assets/img/twitter_logo.png') center no-repeat;
  background-size: contain;
}
.btn-twitter-login {
  @apply align-bottom py-2 px-3 rounded-sm text-sm;
  @apply text-white;
  background-color: #55acee;
}
.btn-twitter-login:hover {
  @apply bg-blue-700;
}
</style>
