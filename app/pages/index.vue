<template>
  <section class="container">
    <div class="flex flex-row flex-wrap justify-center">
      <MapArea :occupieds="occupieds" :units="units" />
      <Greeting />
    </div>
    <div class="flex flex-row flex-wrap justify-center">
      <p class="caution">
        当サイトは現在開発中であり、実際にプレイすることはできません。
      </p>
    </div>
    <AmazonLink />
    <div class="w-full flex flex-row flex-wrap justify-center">
      <div class="tables">
        <NewTablesList :list="newTablesList" />
        <LiveTablesList :list="liveTablesList" />
      </div>
      <div class="justify-center block align-top">
        <Contact />
        <Links />
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
import Contact from '@/components/-contact-block'
import Links from '@/components/-links-block'
import Thanks from '@/components/-thanks-block'
import AmazonLink from '@/components/-amazon-link'

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
    Contact,
    Links,
    Thanks,
    AmazonLink
  },
  data: () => {
    return {
      occupieds: [
        {
          id: 1,
          code: 'ank',
          power: 't',
          supplycenter: true,
          name: 'Ankara',
          jname: 'アンカラ'
        },
        {
          id: 2,
          code: 'apu',
          power: 'i',
          supplycenter: false,
          name: 'Apulia',
          jname: 'アプリア'
        },
        {
          id: 3,
          code: 'arm',
          power: 't',
          supplycenter: false,
          name: 'Armenia',
          jname: 'アルメニア'
        },
        {
          id: 4,
          code: 'ber',
          power: 'g',
          supplycenter: true,
          name: 'Berlin',
          jname: 'ベルリン'
        },
        {
          id: 5,
          code: 'boh',
          power: 'a',
          supplycenter: false,
          name: 'Bohemia',
          jname: 'ボヘミア'
        },
        {
          id: 6,
          code: 'bre',
          power: 'f',
          supplycenter: true,
          name: 'Brest',
          jname: 'ブレスト'
        },
        {
          id: 7,
          code: 'bud',
          power: 'a',
          supplycenter: true,
          name: 'Budapest',
          jname: 'ブダペスト'
        },
        {
          id: 8,
          code: 'bur',
          power: 'f',
          supplycenter: false,
          name: 'Burgundy',
          jname: 'ブルゴーニュ'
        },
        {
          id: 9,
          code: 'cly',
          power: 'e',
          supplycenter: false,
          name: 'Clyde',
          jname: 'クライド'
        },
        {
          id: 10,
          code: 'con',
          power: 't',
          supplycenter: true,
          name: 'Constantinople',
          jname: 'コンスタンティノープル'
        },
        {
          id: 11,
          code: 'edi',
          power: 'e',
          supplycenter: true,
          name: 'Edinburgh',
          jname: 'エディンバラ'
        },
        {
          id: 12,
          code: 'fin',
          power: 'r',
          supplycenter: false,
          name: 'Finland',
          jname: 'フィンランド'
        },
        {
          id: 13,
          code: 'gal',
          power: 'a',
          supplycenter: false,
          name: 'Galicia',
          jname: 'ガリツィア'
        },
        {
          id: 14,
          code: 'gas',
          power: 'f',
          supplycenter: false,
          name: 'Gascony',
          jname: 'ガスコーニュ'
        },
        {
          id: 15,
          code: 'kie',
          power: 'g',
          supplycenter: true,
          name: 'Kiel',
          jname: 'キール'
        },
        {
          id: 16,
          code: 'lon',
          power: 'e',
          supplycenter: true,
          name: 'London',
          jname: 'ロンドン'
        },
        {
          id: 17,
          code: 'lvn',
          power: 'r',
          supplycenter: false,
          name: 'Livonia',
          jname: 'リヴォニア'
        },
        {
          id: 18,
          code: 'lvp',
          power: 'e',
          supplycenter: true,
          name: 'Liverpool',
          jname: 'リヴァプール'
        },
        {
          id: 19,
          code: 'mar',
          power: 'f',
          supplycenter: true,
          name: 'Marseilles',
          jname: 'マルセイユ'
        },
        {
          id: 20,
          code: 'mos',
          power: 'r',
          supplycenter: true,
          name: 'Moscow',
          jname: 'モスクワ'
        },
        {
          id: 21,
          code: 'mun',
          power: 'g',
          supplycenter: true,
          name: 'Munich',
          jname: 'ミュンヘン'
        },
        {
          id: 22,
          code: 'nap',
          power: 'i',
          supplycenter: true,
          name: 'Naples',
          jname: 'ナポリ'
        },
        {
          id: 23,
          code: 'par',
          power: 'f',
          supplycenter: true,
          name: 'Paris',
          jname: 'パリ'
        },
        {
          id: 24,
          code: 'pic',
          power: 'f',
          supplycenter: false,
          name: 'Picardy',
          jname: 'ピカルディ'
        },
        {
          id: 25,
          code: 'pie',
          power: 'i',
          supplycenter: false,
          name: 'Piedmont',
          jname: 'ピエモンテ'
        },
        {
          id: 26,
          code: 'pru',
          power: 'g',
          supplycenter: false,
          name: 'Prussia',
          jname: 'プロイセン'
        },
        {
          id: 27,
          code: 'rom',
          power: 'i',
          supplycenter: true,
          name: 'Rome',
          jname: 'ローマ'
        },
        {
          id: 28,
          code: 'ruh',
          power: 'g',
          supplycenter: false,
          name: 'Ruhrl',
          jname: 'ルール'
        },
        {
          id: 29,
          code: 'sev',
          power: 'r',
          supplycenter: true,
          name: 'Sevastopol',
          jname: 'セヴァストポリ'
        },
        {
          id: 30,
          code: 'sil',
          power: 'g',
          supplycenter: false,
          name: 'Silesia',
          jname: 'シレジア'
        },
        {
          id: 31,
          code: 'smy',
          power: 't',
          supplycenter: true,
          name: 'Smyrna',
          jname: 'スミルナ'
        },
        {
          id: 32,
          code: 'stp',
          power: 'r',
          supplycenter: true,
          name: 'St. Petersburg',
          jname: 'サンクトペテルブルク'
        },
        {
          id: 74,
          code: 'syr',
          power: 't',
          supplycenter: false,
          name: 'Syria',
          jname: 'シリア'
        },
        {
          id: 33,
          code: 'tri',
          power: 'a',
          supplycenter: true,
          name: 'Trieste',
          jname: 'トリエステ'
        },
        {
          id: 34,
          code: 'tus',
          power: 'i',
          supplycenter: false,
          name: 'Tuscany',
          jname: 'トスカーナ'
        },
        {
          id: 35,
          code: 'tyr',
          power: 'a',
          supplycenter: false,
          name: 'Tyrolia',
          jname: 'ティロル'
        },
        {
          id: 36,
          code: 'ukr',
          power: 'r',
          supplycenter: false,
          name: 'Ukraine',
          jname: 'ウクライナ'
        },
        {
          id: 37,
          code: 'ven',
          power: 'i',
          supplycenter: true,
          name: 'Venice',
          jname: 'ヴェネツィア'
        },
        {
          id: 38,
          code: 'vie',
          power: 'a',
          supplycenter: true,
          name: 'Vienna',
          jname: 'ウィーン'
        },
        {
          id: 39,
          code: 'wal',
          power: 'e',
          supplycenter: false,
          name: 'Wales',
          jname: 'ウェールズ'
        },
        {
          id: 40,
          code: 'war',
          power: 'r',
          supplycenter: true,
          name: 'Warsaw',
          jname: 'ワルシャワ'
        },
        {
          id: 41,
          code: 'yor',
          power: 'e',
          supplycenter: false,
          name: 'Yorkshire',
          jname: 'ヨークシャー'
        }
      ],
      units: [
        {
          id: 67,
          province: 'vie',
          keepout: null,
          kind: 'a',
          owner: 'a',
          power: { symbol: 'a' }
        },
        {
          id: 68,
          province: 'bud',
          keepout: null,
          kind: 'a',
          owner: 'a',
          power: { symbol: 'a' }
        },
        {
          id: 69,
          province: 'tri',
          keepout: null,
          kind: 'f',
          owner: 'a',
          power: { symbol: 'a' }
        },
        {
          id: 70,
          province: 'lvp',
          keepout: null,
          kind: 'a',
          owner: 'e',
          power: { symbol: 'e' }
        },
        {
          id: 71,
          province: 'lon',
          keepout: null,
          kind: 'f',
          owner: 'e',
          power: { symbol: 'e' }
        },
        {
          id: 72,
          province: 'edi',
          keepout: null,
          kind: 'f',
          owner: 'e',
          power: { symbol: 'e' }
        },
        {
          id: 73,
          province: 'par',
          keepout: null,
          kind: 'a',
          owner: 'f',
          power: { symbol: 'f' }
        },
        {
          id: 74,
          province: 'mar',
          keepout: null,
          kind: 'a',
          owner: 'f',
          power: { symbol: 'f' }
        },
        {
          id: 75,
          province: 'bre',
          keepout: null,
          kind: 'f',
          owner: 'f',
          power: { symbol: 'f' }
        },
        {
          id: 76,
          province: 'ber',
          keepout: null,
          kind: 'a',
          owner: 'g',
          power: { symbol: 'g' }
        },
        {
          id: 77,
          province: 'mun',
          keepout: null,
          kind: 'a',
          owner: 'g',
          power: { symbol: 'g' }
        },
        {
          id: 78,
          province: 'kie',
          keepout: null,
          kind: 'f',
          owner: 'g',
          power: { symbol: 'g' }
        },
        {
          id: 79,
          province: 'rom',
          keepout: null,
          kind: 'a',
          owner: 'i',
          power: { symbol: 'i' }
        },
        {
          id: 80,
          province: 'ven',
          keepout: null,
          kind: 'a',
          owner: 'i',
          power: { symbol: 'i' }
        },
        {
          id: 81,
          province: 'nap',
          keepout: null,
          kind: 'f',
          owner: 'i',
          power: { symbol: 'i' }
        },
        {
          id: 82,
          province: 'mos',
          keepout: null,
          kind: 'a',
          owner: 'r',
          power: { symbol: 'r' }
        },
        {
          id: 83,
          province: 'war',
          keepout: null,
          kind: 'a',
          owner: 'r',
          power: { symbol: 'r' }
        },
        {
          id: 84,
          province: 'stp_sc',
          keepout: null,
          kind: 'f',
          owner: 'r',
          power: { symbol: 'r' }
        },
        {
          id: 85,
          province: 'sev',
          keepout: null,
          kind: 'f',
          owner: 'r',
          power: { symbol: 'r' }
        },
        {
          id: 86,
          province: 'con',
          keepout: null,
          kind: 'a',
          owner: 't',
          power: { symbol: 't' }
        },
        {
          id: 87,
          province: 'smy',
          keepout: null,
          kind: 'a',
          owner: 't',
          power: { symbol: 't' }
        },
        {
          id: 88,
          province: 'ank',
          keepout: null,
          kind: 'f',
          owner: 't',
          power: { symbol: 't' }
        }
      ],
      tables: DummyTables
    }
  },
  computed: {
    newTablesList() {
      return this.tables
    },
    liveTablesList() {
      return this.tables
    }
  }
}
</script>

