<template>
  <ul>
    <router-link to="/wishlist" class="user signup active" active-class="activated" tag="li">
      <a href>보고싶어요</a>
    </router-link>
    <router-link to="/display"  class="user signin active" active-class="activated"  tag="li"> 
      <a href>봤어요</a>
    </router-link>
    <router-link to="/comments"  class="user signin active" active-class="activated"  tag="li"> 
      <a href>코멘트</a>
    </router-link>
  </ul>
</template>

<script>
import Wishlist from './Wishlist'
import Display  from './Display'
import Comments from './Comments'
export default {
  data() {
     return {


    }
  },
  components: {
    Wishlist,
    Display,
    Comments
  }
}
</script>
<style>


</style>