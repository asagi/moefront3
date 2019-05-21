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
  mounted() {
    setTimeout(() => {
      const token = this.$store.state.user.authToken
      if (token) {
        this.$axios.setToken(token, 'Bearer')
        this.$axios.get('/users/1').then(res => {
          console.log(res.data)
        })
      }
    })
  },
  methods: {
    ...mapActions('user', ['login', 'logout'])
  }
}
</script>
