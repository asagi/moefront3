<template>
  <section class="container">
    <h1>参加登録 : {{ getTableId() }}</h1>
    <template v-if="false">
      <map-area :powers="powers" :territories="territories" :units="units" />
    </template>
    <div class="outer-map">
      <div class="map-area">
        <div :class="faceType" class="faces">
          <img
            v-for="power in powers"
            :class="power.symbol"
            :key="power.symbol"
            :src="getFaceImage(faceType, power.symbol)"
          />
        </div>
      </div>
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
  computed: {
    faceType() {
      return this.table.regulation.face_type
    }
  },
  async asyncData({ $axios, params }) {
    const res = await $axios.$get(`/api/tables/${params.id}`).catch(error => {
      console.log(error.message)
    })
    console.log(JSON.stringify(res))
    return {
      table: res,
      powers: res.powers,
      territories: res.territories,
      units: res.units
    }
  },
  methods: {
    getTableId() {
      return ('00000' + this.table.id).slice(-5)
    },
    getFaceImage: (faceType, power) => {
      return require(`@/assets/img/power/${faceType}/pl${power}60.png`)
    }
  }
}
</script>

<style lang="postcss" scoped>
.container {
  @apply flex flex-row flex-wrap justify-center max-w-sm;
  @apply text-left;
}

h1 {
  @apply text-xl font-bold my-5 ml-10 w-full;
}

.outer-map {
  @apply w-full;

  & .map-area {
    @apply flex flex-row;
    @apply w-full h-0 pb-0 flex-shrink-0 shadow relative select-none;
    @apply bg-cover bg-top bg-no-repeat;
    background-image: url('~assets/img/map.png');
    max-width: 650px;
    min-width: 320px;
    padding-top: calc(500 / 650 * 100%);

    &::before {
      @apply absolute inset-0;
      @apply bg-black opacity-25;
      content: ' ';
    }

    & .faces {
      & img {
        width: 50px;
        @apply absolute;
        @apply shadow-lg rounded-lg mx-auto;
        @apply border border-white;
      }
    }

    & .faces.flag {
      & img {
        &.a {
          top: 55%;
          left: 45%;
        }
        &.e {
          top: 25%;
          left: 15%;
        }
        &.f {
          top: 55%;
          left: 15%;
        }
        &.g {
          top: 35%;
          left: 35%;
        }
        &.i {
          top: 75%;
          left: 30%;
        }
        &.r {
          top: 20%;
          left: 60%;
        }
        &.t {
          top: 75%;
          left: 65%;
        }
      }
    }

    & .faces.girl {
      & img {
        &.a {
          top: 55%;
          left: 45%;
        }
        &.e {
          top: 25%;
          left: 15%;
        }
        &.f {
          top: 55%;
          left: 15%;
        }
        &.g {
          top: 35%;
          left: 35%;
        }
        &.i {
          top: 75%;
          left: 30%;
        }
        &.r {
          top: 20%;
          left: 60%;
        }
        &.t {
          top: 75%;
          left: 65%;
        }
      }
    }
  }
}
</style>
