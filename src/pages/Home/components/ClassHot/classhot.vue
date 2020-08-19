<template>
  <div class="classhot">
      <div v-for="(item ,index) in classhot.categoryList" :key="index">
          
          
          <span>{{item.categoryName}}</span>
          <img :src="item.picUrl" alt="">
      </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
    props:['classhot']
};
</script>



<style lang="less" scoped>
.classhot {
    background-color: #fff;
    &::after{
        content: "";
        display: block;
        clear: both;
    }
  padding: 30px;
  div{
      float: left;
      color: #333;
      margin: 0 5px 5px 0;
      width: 165px;
      height: 180px;
      background-color: #F5F5F5;
      text-align: center;
      img{
          display: block;
          margin: 10px auto;
          width: 120px;
          height: 120px;
      }
      span{
          margin-top: 9.99975px;
          display: block;
      }
      &:first-child{
          background-color: #F9F3E4;
      }
      &:nth-child(2){
          background-color: #EBEFF6;
      }
      &:nth-child(1),&:nth-child(2){
          position: relative;
          width: 339.98px;
          height: 200px;
          span{
              position: relative;
              line-height: 200px;
              text-align: left;
              padding-left: 20px;
              font-size: 27.9998px;
              &::after{
                  content: "";
                  display: block;
                  width: 50px;
                  height: 3px;
                  position: absolute;
                  top: 130px;
                  left: 20px;
                  background-color: #000;
              }
          }
          img{
              position: absolute;
              top: 0;
              right: 0;
              width: 200px;
              height: 200px;
          }
      }
  }
}
</style>