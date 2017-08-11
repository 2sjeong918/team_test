<template>
  <div class="page">
    <!--네비게이션  -->
    <navigation></navigation>
    <!--베너 캐러셀  -->
    <div class="main-banner">
      <banner-carousel></banner-carousel>
    </div>
    <!--메인  -->
    <div class="main container">
      <!--랭킹  -->
      <div class="container">
        <div class="ranking"></div>
      </div>
      <!--카테고리  -->
      <div class="category container">
        <h2 class="cg-heading container">카테고리</h2>
        <ul class="container">
          <li class="cg-list"><a href="">장르별</a></li>
          <li class="cg-list"><a href="">지역별</a></li>
          <li class="cg-list"><a href="">날짜별</a></li>
          <li class="cg-sort"><a href="">추천순</a></li>
        </ul>
        <ul class="cg-items container">
          <li class="cg-item1">
            <a href=""><img src="../assets/images/poster01.gif" alt=""></a>
          </li>
          <li class="cg-item2">
            <a href=""><img src="../assets/images/poster02.gif" alt=""></a>
          </li>
          <li class="cg-item3">
            <a href=""><img src="../assets/images/poster03.gif" alt=""></a>
          </li>
          <li class="cg-item4">
            <a href=""><img src="../assets/images/poster04.gif" alt=""></a>
          </li>
          <li class="cg-item5">
            <a href=""><img src="../assets/images/poster01.gif" alt=""></a>
          </li>
          <li class="cg-item1">
            <a href=""><img src="../assets/images/poster01.gif" alt=""></a>
          </li>
          <li class="cg-item2">
            <a href=""><img src="../assets/images/poster02.gif" alt=""></a>
          </li>
          <li class="cg-item3">
            <a href=""><img src="../assets/images/poster03.gif" alt=""></a>
          </li>
          <li class="cg-item4">
            <a href=""><img src="../assets/images/poster04.gif" alt=""></a>
          </li>
          <li class="cg-item5">
            <a href=""><img src="../assets/images/poster01.gif" alt=""></a>
          </li>
        </ul>
        <div class="more"><a href="">더보기</a></div>
      </div>
    </div>
    <!--추천  -->
    <div class="recommand">
      <div class="rc-items container">
        <div class="rc-item1">item1</div>
        <div class="rc-item2">item2</div>
        <div class="rc-item3">item3</div>
        <div class="rc-item4">item4</div>
      </div>
    </div>
  </div>
</template>
  
<script>
import BannerCarousel from './Main/BannerCarousel';
import Navigation from './Home/Navigation'
export default {
  components: {
    BannerCarousel, Navigation
  }
}
</script>
  
<style lang="sass">
  @import "~config"
  
  .container
    +container(1190px 12)

  .main-banner
    background: black
  //   position: relative
  //   overflow: hidden
  //   padding-top: 30%
  //   img
  //     position: absolute
  //     width: 90%
  //     height: auto
  //     top: 50%
  //     left: 50%
  //     transform: translate(-50%, -50%)
  .banner
    width: 100%
  .ranking
    +span(4 last)
    margin-top: leading(2)
    background: #1e0b65
    height: leading(2)
    // margin-left: isolate(9)
  .category
    // background: blue
    margin-top: leading(2)
  .cg-heading
    background: #1e0b65
    color: #fff
    font: bold 2rem "Noto Sans kr", sans-serif
    +span(2)
    line-height: leading(2)
    height: leading(2)
    margin-right: span(10)
  .cg-list, .more
    a
      +span(2)
      line-height: leading(2)
      color: #1e0b65
      border: 2px solid #1e0b65
      box-sizing: border-box
      height: leading(2)
      margin-top: leading(2)
      text-decoration: none
      font: bold 2rem "Noto Sans kr", sans-serif
  .more a
    +push(5)
  .cg-sort
    a
      +span(2 last)
      line-height: leading(2)
      color: #1e0b65
      border: 2px solid #1e0b65
      height: leading(2)
      margin-top: leading(2)
      text-decoration: none
      font: bold 2rem "Noto Sans kr", sans-serif
  .cg-items
    +span(10 of 10 nest)
    li
      +span(2 of 10 .15)
      // height: auto
      background: #1e0b65
      border: 2px solid #fff
      margin-top: leading(2)
      position: relative
      overflow: hidden
      padding-top: 30%
      img
        position: absolute
        width: 100%
        height: auto
        top: 0
        // transform: translateY(-50%)
</style>