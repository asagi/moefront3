<template>
  <div :class="[scrollLock]">
    <the-header />
    <div class="outer-frame">
      <nuxt />
    </div>
    <the-footer />
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
    ...mapState('header', ['isMenuActive']),
    scrollLock: function() {
      return {
        'overflow-hidden': this.isMenuActive,
        'h-screen': this.isMenuActive
      }
    }
  }
}
</script>

<style lang="postcss">
@import '@/assets/css/default-layout.pcss';
</style>
