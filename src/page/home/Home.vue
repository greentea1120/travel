<template>
  <div class="page">
    <HomeHeader></HomeHeader>
    <Swiper></Swiper>
    <Icons></Icons>
    <Recommend></Recommend>
    <Weekend></Weekend>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from './components/Header'
import Swiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
export default {
  data () {
    return {

    }
  },
  mounted() {
    this.getHomeInfo()
  },
  components: {
    HomeHeader,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json')
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped rel="stylesheet/stylus">

</style>
