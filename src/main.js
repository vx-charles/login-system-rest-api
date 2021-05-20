import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Chartkick from 'vue-chartkick'
import { Chart } from 'chart.js'
import vmodal from 'vue-js-modal'

import './assets/scss/app.scss'

Vue.use(Chartkick.use(Chart))
Vue.use(vmodal)

Vue.config.productionTip = false

window._Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
