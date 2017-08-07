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
                <label class="join-input">
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
              </div>
                <!--개인정보 수집 이용에 관한 동의 요구-->
              <div class="join-page-agreememt-list-item">
                <input id="join-page-privacy-agreememt" type="checkbox">
                  <label class="login-page-agreement-label" for="join-page-agreement" >
                    <a class="login-page-agreement-sub-text-link" href="#">개인정보 수집 이용</a>
                    <span>에 동의합니다.</span></label>
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
              <a class="login-page-link" href="/login"><span class="login">로그인</span></a> 
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
  
  //그리드 시스템 
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
    //------------------------
  .join-page-wapper
    // background-color: powderblue
    +span(4)
    +span(last 8)
    // display: flex
    // flex-direction: column
    margin-top: leading(5)

  // 메인 
  .join-page-center 
    width: 373px
    height: 504px
    box-shadow: 0 3px 59px 0 rgba(0, 0, 0, 0.5)
    background: url('../assets/images/b_g.png') no-repeat

  // plot 로고 
  .logo
   height: leading(5)
  //  background-color: pink
  img
    // background: #000
    width: 175px
    height: 40px
    margin-top: leading(2)
    padding-left: span(3.4)
  
  //회원가입 입력 관리
  .join-page-input-group
    // background: yellow
    height: leading(8)
    padding-left: span(1.5)
    line-height: 2.55

  // 회원가입 정보 입력 
  .join-input
    margin-bottom: span(-0.5)
    line-height: 2.55
    width: 285px
    height: 36px
    font-family: NotoSansKR
    font-size: 16px

  // 사용자 이름 입력
  .join-name-input
    width: 285px
    height: 36px
    font-family: NotoSansKR
    font-size: 16px
    margin-bottom: span(0.2)
    line-height: 2.55

  // 사용자 이메일 입력  
  .join-email-input
    width: 285px
    height: 36px
    font-family: NotoSansKR
    font-size: 16px
    margin-top: leading(1)
    margin-bottom: span(0.2)
    line-height: 2.55
  
  // 사용자 비밀번호 입력 
  .join-pw-input
    width: 285px
    height: 36px
    font-family: NotoSansKR
    font-size: 16px
    margin-top: leading(1)
    line-height: 2.55

  //  서비스 이용에 관한 동의 
  .join-page-agreememt-list
    // background: green
    padding-left: span(2.7)
    margin-top: leading(1)
  
  // checkbox
    width: 14px
    height: 14px

  // 플롯 사이트 서비스에 관한 체크 
  .login-page-agreement-label
    // background: yellow
    width: 193px
    height: 14px
    font-family: NotoSansKR
    font-size: 13px
    line-height: 1.65
    color: #ffffff
    padding-left: span(0.5)
    
  // a링크 
  .login-page-agreement-sub-text-link
    color: #ffffff
    text-decoration: none 

  // 가입하기 버튼
  .join-btn
    width: 50px
    height: 20px
    padding-left: span(3.37)

  .join-page-submit
    width: 175px
    height: 42px
    background-color: #1e0b65
    text-align: center
    margin-top: leading(1)
    color: #ffffff
    font-family: NotoSansKR
    font-size: 16px
    line-height: 2.4
    border: solid 2px #ffffff
  
  // 로그인 / 페이스북 버튼
  .btn
    // background: yellow
    height: leading(7)

  // 로그인 버튼
  .login-btn
    padding-left: span(3.37)
  
  .login-page-link
    width: 172px
    height: 41px
    background-color: #1e0b65
    border: solid 2px #ffffff
    display: inline-block
    text-align: center
    margin-top: leading(3)
    color: #ffffff
    font-family: NotoSansKR
    font-size: 16px
    line-height: 2.85
    text-decoration: none 

  // 페이스북 버튼  
  .login-facebook-btn
    background: gleen
    height: 41px
 
  .login-facebook-link
    // background: pink   
    font-family: NotoSansKR
    font-size: 13px
    line-height: 2.77
    color: #ffffff
    text-decoration: none 
    padding-left: span(4.3)



</style>
