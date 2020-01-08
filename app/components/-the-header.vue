<template>
  <nav>
    <div class="header">
      <img src="@/assets/img/logo.svg" class="svg logo" />
      <nuxt-link class="no-underline" to="/">Diplomacy MOE</nuxt-link>
    </div>
    <div v-if="!authToken && allowLogin" class="pt-1">
      <nuxt-link
        id="header-login-link"
        class="link btn-header-twitter-login"
        to="/login"
      >
        <span id="header-twitter-logo"></span>
        ログイン
      </nuxt-link>
    </div>
    <div v-if="authToken" class="pt-2">
      <div @click="toggleMenu" class="cursor-pointer">
        <img
          id="header-user-image"
          :src="image_url.replace('http:', 'https:')"
        />
        <span class="dropdown-caret"></span>
      </div>
      <div v-if="isActive" class="menu">
        <div class="caret">
          <span class="caret-outer"></span>
          <span class="caret-inner"></span>
        </div>
        <ul>
          <li @click="showMypage" class="link">マイページ</li>
          <li @click="clickLogout" class="link">ログアウト</li>
        </ul>
      </div>
    </div>
    <div v-if="isActive" @click="closeMenu" class="dropdown-bg"></div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['authToken', 'image_url']),
    ...mapState('header', ['isActive', 'allowLogin'])
  },
  methods: {
    ...mapActions('user', ['logout']),
    ...mapActions('header', ['closeMenu', 'toggleMenu']),
    clickLogout: function() {
      this.logout()
      this.closeMenu()
    },
    showMypage: function() {
      this.$router.push('/mypage')
      this.closeMenu()
    }
  }
}
</script>

<style lang="postcss" scoped>
nav {
  @apply flex justify-between flex-wrap;
  @apply px-3 pb-1;
  @apply bg-gray-400 text-gray-700 text-sm;
  @apply fixed w-full z-50;

  & .header {
    @apply text-lg pt-2;

    & img.logo {
      @apply inline-block;
      width: 24px;
    }

    & a {
      @apply text-gray-800;
    }
  }

  & a.link {
    @apply cursor-pointer;
  }

  & a.btn-header-twitter-login {
    @apply inline-block mt-1 py-0 pl-1 pr-2 rounded-sm;
    @apply text-white text-xs;
    background-color: #55acee;
    line-height: 1.5rem;

    &:hover {
      @apply bg-blue-700;
    }

    & #header-twitter-logo {
      @apply w-6 h-6 inline-block align-bottom;
      width: 16px;
      background: url('~assets/img/twitter_logo.png') center no-repeat;
      background-size: contain;
    }
  }

  & #header-user-image {
    @apply w-6 h-6 rounded-full inline-block mr-2 align-bottom;
  }
}
</style>

<style lang="postcss" scoped>
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
.menu {
  @apply w-56;
  @apply border border-solid rounded bg-white shadow-md;
  @apply py-2 m-3;
  @apply absolute left-auto right-0 z-20;
  border-left: 1px #edf2f7 solid;
  border-right: 1px #edf2f7 solid;
}
.menu ul {
  @apply p-0 z-30 w-full list-none;
}
.menu ul li {
  @apply w-full py-1 bg-transparent;
  @apply px-5 text-xl;
}
.menu ul li a {
  @apply text-gray-700;
}
.menu ul li:hover {
  @apply bg-blue-700 text-gray-200;
}
.dropdown-bg {
  @apply w-full h-screen fixed inset-0 z-10;
}
</style>

<style lang="postcss" scoped>
@screen sm {
  nav {
    @apply px-6;
  }
  .logo {
    width: 32px;
  }
  .header {
    @apply text-xl pt-1;
  }
  .menu {
    @apply w-48;
  }
  .menu ul li {
    @apply px-3 text-base;
  }
}
</style>
