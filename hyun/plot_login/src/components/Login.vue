<template>
  <div class="container">
      <!--그리드  -->
      <div class="category ">
         <div class="cg-heading "></div> 
      </div>
      <!--LoginPage  -->
      <div class="login-page-warpper">
      <!--로그인페이지 컨텐츠-->
        <div class="login-page-center">
          <!--컨텐츠 로고 -->
          <div class="logo">
             <img src="../assets/images/logo_w.svg" alt="plot 홈페이지 로고"> 
          </div>
          <form action="" class="login-page-form">
            <div class="login-page-input-group">
                <div class="login-input-list">
                  <label class="login-input">
                    <input class="input-email" type="email" value placeholder="이메일(example@gmail.com)" required>
                  </label>
                  <label class="login-input">
                    <input class="input-pw" type="password" value placeholder="비밀번호(6자이상)" minlength="6" required>
                  </label>
                </div>
                <div class="login-submit">
                  <input class="login-page-submit" type="submit" value="로그인" disabled>
                </div>
            </div>
          </form>
          <div class="login-button-warpper">
            <a class="login-join-link" href="/join"><span class="join">회원가입 하기</span></a> 
            <a class="login-facebook-link" href=""><span class="facebook-login">페이스북으로 로그인</span></a>
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
  .login-page-warpper
    // background-color: powderblue
    // 컬럼 몇칸 쓸거야 
    +span(4)
    // 뒤에서 몇칸
    +span(last 8)
    // display: flex
    // flex-direction: column
    //위에서 부터 몇칸 쓸거야
    margin-top: leading(5)
    
  .login-page-center 
    width: 373px
    height: 504px
    box-shadow: 0 3px 59px 0 rgba(0, 0, 0, 0.5)
    background: url('../assets/images/b_g.png') no-repeat
    
  .logo
   height: leading(8)
  //  background-color: pink
  //  display: flex
  img
    // background: #000
    width: 180px
    height: 40px
    margin-top: leading(2)
    padding-left: span(3.37)

  .login-page-input-group
    // background: yellow
    height: leading(11)
    padding-left: span(1.5)

  .input-email
    width: 285px
    height: 37px
    margin-bottom: span(0.9)
    // margin-top: leading(1)
    font-family: NotoSansKR
    font-size: 16px
    // line-height: 2.25;
    // color: #666666;
    
  .input-pw
    width: 285px
    height: 37px
    font-family: NotoSansKR
    font-size: 16px
  
  .login-page-submit
    width: 177px
    height: 42px
    background-color: #1e0b65
    border: solid 2px #ffffff
    // display: inline-block
    text-align: center
    margin-top: leading(4)
    // margin-bottom: leading(-0.1)
  
  .login-submit
    // text-decoration: none 
    width: 42px
    height: 16px
    font-family: NotoSansKR
    font-size: 16px
    font-weight: bold
    text-align: center
    color: #ffffff
    padding-left: span(2.3)

  .login-button-warpper
    padding-left: span(3.37)

  .login-join-link
    width: 173px
    height: 38px
    background-color: #1e0b65
    border: solid 2px #ffffff
    display: inline-block
    text-align: center
    margin-top: leading(1)

  .join 
    width: 42px
    height: 14pxs
    font-family: NotoSansKR
    font-size: 16px
    // font-weight: bold
    color: #ffffff
    line-height: 2.5
    
  .login-facebook-link
    width: 173px
    height: 42px
    // background-color: #1e0b65
    // border: solid 2px #ffffff
    display: inline-block
    text-align: center
    // margin-top: leading(1)

  .facebook-login
    width: 112px
    height: 20px
    font-family: NotoSansKR
    font-size: 12px
    line-height: 3
    color: #ffffff
    padding-left: span(0.5)



  //
</style>