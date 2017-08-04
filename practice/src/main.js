
import Vue from 'vue';
import App from './App';
import VueRouter  from 'vue-router'
// import axios from 'axios';
import {routes} from './router';
// import {store} from './store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
        return {
          selector: to.hash
        };
    }
      return { x: 0, y: 600 };
  }
});



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
