<template>
  <div class="shopList">
    <div class="title">
      新品首发
      <div>更多 ></div>
    </div>
    <div class="content">
      <div class="list" v-for="item in newShopList" :key="item.id">
        <img :src="item.listPicUrl" v-if="item.listPicUrl" />
        <span v-if="item.name" class="money">{{item.name}}</span>
        <span v-if="item.counterPrice" class="oldmoney">￥{{item.counterPrice}}</span>
        <div class="tag" v-if="item.itemTagList">
          <span v-for="(tag , index) in item.itemTagList" :key="index">{{tag.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props: ["newShop"],
  computed: {
    newShopList() {
      if (this.newShop.length % 3 !== 0) {
        let num = this.newShop.length % 3;
        for (let i = 0; i < 3 - num; i++) {
          let obj = {};
          this.newShop.push(obj);
        }
        return this.newShop;
      }
    },
  },
};
</script>



<style lang="less" scoped>
.shopList {
  margin: 20px 0;
  background-color: #fff;
  padding: 0 30px;
  .title {
    height: 99.98px;
    line-height: 99.98px;
    font-size: 32px;
    color: #333;
    position: relative;
    div {
      position: absolute;
      line-height: 99.98px;
      top: 0;
      right: 0;
      font-size: 27.9998px;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list {
      width: 216px;
      padding-bottom: 20px;
      img {
        width: 216px;
        height: 216px;
      }

      .money {
        line-height: 150%;
        display: block;
        color: #333;
        font-size: 24px;
        padding-right: 10px;
      }
      .oldmoney {
        color: #dd1a21;
        font-size: 32.003px;
        line-height: 150%;
      }
      .tag{
          width: 216px;
          span{
              display: inline-block;
              border: solid 1px;
              color: #dd1a21;
              padding: 0 8.00025px;
              margin: 0 5px 6.99975px 0;
              border-radius: 20px;
              font-size: 12px !important;
          }
      }
    }
  }
}
</style>