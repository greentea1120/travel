<template>
  <div class="alphabet">
    <ul class="list">
      <li class="item" v-for="(item, key) of cities" :key="key" @click="handLetterClick">{{key}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    cities: Object
  },
  data () {
    return {

    }
  },
  methods: {
    handLetterClick(e) {
      console.log(e.target.innerText)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~style/varibles.styl'
  .alphabet
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bg-color
</style>
