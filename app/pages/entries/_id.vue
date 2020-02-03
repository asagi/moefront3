<template>
  <section class="container">
    <div class="top-area">
      <map-area :powers="powers" :territories="territories" :units="units" />
    </div>
  </section>
</template>

<script>
import MapArea from '@/components/-map-area'

export default {
  components: {
    MapArea
  },
  data: () => {
    return {
      table: [],
      powers: [],
      territories: [],
      units: []
    }
  },
  async asyncData({ $axios, params }) {
    const res = await $axios.$get(`/api/tables/${params.id}`).catch(error => {
      console.log(error.message)
    })
    // console.log(JSON.stringify(res))
    return {
      table: res,
      powers: res.powers,
      territories: res.territories,
      units: res.units
    }
  }
}
</script>

<style laong="postcss" scoped></style>
