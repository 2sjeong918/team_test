<template>
  <div>
    <div class="outer">
      <div class="inner">
        test
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="sass">
  @import "~config"

  .outer
    +container()
  .inner
    +span(3)
    background: red
  
  
</style>
