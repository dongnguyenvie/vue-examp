import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import axios from 'axios'
// event bus
export const eventBus = new Vue({
  data: {
    cart: []
  }
})

Vue.config.productionTip = false
Vue.use(VueRouter)
axios.defaults.baseURL = 'https://coders-tokyo-shop-api.herokuapp.com'
Vue.prototype.$http = axios

const router =  new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
}).$mount('#app')
