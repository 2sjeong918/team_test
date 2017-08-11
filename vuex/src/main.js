import Vue from 'vue';
import App from './App';
import toggle from './toggle';
import router from './router';
import store from './store';

// Axios 설정
import axios from 'axios';

Vue.http = axios;
Vue.prototype.$http = axios;

// store 설정
store.dispatch('initList', 'https://plot-b2239.firebaseio.com/display.json');

// Vue 인스턴스 생성
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});