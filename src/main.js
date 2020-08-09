import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import { BootstrapVue } from 'bootstrap-vue'
import 'bootswatch/dist/litera/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/styles/custom.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