<style lang="postcss">
html {
  @apply overflow-y-scroll;
}
.container {
  @apply my-0 items-start justify-center text-center;
}
h2 {
  @apply w-full text-xl mb-4 pl-4 text-left;
}
</style>

<style lang="postcss" scoped>
.caution {
  @apply bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative;
  @apply flex flex-row justify-center items-center mt-10 mx-auto;
  @apply mt-10 mx-5 p-10 bg-white text-sm;
  max-width: 550px;
  z-index: -10;
}
.caution p {
  @apply w-full mx-auto;
}
</style>

<style lang="postcss">
.outer-map {
  width: 500px;
}
</style>

<style lang="postcss">
.greeting-block {
  @apply flex flex-col w-full items-start justify-center items-center px-5;
}
@screen sm {
  .greeting-block {
    max-width: 600px;
  }
}
@screen lg {
  .greeting-block {
    max-width: 500px;
  }
}
</style>

<style lang="postcss">
.tables {
  @apply w-full;
}

.tables-block {
  @apply flex-col w-full mt-10;
}
@screen sm {
  .tables {
    @apply w-auto;
  }
  .tables-block {
    @apply px-0;
    width: 705px;
  }
}
</style>

<style lang="postcss">
.contact-block {
  @apply w-full px-5 mt-10;
}
.contact-block ul {
  @apply list-none text-left mx-5 pb-0;
}
@screen sm {
  .contact-block {
    width: 300px;
  }
}
</style>

<style lang="postcss">
.links-block {
  @apply w-full px-5 mt-10;
}
.links-block ul {
  @apply list-none text-left mx-5 pb-0;
}
@screen sm {
  .links-block {
    width: 300px;
  }
}
</style>

<style lang="postcss">
.thanks-block {
  @apply flex flex-col justify-center items-center;
  @apply w-full px-5 mt-10;
}
.thanks-block ul {
  @apply list-none text-left mx-5 pb-0;
}
@screen sm {
  .thanks-block {
    @apply w-full flex flex-col justify-center;
  }
}
</style>
