<template>
  <div class="container">
      <!--그리드  -->
      <div class="category ">
         <div class="cg-heading "></div> 
      </div>
      <!--StartPage  -->
      <div class="start-page-warpper">
        <div class="start-page-center">
          <div class="logo">
            <img src="../assets/images/logo_w.svg" alt="plot 홈페이지 로고"> 
          </div>
          <span class="service-msg">플롯은 나만의 전시공간 서비스입니다.</span>
          <div class="start-button-warpper">
            <a class="start-login-facebook" href=""><span class="facebook-login">페이스북 로그인</span></a>
            <a class="start-page-login" href="/login"><span class="login">로그인</span></a>
            <a class="start-join" href="/join"><span class="join">회원가입</span></a> 
          </div>
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
  // .page
  //   // background: url('../assets/images/bg_img.png') no-repeat
  //   // background-position: 50px 0
  //   background-size: 100%
  .container
    +container(1190px 12)
    height: 100vh
  .category
    // background: blue
    margin-top: leading(2)
  .cg-heading
    background: #999
    +span(2)
    height: leading(2)
    margin-right: span(10)
    
  
  //
  .start-page-warpper
    // background-color: powderblue
    // 컬럼 몇칸 쓸거야 
    +span(4)
    // 뒤에서 몇칸
    +span(last 8)
    // display: flex
    // flex-direction: column
    //위에서 부터 몇칸 쓸거야
    margin-top: leading(5)
    

  .start-page-center 
    width: 373px
    height: 504px
    box-shadow: 0 3px 59px 0 rgba(0, 0, 0, 0.5)
    background: url('../assets/images/b_g.png') no-repeat
    
  .logo
   height: leading(12)
  //  background-color: pink
  //  display: flex
  img
    // background: #000
    width: 175px
    height: 40px
    margin-top: leading(2)
    padding-left: span(3.4)
  
  .service-msg
    // background: green 
    width: 203px
    height: 12px
    font-family: NotoSansKR
    font-size: 13px
    line-height: 1.7
    color: #ffffff
    padding-left: span(3.2)

  .start-button-warpper
    +span(4)
    // background: pink
    padding-left: span(3.5)
    // margin-bottom: leading(1)

  .start-login-facebook 
    width: 160px
    height: 40px
    background-color: #5d5df6
    border: solid 2px #ffffff
    display: inline-block
    text-align: center
    margin-top: leading(1)
    margin-bottom: leading(-0.3)
    
  .start-page-login
    width: 160px
    height: 40px
    background-color: #1e0b65
    border: solid 2px #ffffff
    display: inline-block
    text-align: center
    margin-top: leading(1)
    // margin-bottom: leading(-0.1)
    
  .start-join
    width: 160px
    height: 42px
    background-color: #1e0b65
    border: solid 2px #ffffff
    display: inline-block
    text-align: center
    margin-top: leading(1)
    
  .facebook-login 
    text-decoration: none
    width: 105px
    height: 15px
    font-family: NotoSansKR
    font-size: 16px
    line-height: 2.50
    color: #ffffff
    
    
  .login
    text-decoration: none 
    width: 42px
    height: 14px
    font-family: NotoSansKR
    font-size: 16px
    line-height: 2.85
    color: #ffffff
    
  .join 
    width: 57px
    height: 16px
    font-family: NotoSansKR
    font-size: 16px
    line-height: 2.77
    color: #ffffff
 

</style>