<template>
  <div class="page">
    <HomeHeader :city="city"></HomeHeader>
    <Swiper :list="swiperList"></Swiper>
    <Icons :list="iconList"></Icons>
    <Recommend :list="recommendList"></Recommend>
    <Weekend :list="weekendList"></Weekend>
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
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
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
          res = res.data
          if (res.ret && res.data) {
            this.city = res.data.city
            this.swiperList = res.data.swiperList
            this.iconList = res.data.iconList
            this.recommendList = res.data.recommendList
            this.weekendList = res.data.weekendList
          }
        })
    }
  }
}
</script>

<style scoped rel="stylesheet/stylus">

</style>
