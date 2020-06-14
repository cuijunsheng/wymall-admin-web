import defaultSettings from '@/settings'

const {theme, tagsView, fixedHeader, sidebarLogo, uniqueOpened, showFooter, footerTxt, caseNumber} = defaultSettings

const settings = {
  state: {
    theme: theme,
    showSettings: false,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo,
    uniqueOpened: uniqueOpened,
    showFooter: showFooter,
    footerTxt: footerTxt,
    caseNumber: caseNumber
  },
  mutations: {
    CHANGE_SETTING: (state, {key, value}) => {
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  },
  actions: {
    changeSetting({commit}, data) {
      commit('CHANGE_SETTING', data)
    }
  }
}


export default settings

