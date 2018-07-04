<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-jiantou"></span>
    </div>
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
  @import '~style/varibles'
  .header
    line-height .86rem
    display flex
    background $bg-color
    color #fff
    .header-left
      width .64rem
      float left
      .icon-fanhui
        text-align center
        font-size .4rem
    .header-input
      flex 1
      margin-top .12rem
      height .64rem
      margin-left .2rem
      border-radius .1rem
      background #fff
      color #ccc
      line-height .64rem
      padding-left .2rem
    .header-right
      width 1.24rem
      float right
      text-align center
      .icon-jiantou
        margin-left -.04rem
        font-size .24rem
</style>
