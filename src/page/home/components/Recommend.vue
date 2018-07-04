<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.img" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      recommendList: [{
        id: '0001',
        img: 'http://img1.qunarzz.com/sight/p0/1806/97/97f0cf5b6a44557ca3.water.jpg_200x200_003494e1.jpg',
        title: '天津海昌极地海洋公园',
        desc: '天津海昌极地海洋公园(AAAA景区)'
      },
      {
        id: '0002',
        img: 'http://img1.qunarzz.com/sight/p0/1806/97/97f0cf5b6a44557ca3.water.jpg_200x200_003494e1.jpg',
        title: '天津海昌极地海洋公园',
        desc: '天津海昌极地海洋公园(AAAA景区)'
      },
      {
        id: '0003',
        img: 'http://img1.qunarzz.com/sight/p0/1806/97/97f0cf5b6a44557ca3.water.jpg_200x200_003494e1.jpg',
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
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .2rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
