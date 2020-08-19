<template>
  <div class="yanxuan">
    <div v-for="(item,index) in yanxuan" :key="index">
      <div class="title">{{item.styleItem.title}}</div>
      <div class="desc">{{item.styleItem.desc}}</div>
      <div class="img">
        <img v-for="(url,index) in item.styleItem.picUrlList" :key="index" :src="url" />
      </div>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props: ["yanxuan"],
};
</script>



<style lang="less" scoped>
.yanxuan {
  margin: 20px 0;
  padding: 9.99975px 30px 30px 30px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  div {
    background-color: #f5f5f5;
    padding: 20px 0 0 20px;
    .title {
      font-size: 32.0003px;
      color: #333;
      padding: 0;
    }
    .desc {
      font-size: 24px;
      color: #7f7f7f;
      padding:15px 0;
      box-sizing: border-box;
    }
    .img {
      display: flex;
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>