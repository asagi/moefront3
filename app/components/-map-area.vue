<template>
  <div class="outer-map">
    <div v-if="isSelected" @click="closeDescription" class="dropdown-bg"></div>
    <div class="map-area">
      <div class="waters">
        <img
          v-for="name in getWaters"
          :key="name"
          :class="name"
          @click="showDetail(name)"
          class="prov"
          src="@/assets/img/prov/water.png"
        />
      </div>
      <div class="provinces">
        <img
          v-for="name in filteredProvinces"
          :key="name"
          :class="name"
          @click="showDetail(name)"
          class="prov"
          src="@/assets/img/prov/pv.png"
        />
      </div>
      <div class="supply-centers">
        <img
          v-for="name in filteredSupplyCenters"
          :key="name"
          :class="name"
          @click="showDetail(name)"
          class="prov"
          src="@/assets/img/prov/sc.png"
        />
      </div>
      <div class="occupiedProvinces">
        <img
          v-for="pv in occupiedProvinces"
          :key="pv.code"
          :class="pv.code"
          :src="require('@/assets/img/prov/pv' + pv.power + '.png')"
          @click="showDetail(pv.code)"
          class="prov"
        />
      </div>
      <div class="occupiedSupplyCenters">
        <img
          v-for="sc in occupiedSupplyCenters"
          :key="sc.code"
          :class="sc.code"
          :src="require('@/assets/img/prov/sc' + sc.power + '.png')"
          @click="showDetail(sc.code)"
          class="prov"
        />
      </div>
      <div class="units">
        <img
          v-for="unit in units"
          :key="unit.province.slice(0, 3)"
          :class="unit.province.slice(0, 3)"
          :src="require('@/assets/img/unit/' + unit.kind + unit.owner + '.png')"
          @click="showDetail(unit.province.slice(0, 3))"
          class="unit"
        />
      </div>
      <div class="anchors">
        <img
          v-for="anchor in filteredAnchors"
          :key="anchor.province"
          :class="anchor.province"
          :src="require('@/assets/img/unit/anchor.png')"
          class="port"
        />
      </div>
      <img
        :class="[prov ? prov.code : '', { inline: isSelected }]"
        class="highlight"
        src="@/assets/img/highlight.png"
      />
      <transition>
        <div v-if="prov" class="description">
          <dl>
            <dt>
              <span class="text-2xl"> {{ prov.code }}</span>
              <span v-if="getOwner(prov.code)" class="text-sm">
                （{{ getPowerInfo(getOwner(prov.code)).jname }}領）
              </span>
            </dt>
            <dd>
              {{ prov.name }} / <span class="text-sm">{{ prov.jname }}</span>
            </dd>
            <dd v-if="unit" class="unit-info">
              <span class="text-sm">駐留ユニット：</span>
              {{ getPowerInfo(unit.power.symbol).genitive }}
              {{ unit.kind.toUpperCase() }}
              {{ prov.code }}
              <span v-if="port"> ({{ port }})</span>
            </dd>
          </dl>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    occupieds: {
      type: Array,
      default: () => {
        return []
      }
    },
    units: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data: () => {
    return {
      prov: null,
      unit: null,
      port: null,
      isSelected: false
    }
  },
  computed: {
    filteredProvinces: function() {
      return this.getProvinces.filter((element, index, array) => {
        const result = this.occupieds.find(occupied => {
          return occupied.code === element
        })
        return result === undefined
      })
    },
    filteredSupplyCenters: function() {
      return this.getSupplyCenters.filter((element, index, array) => {
        const result = this.occupieds.find(occupied => {
          return occupied.code === element
        })
        return result === undefined
      })
    },
    occupiedProvinces: function() {
      return this.occupieds.filter((element, index, array) => {
        return element.supplycenter !== true
      })
    },
    occupiedSupplyCenters: function() {
      return this.occupieds.filter((element, index, array) => {
        return element.supplycenter
      })
    },
    filteredAnchors: function() {
      return this.units.filter((element, index, array) => {
        return element.province.length > 3
      })
    },
    ...mapGetters('map', [
      'getProvinceInfo',
      'getWaters',
      'getProvinces',
      'getSupplyCenters'
    ]),
    ...mapGetters('power', ['getPowerInfo'])
  },
  methods: {
    getOwner: function(name) {
      const prov = this.occupieds.find(occupied => {
        return occupied.code === name
      })
      if (!prov) return null
      return prov.power
    },
    showDetail: function(name) {
      if (this.prov && name === this.prov.code) {
        this.prov = null
        this.unit = null
        this.isSelected = false
      } else {
        this.prov = null
        this.unit = null
        this.port = null
        this.isSelected = false
        this.$nextTick(function() {
          this.prov = this.getProvinceInfo(name)
          this.isSelected = true
          this.unit = this.units.find(unit => {
            return unit.province.slice(0, 3) === name
          })
          if (!this.unit) return
          if (this.unit && this.unit.province.length > 3) {
            this.port = this.unit.province.slice(-2)
          }
        })
      }
    },
    closeDescription: function() {
      this.prov = null
      this.isSelected = false
    }
  }
}
</script>

