import Provinces from '~/assets/json/provinces.json'

export const state = () => ({
  provinces: Provinces
})

export const getters = {
  getProvinceInfo: state => code => {
    const prov = state.provinces[code]
    prov.code = code
    return prov
  },
  getWaters: state => {
    const waters = Object.keys(state.provinces).filter(key => {
      return state.provinces[key].type === 'Water'
    })
    return waters
  },
  getProvinces: state => {
    const provinces = Object.keys(state.provinces).filter(key => {
      return (
        state.provinces[key].type !== 'Water' &&
        !state.provinces[key].supplycenter
      )
    })
    return provinces
  },
  getSupplyCenters: state => {
    const supplycenters = Object.keys(state.provinces).filter(key => {
      return state.provinces[key].supplycenter
    })
    return supplycenters
  }
}
