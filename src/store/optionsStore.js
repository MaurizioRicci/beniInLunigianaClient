import { getCookie, existCookie, setCookie } from '@/assets/js/cookie'

let options
if (existCookie('options')) {
  options = JSON.parse(getCookie('options'))
}

const optionsStore = {
  state: options || {
    defaultMapCenter: [43.717039, 10.397445]
  },
  getters: {
    getWholeOptions: state => state,
    getDefaultMapCenter: state => state.defaultMapCenter
  },
  mutations: {
    setOptions (state, options) {
      state = Object.assign(state, options)
    },
    setMapCenter (state, latLongArr) {
      state.defaultMapCenter = latLongArr
    },
    saveOptions (state) {
      setCookie('options', JSON.stringify(state), 31 * 6)
    }
  },
  actions: {
    asyncSaveOptions (context) {
      context.commit('saveOptions')
    }
  }
}

export default optionsStore