<style lang="postcss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.v-enter {
  transform: translateY(-10px);
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>

<style lang="postcss" scoped>
.outer-map {
  & .map-area {
    @apply flex flex-row;
    @apply w-full h-0 pb-0 flex-shrink-0 shadow relative select-none;
    @apply bg-cover bg-top bg-no-repeat;
    background-image: url('~assets/img/map.png');
    max-width: 650px;
    min-width: 320px;
    padding-top: calc(500 / 650 * 100%);

    & .description {
      @apply border border-solid rounded-lg bg-white shadow-lg;
      @apply pt-3 pb-5 border-gray-600 border-2;
      @apply absolute left-0 right-auto;
      width: 98%;
      left: 1%;
      transform: translate(0, 10px);

      & dt {
        @apply pb-0;
      }

      & .unit-info {
        @apply pt-3;
      }
    }
  }
}
</style>

<style lang="postcss" scoped>
.prov,
.unit,
.port,
.highlight {
  @apply absolute z-10 cursor-pointer;
  top: 0;
  left: 0;
}
.prov {
  width: 6px;
}
.unit,
.port {
  width: 10px;
}
.highlight {
  width: 16px;
  @apply hidden;
  @apply pointer-events-none;
}

@screen sm {
  .prov {
    width: 10px;
  }
  .unit,
  .port {
    width: 14px;
  }
  .highlight {
    width: 26px;
  }
}
</style>

<style lang="postcss" scoped>
/* waters */
.adr {
  top: 75%;
  left: 42%;
}
.aeg {
  top: 87%;
  left: 56.5%;
}
.bal {
  top: 41.5%;
  left: 47.5%;
}
.bar {
  top: 2%;
  left: 64%;
}
.bla {
  top: 72%;
  left: 69%;
}
.bot {
  top: 27%;
  left: 48.4%;
}
.eas {
  top: 96%;
  left: 65%;
}
.eng {
  top: 51.3%;
  left: 20%;
}
.hel {
  top: 43.3%;
  left: 34.5%;
}
.ion {
  top: 93%;
  left: 45%;
}
.iri {
  top: 46.7%;
  left: 15%;
}
.lyo {
  top: 76%;
  left: 27%;
}
.mao {
  top: 60%;
  left: 5%;
}
.nao {
  top: 25%;
  left: 10%;
}
.nth {
  top: 35%;
  left: 31%;
}
.nwg {
  top: 12%;
  left: 34%;
}
.ska {
  top: 34.1%;
  left: 38.6%;
}
.tys {
  top: 84%;
  left: 37%;
}
.wes {
  top: 85%;
  left: 24%;
}
</style>

