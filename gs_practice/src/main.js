import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'
// eslint-disable-next-line
console.log(routes);

const router = new VueRouter({
  routes
})

// Vuex
import Vuex from 'vuex'
import _store from './store'
Vue.use(Vuex)
const store = new Vuex.Store(_store)


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
