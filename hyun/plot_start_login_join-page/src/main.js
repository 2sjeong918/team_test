import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes.js';
import App from './App';
import toggle from './toggle'

Vue.use(VueRouter);



const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});