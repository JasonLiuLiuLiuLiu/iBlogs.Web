import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootswatch/dist/litera/bootstrap.min.css'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
