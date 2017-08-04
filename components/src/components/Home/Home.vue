<template>
  <div>
    <navigation></navigation>
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
<style>


</style>