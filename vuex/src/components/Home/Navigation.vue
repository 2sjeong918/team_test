<!--Search -->
<template>
  <div>
    <div class="header container">
      <div class="logo">
        <img src="../../assets/images/logo.svg" alt="">
      </div>
    
      <div class="menu">
        <ul>
          <router-link to="/"  class="user signin active" active-class="activated"  tag="li"> 
          <a href>홈</a>
          </router-link>
          <router-link to="/search" class="user signup active" active-class="activated" tag="li">
            <a href>검색</a>
          </router-link>
          <router-link to="/"  class="user signin active" active-class="activated"  tag="li"> 
            <a href>카테고리</a>
          </router-link>
          <router-link to="/"  class="user signin active" active-class="activated"  tag="li"> 
            <a href>추천</a>
          </router-link>
          <router-link to="/mypage"  class="user signin active" active-class="activated"  tag="li"> 
            <a href>유저</a>
          </router-link>
        </ul>
      </div>
    </div>
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
<style lang="sass" scoped>
  @import "~config"

  .container
    +container(1190px 12)
  .logo
    +span(3)
    height: leading(4)
    // background: #999
    img
      height: leading(2)
      margin-top: leading(1)
      // width: 200%
  .menu
    +span(last 5)
    margin-top: leading(1)
    height: leading(2)
    ul
      display: flex
      justify-content: space-between
      li
        line-height: leading(2)
        a
          font: bold 2rem "Noto Sans kr", sans-serif
          color: #1e0b65
          text-decoration: none
</style>