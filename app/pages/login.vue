<template>
  <div />
</template>

<script>
export default {
  fetch() {
    window.location.href =
      process.env.baseURL + '/login/twitter?callback=http://localhost:3000/auth'
  }
}
</script>
