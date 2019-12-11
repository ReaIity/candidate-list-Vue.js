import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from './plugins/axios';




Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueAxios);
const router = new VueRouter({
  base: __dirname,
  routes: [
      { path: '/', component: App },
  ]
})

new Vue({
  router,
  render: h => h(App),

}).$mount('#app');
