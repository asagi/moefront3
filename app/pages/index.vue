<template>
  <section class="container">
    <div class="top-area">
      <MapArea :occupieds="occupieds" :units="units" />
      <Greeting />
    </div>
    <AmazonLink />

    <div class="caution-wrap">
      <p class="caution">
        当サイトは現在開発中であり、実際にプレイすることはできません。
      </p>
    </div>

    <div class="flex-area">
      <div class="tables">
        <h2>Tables</h2>
        <NewTablesList :list="newTablesList" />
        <LiveTablesList :list="liveTablesList" />
        <ClosedTablesList :list="closedTablesList" />
      </div>
      <div class="links">
        <hr class="border-top" />
        <Contact />
        <Links />
        <hr class="border-bottom" />
      </div>
    </div>
    <Thanks />
  </section>
</template>

<script>
import MapArea from '@/components/-map-area'
import Greeting from '@/components/-greeting-block'
import NewTablesList from '@/components/-new-tables-list-block'
import LiveTablesList from '@/components/-live-tables-list-block'
import ClosedTablesList from '@/components/-closed-tables-list-block'
import Contact from '@/components/-contact-block'
import Links from '@/components/-links-block'
import Thanks from '@/components/-thanks-block'
import AmazonLink from '@/components/-amazon-link'

import Units from '~/assets/json/units.json'
import Occupides from '~/assets/json/occupieds.json'
import DummyTables from '~/assets/json/tables.json'

export default {
  head() {
    return {
      title: 'Diplomacy MOE',
      titleTemplate: ''
    }
  },
  components: {
    MapArea,
    Greeting,
    NewTablesList,
    LiveTablesList,
    ClosedTablesList,
    Contact,
    Links,
    Thanks,
    AmazonLink
  },
  data: () => {
    return {
      occupieds: Occupides,
      units: Units,
      tables: DummyTables
    }
  },
  computed: {
    newTablesList() {
      return this.tables
    },
    liveTablesList() {
      return this.tables
    },
    closedTablesList() {
      return this.tables
    }
  }
}
</script>

<style lang="postcss">
html {
  @apply overflow-y-scroll;
  & .container {
    @apply my-0 items-start justify-center text-center;

    & .top-area {
      @apply flex flex-row flex-wrap justify-center;

      & .outer-map {
        @apply w-full;
      }

      & .greeting-block {
        @apply flex flex-col w-full items-start justify-center items-center px-5;
        max-width: 560px;
      }
    }

    & .amaquick-box {
      @apply w-auto mx-4 my-8 py-5;
    }

    & .flex-area {
      & hr {
        @apply relative;

        height: 1px;
        border-width: 0;
        background-image: -webkit-linear-gradient(
          left,
          transparent 0%,
          #000 50%,
          transparent 100%
        );
        background-image: linear-gradient(
          90deg,
          transparent 0%,
          #000 50%,
          transparent 100%
        );

        &.border-top {
          @apply mt-16 mb-8;
        }

        &.border-bottom {
          @apply mt-8 mb-16;
        }
      }
    }

    & .caution-wrap {
      @apply flex flex-row flex-wrap justify-center;
      @apply mt-5 mb-10;

      & .caution {
        @apply bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative;
        @apply flex flex-row justify-center items-center mx-auto;
        @apply mx-5 p-10 bg-white text-sm;
        max-width: 550px;
        z-index: -10;

        & p {
          @apply w-full mx-auto;
        }
      }
    }

    & h2 {
      @apply w-full text-xl mb-4 pl-4 text-left;
    }

    & .tables {
      @apply w-full mt-1 mb-10;
    }

    & .links {
      @apply justify-center block align-top;

      & .contact-block {
        @apply w-full px-5 mt-1;

        & ul {
          @apply list-none text-left mx-5 pb-0;
        }
      }

      & .links-block {
        @apply w-full px-5 mt-10;

        & ul {
          @apply list-none text-left mx-5 pb-0;
        }
      }
    }

    & .thanks-block {
      @apply flex flex-col justify-center items-center;
      @apply w-full px-5 mt-10;

      & ul {
        @apply list-none text-left mx-5 pb-0;
      }
    }
  }
}
</style>

<style lang="postcss">
@screen sm {
  html {
    & .container {
      & .outer-map {
        max-width: 638px;
      }

      & .greeting-block {
        max-width: 560px;
      }

      & .amaquick-box {
        max-width: 991px;
      }

      & .flex-area {
        @apply w-full flex flex-row flex-wrap justify-center;

        & hr {
          width: 600px;
        }
      }

      & .tables {
        max-width: 724px;
      }

      .thanks-block {
        @apply w-full flex flex-col justify-center;
      }
    }
  }
}
</style>

<style lang="postcss">
@screen lg {
  html {
    & .container {
      & .greeting-block {
        max-width: 350px;
      }

      & .amaquick-box {
        @apply mx-auto;
      }

      & .flex-area {
        & .tables {
          @apply w-auto flex-grow;
        }

        & .links {
          & hr {
            @apply inline-block;
            @apply w-2/3;

            &.border-top {
              @apply mt-12 mb-10;
            }

            &.border-bottom {
              @apply my-10;
            }
          }

          & .contact-block {
            @apply w-full;
          }

          & .links-block {
            @apply w-full;
          }
        }
      }
    }
  }
}
</style>
