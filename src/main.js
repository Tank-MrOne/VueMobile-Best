import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 图片懒加载 npm i vue-lazyload -S
import VueLazyload from 'vue-lazyload'
import waterfall from 'vue-waterfall2'

import 'lib-flexible/flexible'
import * as API from './api'

import 'swiper/dist/css/swiper.min.css'


Vue.use(VueLazyload)
Vue.use(waterfall)
Vue.config.productionTip = false
Vue.prototype.$API = API

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
