<template>
  <div class="tables-block">
    <div class="tables">
      <h2>進行中の卓一覧</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
h2 {
  @apply py-3 mb-1;
  @apply bg-gray-100;
  @apply border-solid border-t border-b border-gray-400;
}
table {
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
        @apply text-left px-2 py-2;
        @apply relative pl-16;
        @apply font-normal;
        @apply bg-gray-400;
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
          @apply pt-4;
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
</style>
