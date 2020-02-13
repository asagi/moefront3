<template>
  <div id="__content" :class="[scrollLock]">
    <the-header />
    <div :class="{ isFakePowerSelectorActive }" class="outer-frame">
      <nuxt />
    </div>
    <the-footer />
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

import { mapState } from 'vuex'
import TheHeader from '@/components/-the-header'
import TheFooter from '@/components/-the-footer'

export default {
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    ...mapState('layout', [
      'isMenuActive',
      'isConfirmDialogActive',
      'isFakePowerSelectorActive'
    ]),
    scrollLock: function() {
      return {
        'overflow-hidden': this.isMenuActive || this.isConfirmDialogActive,
        'h-screen': this.isMenuActive || this.isConfirmDialogActive,
        fixed: this.isMenuActive || this.isConfirmDialogActive
      }
    }
  },
  created: function() {
    this.handleResize = debounce(this.removeAdsStyle, 100)
  },
  mounted: function() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    removeAdsStyle: () => {
      setTimeout(() => {
        document.getElementById('__nuxt').removeAttribute('style')
        document.getElementById('__layout').removeAttribute('style')
        document.getElementById('__content').removeAttribute('style')
      }, 1)
    }
  }
}
</script>

<style lang="postcss">
@import '@/assets/css/default-layout.pcss';
</style>
