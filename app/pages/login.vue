<template>
  <div />
</template>

<script>
export default {
  fetch() {
    window.location.href =
      'http://dev.diplomacy.moe:3000/login/twitter?callback=http://localhost:3000/auth'
  }
}
</script>
