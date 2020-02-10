<template>
  <section class="container">
    <h1>新卓 : {{ getTableId() }}</h1>
    <template v-if="false">
      <map-area :powers="powers" :territories="territories" :units="units" />
    </template>

    <div class="top-area">
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
    </div>

    <div class="middle-area">
      <div class="owner">
        <h2>卓主</h2>
        <div><img :src="table.owner.image_url" /></div>
        <div class="name">{{ table.owner.name }}</div>
        <div class="name">@{{ table.owner.nickname }}</div>
      </div>

      <div class="regulation">
        <h2>レギュレーション</h2>
        <table>
          <tbody>
            <tr>
              <td data-label="開始日時" class="with-label">
                {{ $formatPeriod(table.period) }}
              </td>
              <td data-label="フェイス" class="with-label">
                {{ $getFaceType(table.regulation.face_type) }}
              </td>
              <td data-label="外交期間" class="with-label half">
                {{ $getDuration(table.regulation.duration) }}
              </td>
              <td data-label="更新種別" class="with-label half">
                {{ $getPeriodRule(table.regulation.period_rule) }}
              </td>
              <td data-label="掛け持ち" class="with-label half">
                {{ $getJugglingState(table.regulation.juggling) }}
              </td>
              <td data-label="鍵" class="with-label half">
                {{ $getPrivateState(table.private) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="players">
      <h2>参加者（あと {{ slot }} 名）</h2>
      <table>
        <tbody>
          <tr v-for="player in table.players" :key="player.id">
            <td class="image"><img :src="player.user.image_url" /></td>
            <td class="name">
              {{ player.user.name }} <span>@{{ player.user.nickname }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="entry-form">
      <h2>参加登録フォーム</h2>
      <div class="caution-wrap">
        <div class="caution">
          現在参加登録は受け付けておりません。
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MapArea from '@/components/-map-area'

export default {
  head() {
    return {
      title: '新卓'
    }
  },
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
    },
    slot() {
      return 7 - this.table.players.length
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
  margin-bottom: calc(500 / 650 * 100% * -1);
}

h1 {
  @apply text-xl font-bold my-5 ml-10 w-full;
}

.top-area {
  @apply w-screen;
  @apply flex flex-row flex-wrap justify-center;

  & .outer-map {
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
}

.middle-area {
  @apply w-screen;
  @apply flex flex-row flex-wrap justify-center;

  & .owner {
    min-width: 300px;

    @apply mt-5;
    @apply flex flex-col justify-center max-w-sm;
    @apply text-center;
    @apply rounded-lg bg-gray-400 py-2;
    & h2 {
      @apply text-center mb-1 px-0;
    }
    & img {
      @apply border-4 border-white;
      @apply rounded-full;
      @apply mx-auto;
    }
  }

  & .regulation {
    @apply mt-5 max-w-sm;
    min-width: 300px;

    & h2 {
      @apply text-center mb-1 px-0;
    }

    & table {
      @apply w-full mx-0 my-auto;
      @apply border-separate border-0;
      @apply leading-normal;

      & tbody {
        & tr {
          @apply block mx-2 mb-2 p-2;
          @apply rounded shadow;
          @apply border-solid border border-gray-400;
          @apply bg-white;

          & th {
            @apply block overflow-hidden;
            @apply rounded;

            &.new {
              /* mode == 0 */
              @apply text-left px-2 py-2;
              @apply relative pl-16;
              @apply font-normal;
              @apply bg-indigo-200;
            }

            &.girl {
              /* mode == 1 or 2*/
              @apply text-left px-4 py-2;
              @apply bg-pink-200;
            }
            &.flag {
              /* mode == 1 or 2*/
              @apply text-left px-4 py-2;
              @apply bg-orange-200;
            }

            & span.table-number {
              /* mode == 1 or 2*/
              @apply font-bold;
            }
          }

          & td {
            @apply block;
            @apply text-left px-2 py-2;
            @apply relative pl-24;
            @apply font-normal text-sm;
            @apply border-b;

            &.half {
              @apply w-1/2 -mx-1;
              @apply inline-block;
            }

            &.button {
              @apply px-0 pt-4;
              @apply text-center;
            }

            & .twttier-account {
              @apply text-xs;
            }
          }

          & th.with-label::before {
            @apply font-bold;
            @apply absolute;
            content: attr(data-label) ' : ';
            left: 10px;
          }

          & td.with-label::before {
            @apply font-bold;
            @apply absolute inline-block w-20 text-right;
            content: attr(data-label) ' : ';
            left: 0;
          }
        }
      }
    }
  }
}

.players {
  min-width: 300px;

  @apply mt-5;
  & h2 {
    @apply text-center mb-1 px-0;
  }

  & table {
    @apply w-full mx-0 my-auto;
    @apply border-separate border-0;
    @apply text-sm;

    & tr {
      @apply block mx-2 mb-2 px-2 py-0;
      @apply rounded shadow;
      @apply border-solid border border-gray-400;
      @apply bg-white;

      & td {
        @apply p-2;

        &.image {
          @apply rounded-lg;
          @apply m-0;

          & img {
            width: 24px;
            @apply rounded-full;
            @apply m-0;
          }
        }
      }
    }
  }
}

.entry-form {
  @apply w-screen pb-10;
  min-width: 300px;

  @apply mt-5;
  & h2 {
    @apply text-center mb-1 px-0;
  }

  & .caution {
    max-width: 400px;
    @apply border border-red-400;
    @apply text-red-600;
    @apply bg-red-100;
    @apply mx-auto p-4;
  }
}
</style>

<style lang="postcss" scoped>
@screen sm {
  .middle-area {
    @apply mt-20;

    & .owner {
      @apply mb-2;
      min-width: 240px;
    }
  }

  .players {
    @apply mt-20;
  }

  .entry-form {
    @apply mt-20;
  }
}
</style>
