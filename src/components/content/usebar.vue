<template>
  <tarbar>
    <tarbaritem path="/home">
      <img slot="item-icon" src="../../assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tarbaritem>
    <tarbaritem path="/category">
      <img slot="item-icon" src="../../assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tarbaritem>
    <tarbaritem path="/cart">
      <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tarbaritem>
    <tarbaritem path="/profile">
      <img slot="item-icon" src="../../assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tarbaritem>
  </tarbar>
</template>

<script>

import tarbar from "../common/tarbar/tarbar";
import tarbaritem from "../common/tarbar/tarbaritem";

export default {
  name: "usebar",
  components:{
    tarbar,
    tarbaritem
  }
}
</script>

<style scoped>

</style>
