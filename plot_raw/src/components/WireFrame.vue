<template>
  <div class="page">
    <div class="header container">
      <div class="logo">
        <img src="../assets/images/logo.svg" alt="">
      </div>
      <div class="menu">
        menu
      </div>
    </div>
    <div class="main-banner">
      <img class="banner" src="../assets/images/main_banner.png" >
    </div>
    <div class="main container">
      <div class="container">
        <div class="ranking"></div>
      </div>
      <div class="category container">
        <div class="cg-heading container">cg-heading</div>
        <div class="cg-list container">
          <div class="cg-list-1">list1</div>
          <div class="cg-list-2">list2</div>
          <div class="cg-list-3">list3</div>
        </div>
        <ul class="cg-items container">
          <li class="cg-item1">
            <img src="../assets/images/poster01.gif" alt="">
          </li>
          <li class="cg-item2">
            <img src="../assets/images/poster02.gif" alt="">
          </li>
          <li class="cg-item3">
            <img src="../assets/images/poster03.gif" alt="">
          </li>
          <li class="cg-item3">
            <img src="../assets/images/poster04.gif" alt="">
          </li>
        </ul>
        <div class="more">more</div>
      </div>
    </div>
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
export default {
  
}
</script>
  
<style lang="sass">
  @import "~config"
  .page
    background: url('../assets/images/bg_img.png') no-repeat
    // background-position: 50px 0
    background-size: 100%
  .container
    +container(1190px 12)
  .logo
    +span(3)
    height: leading(4)
    // background: #999
    img
      // margin-top: leading(1)
      // width: 200%
  .menu
    +span(last 5)
    height: leading(4)
    background: #999
  .main-banner
    +container(auto)
    background: #333
    position: relative
    overflow: hidden
    padding-top: 35%
    // height: leading(25)
    img
      position: absolute
      width: 100%
      height: auto
      top: 50%
      transform: translateY(-50%)
  .banner
    width: 100%
  .ranking
    +span(4 last)
    margin-top: leading(2)
    background: #999
    height: leading(2)
    // margin-left: isolate(9)
  .category
    // background: blue
    margin-top: leading(2)
  .cg-heading
    background: #999
    +span(2)
    height: leading(2)
    margin-right: span(10)
  .cg-list
    div
      +span(2)
      background: #999
      height: leading(2)
      margin-top: leading(2)
  .cg-items
    li
      +span(2 of 10)
      // height: auto
      background: #999
      margin-top: leading(2)
      position: relative
      overflow: hidden
      padding-top: 30%
      img
        position: absolute
        width: 100%
        height: auto
        top: 50%
        transform: translateY(-50%)
</style>