
import Vue from 'vue';
import App from './App.vue';

import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  iconfont: 'mdi'
});
Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
