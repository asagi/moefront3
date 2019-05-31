<template>
  <div :class="[scrollLock]">
    <TheHeader />
    <div class="outer-frame">
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/-the-header'
import TheFooter from '@/components/-the-footer'
import { mapState } from 'vuex'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    ...mapState('header', ['isActive']),
    scrollLock: function() {
      return {
        'overflow-hidden': this.isActive,
        'h-screen': this.isActive
      }
    }
  }
}
</script>

<style lang="postcss">
body {
  @apply bg-gray-200;
  min-width: 320px;
}
.outer-frame {
  @apply flex flex-col items-center;
}
.container {
  @apply pb-10;
  max-width: 1280px;
}
a {
  @apply text-blue-500;
}
.dropdown-bg {
  @apply w-full h-screen absolute inset-0 z-10;
}
</style>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
