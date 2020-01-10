<template>
  <div>認証処理中です</div>
</template>

<script>
export default {
  head() {
    return {
      title: '認証'
    }
  },
  fetch({ store }) {
    store.dispatch('header/unsetAllowLogin')
  },
  mounted() {
    setTimeout(() => {
      const token = this.$route.query.token
      if (token) {
        this.$store.dispatch('user/login', token)
        this.$axios.setToken(token, 'Bearer')
        this.$axios
          .get('/users/me')
          .then(res => {
            this.$store.dispatch('user/load', res.data)
          })
          .catch(error => {
            console.log(error.message)
            this.$store.dispatch('user/logout', token)
          })
      }
      this.$router.push({ path: '/mypage' })
    }, 0)
  }
}
</script>

<style scoped>
body {
  display: none;
}
</style>
