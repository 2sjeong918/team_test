<template>
  <div id="banner">
    <banner-carousel>
      <banner-carousel-item class="carousel-item" v-for="(item,index) in items" key="index" :class="{'is-active':active_index === index-1}">
        <img :src="item.src" :alt="item.alt" class="cover">
      </banner-carousel-item>
    </banner-carousel>
  </div>
</template>

<script>
import BannerCarousel     from './BannerCarousel'
import BannerCarouselItem from './BannerCarouselItem'

export default {
  name: 'Banner',
  components: {
    BannerCarousel, BannerCarouselItem
  },
  created() {
       let items = this.items;
  }, 
    
  data () {
    return {
      items: [
        { src: require('../../assets/images/main_banner01.png'), alt: 'Main Banner01'},
        { src: require('../../assets/images/main_banner02.png'), alt: 'Main Banner02'},
        { src: require('../../assets/images/main_banner03.png'), alt: 'Main Banner03'},
        { src: require('../../assets/images/main_banner04.png'), alt: 'Main Banner04'},
      ],
      active_index: this.index
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "~config"

  html 
    font-size: 10px
    background: #fff
    // box-sizing: border-box
    +global-box-sizing(border-box)
  body
    margin: 0
    font-size: 1.6rem

  #banner
    // +container(1190px 12)
    // margin-top: 20px
    color: #2c3e50

  .carousel-item
    position: relative
    overflow: hidden
    padding-bottom: 20%

  .cover
      position: absolute
      width: 90%
      height: auto
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      
  
  
</style>
