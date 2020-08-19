<template>
  <div class="shouldBuy">
    <header>
      <router-link to="/" class="iconfont icon-shouye home" style="padding:0;background:#fff"></router-link>
      <router-link to="/cart" class="iconfont icon-gouwuche right"></router-link>
      <router-link to="/search" class="iconfont icon-sousuo right"></router-link>
      <div>值得买</div>
    </header>
    <main>
      <img class="titleImg" src="./image/shouldBuy.png" alt />
      <div class="titleText">
        <img src="./image/zhidemai.png" alt />
        <span>严选好物 用心生活</span>
      </div>
      <div class="content">

        <div class="wrapper" ref="mySwiper2">
          <div class="content">
            <div class="swiper-slide" v-for="item in message.navList" :key="item.id">
              <div class="box">
                <img :src="item.picUrl" alt="" class="navImage">
                <b>{{item.mainTitle}}</b>
                <div>{{item.viceTitle}}</div>
              </div>
            </div>
          </div>
        </div>

        
        <WaterFall/>
      </div>
      
    </main>
     
  </div>
</template>



<script type="text/ecmascript-6">
import betterScroll from "better-scroll";
import {reqGetShouldBuyMessage} from '../../api'
import WaterFall from './waterFall/waterFall.vue'
import axios from 'axios'
export default {
  components:{
    WaterFall
  },
  data(){
    return{
      message:[]
    }
  },
  watch: {
    message(newVal) {
        this.$nextTick(() => {
            this.showScroll();
        })
    },
  },
  async mounted() {
    let result = await reqGetShouldBuyMessage()
    this.message = result.data.data
  },
  methods: {
    showScroll() {
      new betterScroll(this.$refs.mySwiper2, {
        scrollX: true,
        scrollY: false,
        slide: {
          loop: true,
          threshold: 100,
        },
        momentum: false,
        bounce: false,
        stopPropagation: true,
        // aotoplay:true
      });
    },
  },
};
</script>



<style lang="less" scoped>
.shouldBuy {
  background-color: #f2f5f4;
  // height: 100%;
  header {
    position: relative;
    height: 87.96px;
    padding: 0 16px 0 24px;
    color: #5b5d51;
    background-color: #fafafa;
    border-bottom: solid 1px #e5e5e5;
    div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 172px;
      height: 54px;
      line-height: 54px;
      font-size: 30px;
      text-align: center;
      color: #000;
    }
    .iconfont {
      font-size: 38px;
      margin-top: 20px;
    }
    .home {
      float: left;
    }
    .right {
      float: right;
      margin-left: 30px;
    }
  }

  main {
    position: relative;
    padding-top: 126.875px;

    .titleImg {
      position: absolute;
      top: 0;
      left: 0;
      width: 656.26px;
      height: 453.26px;
    }
    .titleText {
      position: absolute;
      left: 10px;
      top: 60px;
      color: #fff;
      span {
        position: absolute;
        width: 217.68px;
        bottom: 15px;
        font-size: 26.25px;
        margin-left: 10px;
      }
      img {
        height: 60.06px;
        width: 113.76px;
      }
    }
    .content {
      position: relative;
      margin: 0 auto;
      border-radius: 10px;
      width: 603.26px;
      // height: 500px;
      padding-top: 20px ;padding-bottom: 107.4px;
      padding-left: 5px;
      box-sizing: border-box;
      .wrapper {
        // width: 603.26px;
        height: 462.5px;
        border-radius: 15px;
        overflow: hidden;
        background-color: #fff;
        .content{
          // width: 603.26px;
          .swiper-slide {
            box-sizing: border-box;
            float: left;
            width: 150px;
            height: 220.5px;
            text-align: center;
            color: #999;
            .navImage{
              display: block;
              margin: 0 auto;
              width: 105px;
              height: 105px;
              border-radius:50% ;
              margin-bottom: 20px;
            }
            b{
              font-size: 20px;
              font-weight: bold;
              color: black;
            }
            div{
              margin-top: 10px;
              overflow: hidden;
              white-space: nowrap;
            }
          }
        }
        
      }
    }
  }
}
</style>