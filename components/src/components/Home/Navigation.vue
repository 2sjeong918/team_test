<!--Search -->
<template>
  <div>
    <h2>Navigation</h2>
      <ul>
        <router-link to="/home"  class="user signin active" active-class="activated"  tag="li"> 
          <a href>메인</a>
        </router-link>
        <router-link to="/home/search" class="user signup active" active-class="activated" tag="li">
          <a href>검색하기</a>
        </router-link>
        <router-link to="/"  class="user signin active" active-class="activated"  tag="li"> 
          <a href>카테고리</a>
        </router-link>
        <router-link to="/"  class="user signin active" active-class="activated"  tag="li"> 
          <a href>추천</a>
        </router-link>
        <router-link to="/home/mypage"  class="user signin active" active-class="activated"  tag="li"> 
          <a href>마이페이지</a>
        </router-link>
      </ul>
  </div>    
</template>
<script>

import Search from './Search'
export default {
  data() {
     return {


    }
  },
  components: {
    Search
  }
}
</script>
<style>


</style>