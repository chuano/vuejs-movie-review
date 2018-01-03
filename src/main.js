// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import './filters/strings'
import router from './router'
import store from './store'
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import '../node_modules/font-awesome/scss/font-awesome.scss'

Vue.config.productionTip = false

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
