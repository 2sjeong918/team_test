<template>
  <transition name="fade">
    <div class="carousel-item" v-show="is_visible">
     <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'CarouselItem',
  data(){
    return {
      index: 0
    }
  },
  computed: {
    is_visible(){
      return this.$parent.active_index === this.index;
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .carousel-item
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
  .fade-enter,
  .fade-leave-to
    opacity: 0
  .fade-enter-active,
  .fade-leave-active
    transition: opacity 0.4s

    overflow: hidden
    &is-active
      display: block
      overflow: hidden

  
    
    


</style>