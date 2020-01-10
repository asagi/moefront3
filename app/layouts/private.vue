<template>
  <div :class="[scrollLock]">
    <TheHeader />
    <div v-if="isAUthenticated" class="outer-frame">
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
  middleware: ['auth'],
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
    },
    isAUthenticated() {
      return this.$store.getters['user/getAuthToken']
    }
  }
}
</script>

<style lang="postcss">
@import '@/assets/css/default-layout.pcss';
</style>
