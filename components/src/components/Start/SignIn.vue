<template>
  <div>
    <h2>로그인</h2>
      <ul>
        <router-link to="/home" class="user signup active" active-class="activated" tag="li">
          <a href> 로그인하기(홈으로가기)</a>
        </router-link>
        <router-link to="/signup"  class="user signin active" active-class="activated"  tag="li"> 
          <a href>회원가입</a>
        </router-link>
      </ul>

  </div>
</template>
<script>

export default {
  
  data() {
     return {


    }
  }
}
</script>
<style>


</style>