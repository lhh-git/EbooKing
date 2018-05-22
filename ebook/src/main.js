import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/reset.css'
import '../static/css/iconfont/iconfont.css'
import '../static/css/adapt.css'
import store from '@/store'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
