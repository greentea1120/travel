<template>
  <div class="weekend">
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.img" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      weekendList: [{
        id: '0001',
        img: 'http://img1.qunarzz.com/sight/source/1507/42/c37e1566b933d1.jpg_r_640x214_6a0b0c3f.jpg',
        title: '天津海昌极地海洋公园',
        desc: '天津海昌极地海洋公园(AAAA景区)'
      },
      {
        id: '0002',
        img: 'http://img1.qunarzz.com/sight/source/1507/42/c37e1566b933d1.jpg_r_640x214_6a0b0c3f.jpg',
        title: '天津海昌极地海洋公园',
        desc: '天津海昌极地海洋公园(AAAA景区)'
      },
      {
        id: '0003',
        img: 'http://img1.qunarzz.com/sight/source/1507/42/c37e1566b933d1.jpg_r_640x214_6a0b0c3f.jpg',
        title: '天津海昌极地海洋公园',
        desc: '天津海昌极地海洋公园(AAAA景区)'
      }]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~style/mixins.styl'
  .title
    line-height .8rem
    background #eee
    text-indent .2rem
  .img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>
