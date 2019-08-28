import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './filters/strings';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss';

Vue.config.productionTip = false;

Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
