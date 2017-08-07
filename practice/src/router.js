// Routing => Login / Main / Mypage /Search / Information /  
import Vue          from 'vue'
import VueRouter    from 'vue-router'

Vue.use(VueRouter);

//login
import Start        from './components/Start/Start.vue'
import SignIn       from './components/Start/SignIn.vue'
import SignUp       from './components/Start/SignUp.vue'
//mypage
import Mypage       from './components/Mypage/Mypage.vue'
import Wishlist     from './components/Mypage/Wishlist.vue'
import Display      from './components/Mypage/Display.vue'
import Comments     from  './components/Mypage/Comments.vue'
//main
// import Main         from './components/Main/Main.vue'


//search

const routes = [
  { path: '/', component: Start },
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '*', redirect: '/' },
  // {  path: '', component: Mypage },
  // {  path: '/wishlist', component: Wishlist },
  // {  path: '/display', component: Display },
  // {  path: '/comments', component: Comments },
  //  {  path: '', component: Main },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;