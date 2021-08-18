<template>
  <div class="home">
    <RecycleView/>
    <HomeRecommend :recommends="recommends"/>
    <FeatureView/>
    <TabControl class="tab-control" :titles = "['爆款','特惠','精选']"/>

    <TabView/>

    <ul>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
      <li>ni</li>
    </ul>
  </div>
</template>

<script>

import {getHomeMultidata} from "../../network/home";

import HomeRecommend from "./child/HomeRecommend";
import RecycleView from "./child/RecycleView";
import FeatureView from "./child/FeatureView";

import TabControl from "../../components/content/TabControl";
import TabView from "../../components/content/TabView";


export default {
  name: "home",
  components: {
    HomeRecommend,
    RecycleView,
    FeatureView,
    TabControl,
    TabView,
  },

  data( ) {
    return{
      banners: [],
      recommends: [],
    }
  },


  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      // this.result = res;

      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })

  },

}
</script>

<style scoped>
  .home{
    background-color: #eeeeee;
  }
  .tab-control {
    position: sticky;
    top: 0.5px;
  }
</style>
