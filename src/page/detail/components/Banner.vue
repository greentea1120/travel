<template>
  <div>
    <div class="banner" @click="handleGallaryClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe63f;</span>{{this.bannerImgs.length}}</div>
      </div>
    </div>
    <FadeAnimation>
      <Gallary :imgs="bannerImgs" v-show="showGallary" @close="close"></Gallary>
    </FadeAnimation>
  </div>
</template>

<script type="text/ecmascript-6">
import Gallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    Gallary,
    FadeAnimation
  },
  methods: {
    handleGallaryClick() {
      this.showGallary = true
    },
    close() {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        flex 1
        padding 0 .2rem
        font-size .32rem
      .banner-number
        margin-top .14rem
        padding 0 .4rem
        line-height .32rem
        height .32rem
        font-size .24rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        .banner-icon
          font-size .24rem
</style>
