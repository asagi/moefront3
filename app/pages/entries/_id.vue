<template>
  <section class="container"></section>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    await $axios
      .$get(`/api/tables/${params.id}`)
      .then(res => {
        console.log(JSON.stringify(res))
        return { table: res }
      })
      .catch(error => {
        console.log(error.message)
      })
  }
}
</script>

<style laong="postcss" scoped></style>
