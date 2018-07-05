<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
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
  .search
    height .72rem
    padding .1rem
    background $bg-color
    .search-input
      width 100%
      height .62rem
      line-height .62rem
      text-align center
</style>
