<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont icon-jiantou"></span>
      </div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~style/varibles'
  .header
    line-height $header-height
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
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #fff
      .icon-jiantou
        margin-left -.04rem
        font-size .24rem
</style>
