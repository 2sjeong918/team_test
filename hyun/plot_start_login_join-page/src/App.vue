<template>
  <div id="app">
         <!-- <start></start>     -->
        <!-- <login></login>     -->
         <join></join>    
     <!-- <start></start>  -->
    <!-- <test></test> -->
  </div>
</template>

<script>
import Start from './components/Start';
// import Home from './components/Home';
import Login from './components/Login';
// import Test from './components/Test';
import Join from './components/Join';

export default {
  name: 'app',
  components: {
    Start, Login, Join
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
    
  
  
</style>
