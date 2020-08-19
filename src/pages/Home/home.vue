<template>
  <div class="home">
    <header>
      <div class="left">网易严选</div>
      <div class="right" @click="$router.push('/user')">登录</div>
      <button @click="$router.push('/search')">
        <i class="iconfont icon-sousuo"></i>
        搜索商品，共35969款好物
      </button>
    </header>
    <div class="fixed" v-show="flag"></div>
    <div class="navScroll">
      <div class="all" v-show="flag">全部频道</div>
      <div :class="{changeNav:flag}" class="changes">
        <i class="iconfont icon-xia" @click="changeFlag"></i>
      </div>

      <div class="showNav" v-show="flag">
        <div
          :class="{choice2 : navId === item.id}"
          v-for="item in navBar"
          :key="item.id"
        >{{item.name}}</div>
      </div>
      <div class="wrapper" ref="homeSwiper" v-show="!flag">
        <ul class="content">
          <div
            :class="{choice : navId === item.id}"
            v-for="item in navBar"
            :key="item.id"
          >{{item.name}}</div>
        </ul>
      </div>
    </div>

    <div class="banner">
      <div class="swiper-container" ref="bannerScroll">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in homeInfo.focusList" :key="item.id">
            <img :src="item.picUrl" alt />
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="link">
        <div>
          <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
          网易自营品牌
        </div>
        <div>
          <i class="iconfont icon-dui"></i>
          30天无忧退货
        </div>
        <div>
          <i class="iconfont icon-money"></i>
          48小时快速退款
        </div>
      </div>
    </div>

    <TypeList v-if="homeInfo.kingKongModule" :typeList="homeInfo.kingKongModule.kingKongList" />

    <GuangGao v-if="homeInfo.indexActivityModule" :guanggaoList="homeInfo.indexActivityModule" />

    <ClassHot v-if="homeInfo.categoryHotSellModule" :classhot="homeInfo.categoryHotSellModule" />

    <ShopList v-if="homeInfo.flashSaleModule" :shopList="homeInfo.flashSaleModule.itemList" />

    <NewShop v-if="homeInfo.newItemList" :newShop="homeInfo.newItemList" />

    <YanXuan
      v-if="homeInfo.sceneLightShoppingGuideModule"
      :yanxuan="homeInfo.sceneLightShoppingGuideModule"
    />

    <footer>
      <div class="btn">
        <div>下载APP</div>
        <div>电脑版</div>
      </div>
      <div class="content">
        <p>网易公司版权所有 © 1997-</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>
    </footer>
  </div>
</template>



<script type="text/ecmascript-6">
import Swiper from "swiper";
import betterScroll from "better-scroll";
import { reqGetCategoryList, reqGetHomeInfo } from "../../api";
import TypeList from "./components/typeList/typeList";
import GuangGao from "./components/GuangGao/guanggao";
import ClassHot from "./components/ClassHot/classhot";
import ShopList from "./components/shopList/shopList";
import NewShop from "./components/NewShop/newShop";
import YanXuan from "./components/YanXuan/yanxuan";
export default {
  components: {
    TypeList,
    GuangGao,
    ClassHot,
    ShopList,
    NewShop,
    YanXuan,
  },
  data() {
    return {
      navBar: [],
      navId: 11,
      homeInfo: [],
      flag: false,
    };
  },
  watch: {
    navBar(newVal) {
      this.$nextTick(() => {
        this.showScroll();
        this.bannerScroll();
      });
    },
  },
  mounted() {
    this.getNavTitle();
  },
  methods: {
    async getNavTitle() {
      let result = await reqGetCategoryList();
      let homeInfo = await reqGetHomeInfo();

      this.homeInfo = homeInfo.data.data.data;
      console.log(homeInfo);
      this.navBar = result.data.data.categoryL1List;
    },
    bannerScroll() {
      new Swiper(this.$refs.bannerScroll, {
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
      });
    },
    showScroll() {
      new betterScroll(this.$refs.homeSwiper, {
        scrollX: true,
        scrollY: false,
        slide: {
          loop: true,
          threshold: 10,
        },
        momentum: false,
        bounce: false,
        stopPropagation: true,
      });
    },
    changeFlag() {
      this.flag = !this.flag;
    },
  },
};
</script>



<style lang="less">
.home {
  background-color: #eeeeee;
  padding-bottom: 98px;
  header {
    position: relative;
    z-index: 100;
    background-color: #fff;
    padding: 15.9998px 30px;
    line-height: 56px;
    .left {
      float: left;
      font-size: 38px;
      font-family: "楷体";
    }
    .right {
      float: right;
      width: 74px;
      height: 39.98px;
      line-height: 39.98px;
      color: #dd1a21;
      text-align: center;
      border: solid 1px #dd1a21;
      border-radius: 5px;
      box-sizing: border-box;
      margin-top: 7px;
    }
    button {
      display: block;
      width: 442.02px;
      height: 56px;
      margin: 0 auto;
      border: none;
      border-radius: 5px;
      color: #777;
      outline: none;
      i {
        font-size: 22px;
      }
    }
  }
  .fixed {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: #333;
    opacity: 0.5;
    width: 750px;
    z-index: 50;
  }
  .navScroll {
    position: relative;
    z-index: 100;
    background-color: #fff;
    padding: 0 30px;
    .all {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      background-color: #fff;
      width: 750px;
      padding: 0 15.9998px;
      font-size: 27.9998px;
      line-height: 60px;
      box-sizing: border-box;
    }
    .changes {
      float: right;
      line-height: 60px;
      transition: all 1s;
    }
    .changeNav {
      transform: rotate(180deg);
    }
    .showNav {
      position: absolute;
      width: 750px;
      left: 0;
      background-color: #fff;
      z-index: 100;
      top: 60px;
      padding: 24px 0 0;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      .choice2 {
        color: #dd1a21;
        border: 1px solid #dd1a21;
      }
      div {
        width: 150px;
        height: 56px;
        margin: 0 0 39.999px 30px;
        line-height: 56px;
        border: solid 1px #dddddd;
        box-sizing: border-box;
        text-align: center;
        border-radius: 4px;
      }
    }
    .wrapper {
      width: 560px;
      overflow: hidden;
      .content {
        white-space: nowrap;
        div {
          display: inline-block;
          padding: 0 15.9998px;
          font-size: 27.9998px;
          line-height: 60px;
          box-sizing: border-box;
        }
      }
    }
  }
  .choice {
    color: #dd1a21;
    border-bottom: 1px solid #dd1a21;
  }

  .banner {
    position: relative;
    z-index: 0;
    top: -35px;
    .swiper-slide {
      background-color: orange;
      img {
        width: 100%;
      }
    }
    .swiper-pagination-bullet {
      width: 39.98px;
      height: 3.98px;
      transform: translateY(-40px);
    }
    .link {
      position: relative;
      z-index: 3;
      background-color: #fff;
      margin-top: -40px;
      i {
        color: #dd1a21;
        vertical-align: middle;
      }
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 72px;
      color: #333;
    }
  }

  footer {
    padding: 54px 20.0002px 27.9998px;
    background-color: #414141;
    .btn {
      height: 62px;
      margin-bottom: 36px;
      display: flex;
      justify-content: space-evenly;
      div {
        width: 171.98px;
        line-height: 62px;
        color: #fff;
        height: 62px;
        border-radius: 2px;
        border: 1px solid #7b7b7b;
        box-sizing: border-box;
        text-align: center;
      }
    }
    .content {
      text-align: center;
      color: #999;
      font-size: 24px;
      line-height: 120%;
    }
  }
}
</style>