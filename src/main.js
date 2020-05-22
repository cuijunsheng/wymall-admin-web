import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'assets/styles/index.scss'

import 'assets/icons'
import i18n from './lang' // Internationalization

Vue.config.productionTip = false
Vue.use(ElementUI, {
  /*size: Cookies.get('size') || 'medium', */// set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
