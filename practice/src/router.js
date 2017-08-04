// Routing => Login / Main / Mypage /Search / Information /  
import Vue          from 'vue'
import Router       from 'vue-router';

//login
import LogIn        from './components/LogIn/LogIn.vue'
import LoginStart   from './components/LogIn/LoginStart.vue'
import SignIn       from './components/LogIn/SignIn.vue'
import SignUp       from './components/LogIn/SignUp.vue'
//mypage
import Mypage       from './components/Mypage/Mypage.vue'
import MypageStart  from './components/Mypage/MypageStart.vue'
import Wishlist     from './components/Mypage/Wishlist.vue'
import Display      from './components/Mypage/Display.vue'
import Comments     from  './components/Mypage/Comments.vue'
//main




export const routes = [
  // {  
    
  //   path: '', 
  //   component: LogIn ,
  //   children: [
  //     {  path: '', component: LoginStart },
  //     {  path: '/signin', component: SignIn },
  //     {  path: '/signup', component: SignUp }
  //   ]
  // },
  {
    path: '',
    component: Mypage,
    children: [
      {  path: '', component: MypageStart },
      {  path: '/wishlist', component: Wishlist },
      {  path: '/display', component: Display },
      {  path: '/comments', component: Comments },
    ]

  }
  
];