<template>
  <div>
    <div class="header">
      <!-- <div class="back iconfont">&#xe6e9;</div> -->
      <div class="logo">EbooKing</div>
      <div class="show">
        <div class="toggle"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style lang="stylus" scoped>
  .header
    width: 100%
    height: 0.7rem
    .logo
      line-height: 0.7rem
      text-align: center
      float: left
      width: 16%
      height: 100%
      background: #2380c7
      font-size: 0.18rem
    .show
      float: left
      width: 84%
      height: 100%
      background: #2688d3
      .toggle
        width: 5%
        height: 100%
        border-right: 1px solid #2480c6
      
</style>