<template>
  <div class="container" v-cloak>
    <h2 class="cg-heading container">카테고리</h2>
    <div class="container">
      <div class="category" :key="index" v-for="(list, index) in cg_lists">
        <h2 class="cg-list-heading">
          <a href="" @click.prevent="toggleList(list, $event)">{{list.heading}}</a>
        </h2>
        <ul v-if="list.items" class="cg-list" :class="{'active' : cg_lists[index] === isActive }">
          <li>
             <a href="" @click.prevent="filterItem(index, $event)" :key="index" v-for="(item,index) in list.items">{{item}}</a> 
          </li>
        </ul>
        <input v-if="!list.items" @click="changeText(index, $event)" class="cg-list" :class="{'active' : cg_lists[index] === isActive }" type="date">
      </div>
    </div>
    <ul class="cg-items container">
      <router-link :key="index" v-for="(data,index) in datalist" to="/detail" tag="li">
        <a href=""><img :src="data.poster_img" alt=""></a> 
      </router-link> 
    </ul>
    <div class="more"><a href="">더보기</a></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  // computed: {
  //   ...mapGetters('displayModule', [
  //     'getDisplayList'
  //   ])
  // },
  data() {
    return {
      date: '',
      isActive: '',
      datalist: [],
      cg_lists: [
        {
          heading: '장르별',
          items: ['모든 장르', '미술', '사진', '영상', '공예', '조각', '설치', '기타']
        },
        {
          heading: '지역별',
          items: ['모든 지역', '서울', '인천', '대전', '대구', '울산', '광주', '부산', '경기도', '강원도', '충청도', '경상도', '전라도', '제주도']
        },
        {
          heading: '날짜별'
        },
        {
          heading: '추천순',
          items: ['추천순', '인기순']
        }
      ]
    }
  },
  created(){ this.$http.get('https://plot-b2239.firebaseio.com/display.json')
          .then(response => {
            // console.log(Array.isArray(response.data));
            const datalist = response.data;
            this.datalist = datalist;
            console.log(this.datalist);
          })
          .catch(error => console.log(error.message))
  },
  methods: {
    toggleList(list, e){
      this.isActive === list ? this.isActive = '' : this.isActive = list
      // console.log(list.heading === '날짜별');
    },
    filterItem(index, e){
      let el = e.target
      this.cg_lists[index].heading = el.textContent
      this.isActive = ''
    },
    changeText(index, e){
      console.log(e.target.value);
      if (e.target.value) {
        this.cg_lists[index].heading = e.target.value
      }
    }
  }
  }
</script>
<style lang="sass" scoped>
  @import "~config"
  
  .container
    +container(1190px 12)
    // +global-box-sizing(border-box)
  [v-cloak]
    display: none

  .cg-heading
    margin-top: leading(2)
    padding-left: leading(1)/4
    background: #1e0b65
    color: #fff
    font: bold 2rem "Noto Sans kr", sans-serif
    +span(2)
    line-height: leading(2)
    height: leading(2)
    margin-right: span(10)

  .category
    +span(2)
    margin-top: leading(2)
    position: relative
    
  .cg-list-heading, .cg-list, .cg-sort-heading, .cg-sort
    border: 2px solid #1e0b65
    a
      padding-top: leading(1)/4
      padding-left: leading(1)/4
      color: #1e0b65
      display: block
      text-decoration: none
      font: bold 2rem "Noto Sans kr", sans-serif
      
  .cg-list-heading, .cg-sort-heading
    height: leading(2)

  .cg-list, .cg-sort
    display: none
    max-height: leading(7)
    overflow: scroll
    border-top: none
    background: #fff
    position: absolute
    width: 100%
    top: leading(2)
    z-index: 1000
  .active
    display: block
  .more a
    +push(5)
  // .cg-sort
  //   a
  //     +span(2 last)
  //     line-height: leading(2)
  //     color: #1e0b65
  //     border: 2px solid #1e0b65
  //     height: leading(2)
  //     margin-top: leading(2)
  //     text-decoration: none
  //     font: bold 2rem "Noto Sans kr", sans-serif
  .cg-items
    +span(12 of 12 nest)
    li
      +span(2 of 10 .17)
      // height: auto
      background: #1e0b65
      // border: 2px solid #fff
      margin-top: leading(2)
      position: relative
      overflow: hidden
      padding-top: 27%
      border-radius: 3px
      img
        position: absolute
        width: auto
        height: 100%
        top: 0
        left: 50%
        transform: translateX(-50%)

</style>
