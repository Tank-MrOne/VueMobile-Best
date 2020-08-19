<template>
  <div class="GG">
    <img
      class="guanggao"
      src="https://yanxuan.nosdn.127.net/201a7390deaae6cc5a3f45c954d82232.gif?imageView&quality=75&type=jpg"
      alt
    />
    <div class="gg">
      <img
        src="https://yanxuan.nosdn.127.net/b370a48613eedfc3031fe764982a77f5.png?quality=75&type=webp&imageView&thumbnail=375x0"
        alt
      />
      <img
        src="https://yanxuan.nosdn.127.net/0c93d95fdf1820375b737932ef4aaa5e.png?quality=75&type=webp&imageView&thumbnail=375x0"
        alt
      />
    </div>
    <div class="gg2">
      <div class="title">- 新人专享礼包 -</div>
      <div class="box box1">
          <div>新人专享礼包</div>
          <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
      </div>
      <div class="box" v-for="(item,index) in guanggaoList" :key="index">
          <div>{{item.title}}</div>
          <span>{{item.subTitle}}</span>
          <img :src="item.picUrl" alt="">
      </div>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props:['guanggaoList']
};
</script>



<style lang="less" scoped>
.GG {
  background-color: #eeeeee;
  padding-bottom: 20px;
  .guanggao {
    width: 100%;
  }
  .gg {
    display: flex;

    justify-content: space-around;
    margin: 20px;
    img {
      width: 351px;
      height: 230px;
    }
  }
  .gg2{
      background-color: #fff;
      padding: 0 30px 30px;
      &::after{
          content: "";
          display: block;
          clear: both;
      }
      .title{
          height: 90px;
          line-height: 90px;
          text-align: center;
          font-size: 32px;
          color: #333;
          letter-spacing: 2px;
      }
      .box{
          position: relative;
          float: left;
          width: 342.98px;
          height: 215px;
          box-sizing: border-box;
          padding: 20.0002px 0 0 30px;
          background-color: #FBE2D3;
          font-size: 32.0003px;
          color: #333;
          z-index: 2;
          span{
              font-size: 24px;
              color: #7f7f7f;
          }
          img{
              position: absolute;
              width: 200px;
              height: 200px;
              right: 0;
              bottom: 0;
              z-index: -1;
          }
          &:last-child{
              background-color: #FFECC2;
              margin-top: 3.99975px;
          }
      }
      .box1{
          position: relative;
          width: 342.98px;
          height: 434px;
          margin-right: 3.99975px;
          background-color: #f9e9cf;
          div{
              padding: 30px 0 0 30px;
              font-size: 32.0003px;
              color: #333;
          }
          img{
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translateX(-50%) translateY(-40%);
            width: 258px;
            height: 257px;
          }
      }
  }
}
</style>