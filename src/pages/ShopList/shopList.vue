<template>
  <div class="shopList">
    <div class="fixed">
      <Header :title="'网易严选'" />
      <div v-if="shopList.categoryItems" class="swiper-container" ref="navSwiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            @click="toShopList(item.superCategoryId,item.id)"
            v-for="(item,index) in shopList.categoryL2List"
            :key="item.id"
          >
            <span class="border" :class="{choice:initNum === index}">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
    <div style="height:0px;">wy</div>
    <div class="centerBox"></div>

    <div class="list" v-if="shopList.categoryItems">
      <div 
        class="items" 
        v-for="item in shopList.categoryItems.itemList" 
        :key="item.id"
        @click="$router.push('/detail/'+item.id)"
      >
        <img v-lazy="item.listPicUrl" alt />
        <p>{{item.simpleDesc}}</p>
        <div class="title">{{item.name}}</div>
        <div class="money">￥{{item.retailPrice}}</div>
        <span v-for="(tag,index) in item.itemTagList" :key="index">{{tag.name}}</span>
      </div>
    </div>

    <p class="footer">
        更多内容，敬请期待
    </p>
  </div>
</template>



<script type="text/ecmascript-6">
import Header from "../../components/Header/Header";
import { mapState } from "vuex";
import Swiper from "swiper";
export default {
  data() {
    return {
      initNum: 0,
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapState({
      shopList: (state) => state.shopList.shoplist,
    }),
  },
  watch: {
    shopList() {
      this.initNum = this.shopList.categoryL2List.findIndex(
        (item) => item.id === this.shopList.categoryItems.category.id
      );
      this.showSwiper();
    },
  },
  methods: {
    showSwiper() {
      if(this.mySwipers){
        //   this.mySwipers.update()
          this.mySwipers.slideTo(this.initNum, 1000, false)
          return
      }
      this.$nextTick(() => {
        this.mySwipers = new Swiper(this.$refs.navSwiper, {
          direction: "horizontal", // 垂直切换选项
          initialSlide: this.initNum,
          slidesPerView: 4,
          loop: false, // 循环模式选项
        });
      });
    },
    toShopList(categoryId, subCategoryId) {
      this.$store.dispatch("getShopList", { categoryId, subCategoryId });
      this.$router.push("/shoplist");
    },
  },
};
</script>



<style lang="less" scoped>
.shopList {
  height: 100%;
  background: #ccc;
  .fixed {
    position: fixed;
    background-color: #fff;
    top: 0;
    .swiper-container {
      height: 60px;
      .swiper-slide {
        font-size: 27.9998px;
        line-height: 60px;
        text-align: center;
        span {
          padding: 0 15.9998px;
          box-sizing: border-box;
          &.choice {
            color: #dd1a21;
            border-bottom: solid 1px;
          }
        }
      }
    }
  }
  .centerBox {
    width: 750px;
    height: 110px;
    margin-top: 168px;
    background-color: #fff;
    border: none;
  }
  .list {
    background-color: #fff;
    border: none;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .items {
      width: 345px;
      height: 568.81px;
      background-color: #fff;
      margin-bottom: 33px;
      img {
        width: 345px;
        height: 345px;
      }
      p {
        font-size: 24px;
        padding: 6px 9.99975px;
        color: #9f8a60;
      }
      .title {
        color: #333;
        font-size: 27.9998px;
        margin-top: 15.9998px;
      }
      .money {
        color: #dd1a21;
        font-size: 32.0003px;
        line-height: 48px;
        margin-bottom: 4px;
      }
      span {
        color: #dd1a21;
        padding: 0 8.00025px;
        border-radius: 15px;
        font-size: 18px;
        margin: 0 0 6.99975px;
        border: solid 1px;
        box-sizing: border-box;
      }
    }
  }
  .footer{
      padding-top: 30px;
      text-align: center;
      height: 96px;
      background-color: #eee;
      color: #999;
      font-size: 24px;
      box-sizing: border-box;
  }
}
</style>