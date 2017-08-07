<template>
  <div class="container">
    <form class="form">
      <label for="search">
        <input 
        id="search"
        type="text"
        placeholder="검색어를 입력해주세요">
      </label>
       <button class="search__btn" type="button">Search</button>
     </form>
  </div>
</template>
<script>

export default {
  
  data() {
     return {
      

    }
  }
}
</script>
<style lang="sass">
  @import "~config"
  .container
    +container(1190px 12)
    height: 100vh

</style>