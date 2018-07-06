<template>
  <div>
    <div class="banner" @click="handleGallaryClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1408/19/82b3feefa6fe43ab350be26208e73e91.jpg_600x330_70dca50f.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">天塔湖(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe63f;</span>30</div>
      </div>
    </div>
    <Gallary :imgs="imgs" v-show="showGallary" @close="close"></Gallary>
  </div>
</template>

<script type="text/ecmascript-6">
import Gallary from 'common/gallary/Gallary'
export default {
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1408/19/2a828d8ab49cc7c51688859a4b609ea1.jpg_r_800x800_6bc8dc9a.jpg'],
      showGallary: false
    }
  },
  components: {
    Gallary
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