<style lang="postcss" scoped>
/* provinces */
.alb {
  top: 81%;
  left: 47.5%;
}
.apu {
  top: 79.5%;
  left: 44%;
}
.arm {
  top: 80%;
  left: 86.3%;
}
.boh {
  top: 56.9%;
  left: 42.1%;
}
.bur {
  top: 61.2%;
  left: 29.3%;
}
.cly {
  top: 31%;
  left: 21.8%;
}
.fin {
  top: 25%;
  left: 53%;
}
.gal {
  top: 59%;
  left: 53.5%;
}
.gas {
  top: 66%;
  left: 21%;
}
.lvn {
  top: 41%;
  left: 54%;
}
.naf {
  top: 93%;
  left: 13%;
}
.pic {
  top: 54%;
  left: 26%;
}
.pie {
  top: 67.8%;
  left: 32.5%;
}
.pru {
  top: 47%;
  left: 45.7%;
}
.ruh {
  top: 53.5%;
  left: 33%;
}
.sil {
  top: 52.8%;
  left: 44.5%;
}
.syr {
  top: 92%;
  left: 87%;
}
.tus {
  top: 75%;
  left: 35%;
}
.tyr {
  top: 62.2%;
  left: 40%;
}
.ukr {
  top: 56%;
  left: 59%;
}
.wal {
  top: 45%;
  left: 21%;
}
.yor {
  top: 40%;
  left: 26%;
}
</style>

<style lang="postcss" scoped>
/* supply centers */
.ank {
  top: 79.6%;
  left: 71.6%;
}
.bel {
  top: 51.5%;
  left: 29.5%;
}
.ber {
  top: 47.9%;
  left: 41%;
}
.bre {
  top: 54.7%;
  left: 18.8%;
}
.bud {
  top: 65.5%;
  left: 48%;
}
.bul {
  top: 75.6%;
  left: 53.8%;
}
.con {
  top: 79.6%;
  left: 60.3%;
}
.den {
  top: 41%;
  left: 39.2%;
}
.edi {
  top: 34.5%;
  left: 25.4%;
}
.gre {
  top: 86.8%;
  left: 51.5%;
}
.hol {
  top: 47.8%;
  left: 31.9%;
}
.kie {
  top: 46.9%;
  left: 37%;
}
.lon {
  top: 47.8%;
  left: 25.3%;
}
.lvp {
  top: 39%;
  left: 22%;
}
.mar {
  top: 70.3%;
  left: 27.5%;
}
.mos {
  top: 41.6%;
  left: 71%;
}
.mun {
  top: 59%;
  left: 37%;
}
.nap {
  top: 84%;
  left: 41.8%;
}
.nwy {
  top: 29%;
  left: 40.1%;
}
.par {
  top: 59%;
  left: 26%;
}
.por {
  top: 73.5%;
  left: 4.7%;
}
.rom {
  top: 79.5%;
  left: 38%;
}
.rum {
  top: 71.7%;
  left: 57.1%;
}
.ser {
  top: 73.7%;
  left: 49.8%;
}
.sev {
  top: 61.5%;
  left: 66.4%;
}
.smy {
  top: 88.7%;
  left: 61.2%;
}
.spa {
  top: 74.1%;
  left: 12.7%;
}
.stp {
  top: 31.3%;
  left: 60.1%;
}
.swe {
  top: 31.2%;
  left: 46.1%;
}
.tri {
  top: 68.5%;
  left: 42.1%;
}
.tun {
  top: 91.4%;
  left: 32%;
}
.ven {
  top: 68%;
  left: 37%;
}
.vie {
  top: 63.6%;
  left: 44.1%;
}
.war {
  top: 51.7%;
  left: 49.6%;
}
</style>

<style lang="postcss" scoped>
.port.bul_ec {
  top: 74%;
  left: 58.5%;
}
.port.bul_sc {
  top: 78%;
  left: 56.5%;
}
.port.spa_nc {
  top: 67%;
  left: 12.7%;
}
.port.spa_sc {
  top: 80.5%;
  left: 12.7%;
}
.port.stp_nc {
  top: 10%;
  left: 70%;
}
.port.stp_sc {
  top: 27%;
  left: 58%;
}
</style>

<style lang="postcss" scoped>
.unit {
  transform: translate(10%, -10%);
}
.highlight.inline {
  @apply inline;
  transform: translate(-30%, -30%);
}
@screen sm {
  .unit {
    transform: translate(20%, -5%);
  }
}
</style>
