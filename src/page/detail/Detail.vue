<template>
  <div class="detail">
    <Banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></Banner>
    <Header></Header>
    <div class="content">
      <List :list="list"></List>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo() {
      axios.get(`api/detail.json?id=${this.$route.params.id}`)
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            console.log(data)
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.list = data.categoryList
          }
        })
    }
  },
  mounted() {
    this.getDetailInfo()
  },
  components: {
    Banner,
    Header,
    List
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .detail
    .content
      height 50rem
</style>
