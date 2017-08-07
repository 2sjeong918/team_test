<template>
  <div class="container">
      <!--그리드  -->
      <div class="category ">
         <div class="cg-heading "></div> 
      </div>
          <!--JoinPage  -->
      <div class="join-page-wapper">
          <!--회원가입페이지 컨텐츠-->
        <div class="join-page-center">
          <!--컨텐츠 로고 -->
            <div class="logo">
              <img src="../assets/images/logo_w.svg" alt="plot 홈페이지 로고"> 
            </div>
            <!--회원가입 관련 전체 컨텐츠 영역-->
          <div class="join-page-label">
          <!--회원가입에 대한 폼 그룹  -->
            <form class="join-page-form">
              <!--회원가입에 대한 입력 부분-->
              <div class="join-page-input-group">
                <!--사용자 이름 입력 -->
                <label class="join-input">
                  <input class="join-name-input" type="text" value placeholder="이름(홍길동)" recluired>
                </label>
                <!--사용자 이메일 입력 -->
                <label class="join-input">
                  <input class="join-email-input" type="email" value placeholder="이메일(example@gmail.com)" required>
                </label>
              <!--사용자 비밀번호 입력 -->
                <label class="login-input">
                  <input class="join-pw-input" type="password" value placeholder="비밀번호(6자이상)" minlength="6" required>
                </label>
              </div>
              <!--회원동의 그룹 -->
                <!--각 동의에 대한 리스트별 분류해 관리 -->
            <div class="join-page-agreememt-list">
                  <!--플롯 사이트 서비스에 관한 동의 요구 -->
              <div class="join-page-agreememt-list-item">
                <input id="join-page-service-agreememt" type="checkbox">
                  <label class="login-page-agreement-label" for="join-page-agreement" >
                    <a class="login-page-agreement-sub-text-link" href="#">플롯 서비스 이용약관</a>
                    <span>에 동의합니다.</span></label>
                  <!-- : : before  -->
              </div>
                <!--개인정보 수집 이용에 관한 동의 요구-->
              <div class="join-page-agreememt-list-item">
                <input id="join-page-privacy-agreememt" type="checkbox">
                  <label class="login-page-agreement-label" for="join-page-agreement" >
                    <a class="login-page-agreement-sub-text-link" href="#">개인정보 수집 이용</a>
                    <span>에 동의합니다.</span></label>
                  <!-- : : before  -->
              </div>
            </div>
            <!--회원 가입 완료 버튼-->
            <!--이때, 가입 완료 버튼을 누르면 자동 로그인이 되는가?  -->
            <div class="join-btn">
              <input class="join-page-submit" type="submit" value="가입하기" divabled>
            </div>
          </form>
          <!--회원이 되어 있다면 로그인 할 수 있는 기능인가? -->
        </div>
          <div class="btn">
          <div class="login-btn">
              <input class="login-page-submit" type="submit" value="로그인" disabled> 
          </div>
          <!--페이스북으로 가입을 위한 링크 버튼  -->
          <div class="login-facebook-btn">
            <a class="login-facebook-link" href="">
              <span class="fa fa-facebook-official" aria-hidden="true"></span>
              <span class="facebook-login">페이스북으로 로그인</span>
            </a>
          </div>
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
  .join-page-wapper
    // background-color: powderblue
    // 컬럼 몇칸 쓸거야 
    +span(4)
    // 뒤에서 몇칸
    +span(last 8)
    // display: flex
    // flex-direction: column
    //위에서 부터 몇칸 쓸거야
    margin-top: leading(5)

  .join-page-center 
    width: 373px
    height: 504px
    box-shadow: 0 3px 59px 0 rgba(0, 0, 0, 0.5)
    background: url(s'../assets/images/b_g.png') no-repeat


  .logo
   height: leading(5)
  //  background-color: pink
  img
    // background: #000
    width: 175px
    height: 40px
    margin-top: leading(2)
    padding-left: span(3.5)
  
  .join-page-input-group
    // background: yellow
    height: leading(9)
    padding-left: span(1.5)

  .join-input
    margin-bottom: span(-0.5)
    line-height: 2.55

  .join-name-input
    width: 285px
    height: 36px
    font-family: NotoSansKR
    font-size: 16px
    margin-bottom: span(0.2)
    
  .join-email-input
    width: 285px
    height: 36px
    font-family: NotoSansKR
    font-size: 16px
    margin-top: leading(1)
    margin-bottom: span(0.2)
    // line-height: 2.55
    
  .join-pw-input
    width: 285px
    height: 36px
    font-family: NotoSansKR
    font-size: 16px
    margin-top: leading(1)
    // line-height: 2.55

    // 화워 그룹 동의 
  .join-page-agreememt-list
    // background: green
    padding-left: span(2.5)
    
  checkbox
    width: 14px
    height: 14px

  .login-page-agreement-label
    // background: yellow
    width: 193px
    height: 14px
    font-family: NotoSansKR
    font-size: 13px
    line-height: 1.65
    color: #ffffff
    padding-left: span(0.5)
    

  .login-page-agreement-sub-text-link
    color: #ffffff

  // 가입하기
  .join-page-submit
    width: 177px
    height: 42px
    background-color: #1e0b65
    text-align: center
    margin-top: leading(1)
    color: #ffffff
    font-family: NotoSansKR
    font-size: 16px
    // line-height: 1.65
  
  .join-btn
    // text-decoration: none 
    width: 50px
    height: 20px
    padding-left: span(3.37)

  // 로그인
  .btn
    background: yellow

  .login-input
   +span(12)
  //  background: gleen
  //  width: 42px
  //  height: 16px
  //  text-align: center
    // margin-top: leading(1)
    // margin-bottom: leading(-0.1)
    color: #ffffff
    font-family: NotoSansKR
    font-size: 16px
    padding-left: span(0.5)
    // display: inline-block
    
   
  .login-page-submit
   
    width: 177px
    height: 42px
    text-align: center
    background-color: #1e0b65
    margin-top: leading(3)
    // colsr: #ffffff
    // padding-left: span(5)
    // width: 373px
   

  // 페이스북으로 로그인 
  .login-facebook-link
    // background: pink
    width: 173px
    height: 42px
    display: inline-block
    text-align: center
    margin-top: leading(0.3)
    padding-left: span(3.5)


  .facebook-login
    // background: blue
    width: 112px
    height: 20px
    font-family: NotoSansKR
    font-size: 12px
    line-height: 3
    color: #ffffff
    padding-left: span(0.5)
    
 
   
</style>