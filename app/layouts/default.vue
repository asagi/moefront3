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
import { mapState } from 'vuex'
import TheHeader from '@/components/-the-header'
import TheFooter from '@/components/-the-footer'

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

  & a {
    @apply text-blue-500;
  }

  & .dropdown-bg {
    @apply w-full h-screen fixed inset-0 z-10;
  }

  & .outer-frame {
    @apply flex flex-col items-center;
    padding-top: 40px;

    & .container {
      @apply pb-10;
      max-width: 1280px;
    }
  }
}

@screen sm {
  body {
    & .outer-frame {
      @apply pt-16;
    }
  }
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

<style lang="postcss">
.btn {
  @apply font-bold py-2 px-3 rounded mt-10;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
.btn-gray {
  @apply bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;
}
.btn-gray:hover {
  @apply bg-gray-500;
}
</style>
