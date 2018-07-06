<template>
  <div class="list">
    <div class="item border-bottom" v-for="(item, index) in list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <List :list="item.children"></List>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'List',
  props: {
    list: Array
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item-title-icon
    display inline-block
    position relative
    left .06rem
    top .06rem
    width .36rem
    height .36rem
    margin-right .1rem
    background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
    background-size .4rem 3rem
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
  .item-children
    padding 0 .2rem

</style>
