<template>
  <div>
    <h2>회원가입</h2>
      <ul>
        <router-link to="/home" class="user signup active" active-class="activated" tag="li">
          <a href>회원가입성공!(홈으로가기)</a>
        </router-link>
        <router-link to="/signin"  class="user signin active" active-class="activated"  tag="li"> 
          <a href>로그인</a>
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