<template>
  <div class="carousel">
     <slot></slot>
      <div class="information" >
      <h2>1</h2>
      <h3>라이프 사진전</h3>
      <div class="text-sub">
        <span>예술의 전당</span>
        <span>한가람 미술관</span>
        <span>2017.7.7 - 2017.10.8</span>
      </div>
      <button type="button" class="carousel-button is-prev" @click="prevItem">
        <img src="https:icon.now.sh/chevron/13/rgb(30, 11, 101)/left" alt="prev item">
      </button>
      <button type="button" class="carousel-button is-next" @click="nextItem">
        <img src="https:icon.now.sh/chevron/13/rgb(30, 11, 101)/right" alt="next item">
      </button>
      <div class="indicators">
        <a href="" role="tab" @click.prevent="gotoItem(n-1)" v-for="n in items_count" :class="{'is-active':active_index === n-1}">
          <img :src="activeIndexSrc(n-1)" :alt="activeIndexAlt(n-1)">
        </a>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  name: 'Carousel',
  props:{
    index: {
      type: Number,
      default : 0
    }
  },
  // 각각의 아이템에 인덱스 설정.
  mounted() {
    this.items.forEach((item,i)=> item.index = i);
    //이미지 로딩, 리사이즈 상태에 따른 컴포넌트 높이 조절
    // let setHeight = () => this.$el.style.height = this.items[0].$el.getBindingClientRect().height + 'px';
    // window.addEventListener('DOMContentLoaded', setHeight)
    // window.addEventListener('resize', setHeight)
  },
  data(){
     return {
       active_index: this.index,
       items: this.$children 
     }
  },
  computed: {
    items_count(){
      return this.items.length;
    }
  },
  methods: {
    activeIndexSrc(n){
      let path = this.active_index === n ? 'lens' : 'panorama_fish_eye';
    return `https://icon.now.sh/${path}/10/rgb(30, 11, 101)`;
    },
    activeIndexAlt(n){
      let message = this.active_index === n ? 'Current Item' + n : 'Item' + n;
      return message;
    },
    prevItem(){
      // console.log('prev item');
      if( --this.active_index < 0) {
        this.active_index = this.items_count - 1;
        }
    },
    nextItem(){
      // console.log('next item');
      if( ++this.active_index >= this.items_count) {
        this.active_index = 0;
      }
    },
    gotoItem(n){
      this.active_index = n;
    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .carousel
    background: black
    width: 100%
    position: relative
    padding-bottom: 35%

    
  .information
      background-color: rgb(255, 255, 255)
      opacity: 0.8
      position: absolute
      left: 65%
      top: 30%
      width: 23%
      height: 60%
      text-align: right
      padding: 30px
  h2
    text-align: left
    font-size: 2rem
  h3
    padding-top: 10px
    border-top: 1px solid rgb(30, 11, 101)
    font-size: 2.5rem
    color: rgb(34, 34, 34)
    font-weight: bold
    line-height: leading(2)
    // background: red
  .text-sub
    margin-top: 20% 
    span
      display: block
      margin-top: 3%
      font-size: 1.4rem
      // background: blue
  .carousel-button
    position: absolute
    bottom: 5%
    border: none
    opacity: 1
    background-color: #fff
    transition: opacity 0.4s
    transform: translateY(-50%)
    &.is-prev
      left: 20px
    &.is-next
      right: 20px  
  .indicators
    position: absolute
    left: 50%
    bottom: 10%
    transform: translateX(-50%)
    a 
      margin:
        left: 4px
        right: 4px
        
      &is-active
        cursor: default 
        
        

        

</style>
