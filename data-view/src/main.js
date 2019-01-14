// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { DatePicker } from 'element-ui'
import HelloWorld from '@/components/HelloWorld'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
// const store = new Vuex.Store({})
const routes = [{ path: '/', component: HelloWorld }]
const router = new VueRouter({
  routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: {
    App
  },
  template: '<App/>'
})
