<template>
  <div id="app">
    <!-- <wire-frame></wire-frame> -->
    <login></login>
    <start></start>
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Start from './components/Start.vue';

export default {
  name: 'app',
  components: {
    Login, Start
    },
  data () {
    return {
      vue: {
        // 동적 속성 바인딩 시에는 src/ 디렉토리에서 찾아야 이미지 출력
        // file-loader를 사용하지 않고, 직접 속성 값을 설정하기 때문
        path: './src/assets/logo.png',
        label: 'Vue.js'
      }
    }
  }
}
</script>

<style lang="sass">
  @import "~config"

  html 
    font-size: 100%
    background: #fff
  body
    margin: 0
    

  // .login-input-list 
  //   list-style: none
  //   // padding-left: 0px
  //   background: pnik
  
  // .login-input 
  //   width: 284px
	//   height: 42px
  //   background-color: #ffffff
  
  // .login-page-submit 
  // .login-join 
  //   width: 160px
  //   height: 40px
  //   background-color: #1e0b65
  //   border: solid 2px #ffffff
  //   display: inline-block
  //   text-align: center
  //   margin-top: leading(1)
  //   // margin-bottom: leading(-0.1)
    
  // .login-page-submit 
  //   width: 42px
  //   height: 16px
  //   font-family: NotoSansKR
  //   font-size: 16px
  //   font-weight: bold
  //   line-height: 2.25
  //   color: #ffffff
    // display: inline-block
  
</style>
