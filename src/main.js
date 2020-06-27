import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./permission.js"; //导入鉴权相关，router.beforeEach实现路由拦截
import Cookies from 'js-cookie'

import 'normalize.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import 'assets/styles/index.scss'
import 'assets/icons'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium',// set element-ui default size
  locale
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
