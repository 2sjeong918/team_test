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
import Main         from './components/Main/Main.vue'
import Home         from './components/Home/Home.vue'
//search
import Search       from './components/Home/Search.vue'
//detail 
import Detail       from './components/Detail/Detail.vue'

const routes = [
  // { path: '/', component: Start },
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '*', redirect: '/' },
  {  path: '/', component: Home ,
    children:[
      {  path: '/', component: Main },
      {  path: '/detail', component: Detail },
      {  path: '/search', component: Search },
      {  path: '/mypage', component: Mypage, 
        children:[
          {  path: '/mypage', component: Wishlist },
          {  path: '/mypage/display', component: Display },
          {  path: '/mypage/comments', component: Comments }
        ]
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;