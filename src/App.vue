<template>
  <div id="app">
    <NavBar/>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <usebar/>
  </div>
</template>

<script>

import NavBar from "./components/common/navbar/NavBar";
import bigmain from "./components/common/bigmain";
import usebar from "./components/content/usebar";


export default {
  name: 'App',
  components: {
    NavBar,
    bigmain,
    usebar


  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
