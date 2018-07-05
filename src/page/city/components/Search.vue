<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" v-model="keyword" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="(item, index) in list" :key="index">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search)
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  components: {

  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const key in this.cities) {
          this.cities[key].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 ||
            value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~style/varibles.styl'
  .search
    height .72rem
    padding .1rem
    background $bg-color
    .search-input
      width 100%
      height .62rem
      line-height .62rem
      text-align center
  .search-content
    overflow hidden
    position absolute
    top 1.78rem
    left 0
    right 0
    bottom 0
    z-index 1
    background #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666
      background #fff
</style>
