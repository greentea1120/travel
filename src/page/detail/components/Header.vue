<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont icon-fanhui"></span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont icon-fanhui"></div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  components: {

  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 20) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle.opacity = opacity
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      // console.log(document.documentElement.scrollTop)
    }
  },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll)
  //   console.log('执行一次Mounted')
  // },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~style/varibles.styl'
  .header
    .header-abs
      position absolute
      left .2rem
      top .2rem
      width .8rem
      height .8rem
      border-radius .4rem
      background rgba(0,0,0,.8)
      text-align center
      line-height .8rem
      .icon-fanhui
        color #fff
        font-size .4rem
  .header-fixed
    z-index 99
    position fixed
    top 0
    left 0
    right 0
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
