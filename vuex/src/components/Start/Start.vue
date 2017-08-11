<template>
  <ul>
    <router-link to="/signup" class="user signup active" active-class="activated" tag="li">
      <a href> 회원가입</a>
    </router-link>
    <router-link to="/signin"  class="user signin active" active-class="activated"  tag="li"> 
      <a href>로그인</a>
    </router-link>
  </ul>
</template>
<script>

import SignIn from './SignIn';
import SignUp from './SignUp';
export default {
  data() {
     return {


    }
  },
  components: {
    SignIn,
    SignUp
  }
}
</script>
<style>


</style>