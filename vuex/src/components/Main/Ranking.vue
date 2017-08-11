<!--Ranking Carousel --> 
<template>
  <div class="container">
    <div class="ranking">실시간 랭킹</div>
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
<style lang="sass" scoped>
  @import "~config"
  
  .container
    +container(1190px 12)

  .ranking
    +span(4 last)
    margin-top: leading(2)
    background: #1e0b65
    height: leading(2)
    color: #fff
    font: bold 2rem "Noto Sans kr", sans-serif
</style>
