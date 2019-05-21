<template>
  <div />
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('user/login', this.$route.query.token)
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
