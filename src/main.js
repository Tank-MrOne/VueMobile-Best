import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'lib-flexible/flexible'
import * as API from './api'
import waterfall from 'vue-waterfall2'

Vue.use(waterfall)
Vue.config.productionTip = false
Vue.prototype.$API = API

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
