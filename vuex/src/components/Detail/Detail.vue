<template>
  <div class="modal is-active" >
      모달 액티브
    <div class="modal-background" @click="closeModal">
        배경
      <div class="modal-content">
        <div class="header">
          <img class="stillcut" :src="datalist[0].thumbnail_img[1]" alt="PIXAR 스틸컷" >
          <div class="item expect-rating">
            <!-- <h4 class="rating-title">별점</h4>
            <span class="rating">4</span> -->
          </div>
        </div>
        <div class="footer">
          <div class="frame">
            <img class="detail" :src="datalist[0].poster_img" alt="PIXAR 포스터">
          </div>
          <div class="wrapper">
            <h3>{{ datalist[0].title}}</h3>
            <ul class="information">
              <li>전시 장소: {{datalist[0].place}} </li>
              <li>운영 시간: {{datalist[0].time}}</li>
              <li>전시 주최: {{datalist[0].author}}</li>
              <li>관람 등급: {{datalist[0].grade}}</li>
              <li>전시 장르: {{datalist[0].genre}}</li>
              <li>전시 지역: {{datalist[0].location}}</li>
              <li>전시 기간:{{datalist[0].duration}}</li>
            </ul>
          </div>
          <div class="review">
            <h4 class="comments">코멘트</h4>
            <ul>
              <li class="review-list">
                떠올릴 수밖에 없는 순간들. 되돌아갈 수밖에 없는 사람들.
              </li>
              <li class="review-list">
                이 영화의 역순구성은 그저 드라마틱한 효과를 위한 것이 아니라 인물에게 '안식'을 선사하는 것이 아닐까 한다.
              </li>
              <li class="review-list">
                삶의 감격에 눈물 흘리며 순수하고 싶던  한남자
                급변했던 대한민국의 현대사를 온몸으로 겪어내며 절규하는 한남자
                내인생 최고의 영화
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
</template>
<script>

export default {
  data() {
    return {
      data: '',
      datalist: []
    }
  },
  created(){ this.$http.get('https://plot-b2239.firebaseio.com/display.json')
          .then(response => {
            const datalist = response.data;
            this.datalist = datalist;
            // console.log(this.datalist[0].thumbnail_img[0]);
            console.log(this.datalist);
            window.data = this.datalist;
          })
          .catch(error => console.log(error.message))
  },
  methods: {
    closeModal() {
      this.$router.go(-1);
    }
  },
  
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .modal 
    bottom: 0
    left: 0
    position: absolute
    right: 0
    top: 0
    overflow: hidden
    position: fixed
    z-index: 2000  

  .modal-background 
    bottom: 0
    left: 0
    position: absolute
    right: 0
    top: 0
    background-color: rgba(10,10,10,.86)
    
  .modal-content 
    margin: 0 auto
    overflow: auto
    position: relative
    width: 70%
    height: 100%
    background-color: rgb(255, 255, 255)
    
  .header
    position: relative
    overflow: hidden
    padding-bottom: 50%
    background-color: rgb(255, 255, 255)
  .footer
    height: leading(8)
    background-color: rgb(255, 255, 255)
    position: relative
    
    
  .stillcut 
    position: absolute
    width: 100%
    height: auto
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    
  .item  
    position: relative
    top: 80%
    left: 30%
  .rating-title
    color: rgb(255, 255, 255);
    
  .rating
    color: #fff  
    font-size: 35px
  .frame
    height: leading(1)  
    
  .detail
    position: absolute
    background-color: red
    width: 25%
    height: auto
    top: -15%
    left: 3%
    border: 2px solid #fff

  .wrapper
    // position: relative;
    background-color: rgb(255, 255, 255)
    padding-left: 30% 
    border-bottom: 1px solid rgb(213, 213, 213)
    height: leading(8)

  h3
    font-weight: bold;
    line-height: 4rem
    font-size: 2.5rem;
    color: rgb(51, 51, 51);
    margin-bottom: 5%;  
    border-bottom: 1px solid rgb(213, 213, 213)
  .information
    font-size: 1.2rem
    line-height: 1.5rem
    color: rgb(147, 147, 156)
  .review
    background-color: rgb(250, 248, 245)
    max-height: leading(12)
  .review-list  
    background-color: rgb(255, 255, 255)
    padding: 10% 20%
    border: 1px solid rgb(238, 238, 238)
    margin: 3%
    font-size: 1.2rem
  .comments
    margin: 3%   
  
    
    



  




</style>