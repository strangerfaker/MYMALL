<template>
  <div class="recommed">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt=" ">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommed {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0px 20px;
    border-bottom: 8px solid #eeeeee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item.img{
    width: 70px;
    height: 70px;
    margin-top: 10px;
  }
</style>
