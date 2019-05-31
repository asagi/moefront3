<template>
  <div />
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('user/login', this.$route.query.token)
      this.$axios.setToken(this.$route.query.token, 'Bearer')
      this.$axios
        .get('/users/1')
        .then(res => {
          this.$store.dispatch('user/load', res.data)
        })
        .catch(error => {
          console.log(error.message)
        })
    }, 0)
    this.$router.push({ path: '/' })
  }
}
</script>

<style scoped>
body {
  display: none;
}
</style>
