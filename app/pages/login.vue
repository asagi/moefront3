<template>
  <div />
</template>

<script>
export default {
  data: () => {
    return { isActive: true }
  },
  fetch({ env, redirect }) {
    window.location.href =
      env.baseURL + '/login/twitter?callback=http://localhost:3000/auth'
  }
}
</script>

<style scoped>
body {
  display: none;
}
</style>
