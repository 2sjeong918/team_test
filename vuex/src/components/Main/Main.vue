<!--Category Ranking Recommand Search --> 
<template>
  <!-- <div>
    <h2>Main</h2>
      <ul>
        <router-link to="/home/detail"  class="user signin active" active-class="activated"  tag="li"> 
          <a href>전시정보(전시상세페이지로 이동)</a>
        </router-link>
      </ul>
  </div> -->
  <div class="main">
    <banner></banner>
    <ranking></ranking>
    <category></category>
    <recommand></recommand>
  </div>
</template>
<script>
import Banner from './Banner';
import Category from './Category';
import Ranking from './Ranking';
import Recommand from './Recommand';

export default {
  components: {
    Banner, Category, Ranking, Recommand
  },
  data() {
     return {


    }
  }
}
</script>
<style lang="sass" scoped>
  @import "~config"
</style>
