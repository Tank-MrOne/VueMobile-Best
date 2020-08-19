<template>
  <div class="category">
    <header>
      <button @click="$router.push('/search')" class="iconfont icon-sousuo">搜索商品，共35813款好物</button>
    </header>
    <main>
      <div class="left">
        <span
          :class="{choice:titleNum === item.id || item.id === ''} "
          v-for="item in category.categoryL1List"
          :key="item.id"
          @click="getCategoryList(item.id)"
        >{{item.name}}</span>
      </div>
      <div class="right">
        <img v-if="bannerUrl" :src="bannerUrl" class="titleImg" />
        <div  v-else  class="scroll">
            <MySwiper :list="category.currentCategory && category.currentCategory.bannerList" />
        </div>
        <div class="categoryList" v-if="category.categoryL2List">
          <div class="items" v-for="item in category.categoryL2List" :key="item.id">
            <img :src="item.wapBannerUrl" alt v-if="item.wapBannerUrl" />
            {{item.name}}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>



<script type="text/ecmascript-6">
import MySwiper from "../../components/SwiperCom/swiperCom";
import { reqGetCategoryList } from "../../api";
export default {
  components: {
    MySwiper,
  },
  data() {
    return {
      category: [],
      titleNum: 11,
    };
  },
  computed: {
    bannerUrl() {
      if (this.category.length > 0) {
        let obj = this.category.categoryL1List.find(
          (item) => item.id === this.titleNum
        );
        if (obj) {
          return obj.bannerUrl;
        }
      }
    },
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    async getCategoryList(id) {
      this.titleNum = id;
      let result = await reqGetCategoryList(this.titleNum);
      if (result.data.data.categoryL2List.length % 3 !== 0) {
        let num = result.data.data.categoryL2List.length % 3;
        for (let i = 0; i < 3 - num; i++) {
          let obj = {};
          result.data.data.categoryL2List.push(obj);
        }
      }
      this.category = result.data.data;
    },
  },
};
</script>



<style lang="less" scoped>
.category {
  height: 100%;
  header {
    display: flex;
    width: 750px;
    height: 87.98px;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px #f7f7f7;
    button {
      border: none;
      background-color: #ededed;
      width: 690px;
      height: 56px;
      margin: 0 auto;
      border-radius: 10px;
      color: #666;
      font-size: 27.9998px;
    }
  }
  main {
    height: 100%;
    .left {
      float: left;
      width: 162px;
      height: 859.829px;
      font-size: 27.9998px;
      display: flex;
      flex-direction: column;
      padding: 40px 0;
      text-align: center;
      span {
        position: relative;
        flex: 1;
        line-height: 50px;
        &.choice {
          color: #ab2b2b;
        }
        &.choice::before {
          content: "";
          position: absolute;
          width: 2px;
          height: 50px;
          background-color: #ab2b2b;
          left: 0;
          top: 0;
        }
      }
    }
    .right {
      margin-left: 161px;
      padding: 30px;
      border-left: solid 1px #f7f7f7;
      height: 100%;
      .scroll{
          width: 528px;
          height: 192px;
          overflow: hidden;
      }
      .titleImg {
        width: 528px;
        height: 192px;
      }
      .categoryList {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .items {
          width: 144px;
          height: 216px;
          text-align: center;
          color: #333;
          img {
            width: 144px;
            height: 144px;
          }
        }
      }
    }
  }
}
</style>