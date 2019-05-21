<template>
  <no-ssr>
    <div v-if="authToken">
      <a href="javascript:void(0)" @click="logout">ログアウト</a>
    </div>
    <div v-else>
      <nuxt-link to="/login">ログイン</nuxt-link>
    </div>
  </no-ssr>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['authToken'])
  },
  methods: {
    ...mapActions('user', ['login', 'logout'])
  }
}
</script>
