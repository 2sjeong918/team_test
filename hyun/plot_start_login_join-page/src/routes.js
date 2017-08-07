import Login from './components/Login.vue';
import Start from './components/Start.vue';
import Join from './components/Join.vue';

export const routes = [
  { path: '/', component: Start },
  { path: '/login', component: Login},
  { path: '/join', component: Join}

];