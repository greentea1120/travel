<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont icon-fanhui"></div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~style/varibles.styl'
  .header
    position relative
    overflow hidden
    height $header-height
    line-height $header-height
    text-align center
    color #fff
    background $bg-color
    font-size .32rem
    .icon-fanhui
      position absolute
      top 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
