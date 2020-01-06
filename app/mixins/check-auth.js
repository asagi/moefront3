export default {
  data: () => {
    return { authenticated: false }
  },
  mounted() {
    setTimeout(() => {
      if (this.$store.state.user.authToken) {
        this.authenticated = true
      } else {
        this.$router.push({ path: '/' })
      }
    }, 0)
  }
}
