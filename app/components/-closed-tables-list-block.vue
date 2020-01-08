<template>
  <div class="tables-block">
    <div :class="{ open: isOpened }" class="tables">
      <h2 @click="isOpened = !isOpened" :class="{ open: isOpened }">
        終了した卓の一覧
      </h2>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-if="isOpened" class="talbe-wrapper">
          <div v-if="tables.length === 0" class="empty-message">
            終了した卓はありません。
          </div>
          <table v-if="tables.length > 0">
            <tbody>
              <tr v-for="table in tables" v-bind:key="table.id">
                <th
                  :class="{
                    girl: table.regulation.face_type == 0,
                    flag: table.regulation.face_type == 1
                  }"
                >
                  <span class="turn-number">
                    {{ getTableNumber(table.number) }}
                    {{ table.regulation.face_type == 0 ? '娘' : '旗' }}
                    :
                  </span>
                  {{ getTurn(table.turn, table.phase) }}
                </th>

                <td data-label="次回更新" class="with-label">
                  {{ table.next_period }}
                </td>
                <td data-label="外交期間" class="with-label half">
                  {{ table.regulation.duration == 0 ? '短期' : '標準' }}
                </td>
                <td data-label="更新種別" class="with-label half">
                  {{ table.regulation.period_rule == 0 ? '固定' : '変動' }}
                </td>
                <td class="button">
                  <nuxt-link :to="'/tables/' + table.id" class="btn btn-blue">
                    表示する
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      isOpened: false,
      width: 0
    }
  },
  computed: {
    isSP: function() {
      return this.width < 1024
    },
    tables: function() {
      return this.list
    }
  },
  created: function() {
    this.handleResize = debounce(this.resize, 100)
  },
  mounted: function() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    getTableNumber: number => {
      console.log(number)
      return '#' + ('000' + number).slice(-3)
    },
    getTurn: (turn, phase) => {
      const year = 1900 + turn
      let season = ''
      switch (phase) {
        case 0:
          season = '春外交'
          break
        case 1:
          season = '春撤退'
          break
        case 2:
          season = '秋外交'
          break
        case 3:
          season = '秋撤退'
          break
        case 4:
          season = '秋調整'
          break
      }
      return year + ' 年' + season
    },
    resize: function() {
      this.width = window.innerWidth
    },
    beforeEnter: el => {
      el.style.height = '0'
    },
    enter: el => {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave: el => {
      el.style.height = el.scrollHeight + 'px'
    },
    leave: el => {
      el.style.height = '0'
    }
  }
}
</script>

<style lang="postcss" scoped>
.tables-block {
  @apply my-0;
  margin-top: -1px;

  & .tables {
    @apply my-0;

    & h2 {
      @apply py-3 my-0;
      @apply bg-gray-100;
      @apply border-solid border-t border-b border-gray-400;

      &:before {
        @apply inline-block relative mr-3;
        content: '';
        width: 12px;
        height: 12px;
        border-top: solid 2px #000;
        border-right: solid 2px #000;
        transform: rotate(135deg);
      }
      &.open {
        &:before {
          transform: rotate(-45deg);
        }
      }
    }

    & .talbe-wrapper {
      @apply my-0 py-2;
      overflow-y: hidden;
      transition: height 0.2s ease;

      & .empty-message {
        @apply mt-1 py-4 px-4 mx-4;
        @apply bg-gray-400 rounded-lg;
        @apply text-center;
      }

      & table {
        @apply w-full mx-0 my-auto;
        @apply border-separate border-0;
        @apply leading-normal;

        & theader {
          display: none;
        }

        & tbody {
          & tr {
            @apply block mx-2 mb-2 p-2;
            @apply rounded shadow;
            @apply border-solid border border-gray-400;
            @apply bg-white;

            & th {
              @apply block overflow-hidden;
              @apply rounded;
              @apply text-left px-4 py-2;

              &.girl {
                @apply bg-pink-200;
              }
              &.flag {
                @apply bg-orange-200;
              }

              & span.table-number {
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

            & th.with-label::before,
            & td.with-label::before {
              @apply font-bold;
              @apply absolute;
              content: attr(data-label) ' : ';
              left: 10px;
            }
            & td:last-child {
              @apply border-b-0;
            }
          }
        }
      }
    }
  }
}

@screen sm {
  .tables-block {
    & .tables {
      & h2 {
        @apply mt-10;
      }
    }
  }
}
</style>
