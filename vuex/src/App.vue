<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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
    font-size: 10px
    background: #fff
    // box-sizing: border-box
    +global-box-sizing(border-box)
  body
    margin: 0
    font-size: 1.6rem
  #app
    background-image: url(./assets/images/bg_img.png)
    background-repeat: no-repeat
    background-size: 100%
</style>
