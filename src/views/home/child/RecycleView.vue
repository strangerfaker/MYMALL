<template>

    <div class="block">
      <span class="demonstration"></span>
      <el-carousel :height="bannerHeight + 'px'" :interval="5000" type="card">
        <el-carousel-item v-for="(item,index) in img_list" :key="index">
          <img :src="item.url" >
        </el-carousel-item>
        <!--          <el-carousel-item v-for="item in img_list" :key="item">-->
        <!--            <img :src="item.url" >-->
        <!--          </el-carousel-item>-->
      </el-carousel>
    </div>

</template>

<script>
export default {
  name: "RecycleView",


  data() {
    return {
      // 图片父容器高度
      bannerHeight :500,
      // 浏览器宽度
      screenWidth :0,

      // result:null,
      banners: [],
      recommends:[],

      img_list:[
        {url:require("../../../assets/img/fire.jpg")},
        {url:require("../../../assets/img/girl.jpg")},
        {url:require("../../../assets/img/like.jpg")},
        {url:require("../../../assets/img/will.gif")},
      ]
    }
  },
  methods:{
    setSize:function () {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = 500 / 1920 * this.screenWidth;
    },
  },
  mounted() {
    // 首次加载时,需要调用一次
    this.screenWidth =  window.innerWidth;
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () =>{
      this.screenWidth =  window.innerWidth;
      this.setSize();
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;

  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    /*设置图片宽度和浏览器宽度一致*/
    width: 100%;
    height: inherit;
  }
</style>
