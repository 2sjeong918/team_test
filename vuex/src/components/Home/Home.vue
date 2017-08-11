<template>
  <div>
    <navigation class="navigation"></navigation>
    <router-view></router-view>
  </div>
</template>
<script>
import Navigation from './Navigation'
export default {
  data() {
     return {

    }
  },
  components: {
    Navigation
  }
}
</script>
<style lang="sass">

  .navigation
    position: sticky
    top: 0
    // background: #fff
    z-index: 2000
</style>