import Map from '~/assets/json/map.json'

export const state = () => ({
  map: Map
})

export const getters = {
  getProvinceInfo: state => code => {
    const prov = state.map[code]
    prov.code = code
    return prov
  },
  getWaters: state => {
    const waters = Object.keys(state.map).filter(key => {
      return state.map[key].type === 'Water'
    })
    return waters
  },
  getProvinces: state => {
    const provinces = Object.keys(state.map).filter(key => {
      return state.map[key].type !== 'Water' && !state.map[key].supplycenter
    })
    return provinces
  },
  getSupplyCenters: state => {
    const supplycenters = Object.keys(state.map).filter(key => {
      return state.map[key].supplycenter
    })
    return supplycenters
  }
}
