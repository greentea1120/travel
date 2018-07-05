<template>
  <div class="city">
    <Header></Header>
    <Search></Search>
    <List :cities="cities" :hot="hotCities"></List>
    <Alphabet :cities="cities"></Alphabet>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
        .then(res => {
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.cities = data.cities
            this.hotCities = data.hotCities
          }
        })
    }
  },
  mounted() {
    this.getCityInfo()
  },
  components: {
    Header,
    Search,
    List,
    Alphabet
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
