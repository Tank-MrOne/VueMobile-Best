<template>
  <div class="user">
    <header>
      <router-link to="/" class="iconfont icon-shouye home"></router-link>
      <router-link to="/cart" class="iconfont icon-gouwuche right"></router-link>
      <router-link to="/" class="iconfont icon-sousuo right"></router-link>
      <div>
         网易严选
      </div>
    </header>
    <Login v-if="type===0" :changeType="changeType"/>
    <Phone v-else-if="type===1" :changeType="changeType"/>
    <Email v-else-if="type===2" :changeType="changeType"/>
  </div>
</template>



<script type="text/ecmascript-6">
import Login from './login/login'
import Phone from './phone/phone'
import Email from './email/email'
export default {
  components:{
      Login,Phone,Email 
  },
  data(){
      return{
          type:2
      }
  },
  methods:{
      changeType(num){
          console.log("111");
          this.type = num
      }
  }
};
</script>



<style lang="less" scoped>
.user {
  background-color: #f2f5f4;
  height: 100%;
  header {
    position: relative;
    height: 87.96px;
    padding: 0 16px 0 24px;
    color: #5B5D51;
    background-color: #FAFAFA;
    border-bottom: solid 1px #e5e5e5;
    div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 172px;
      height: 54px;
      font-size: 43px;
      color: #000;
      font-family: "楷体";
    }
    .iconfont {
      font-size: 42px;
      margin-top: 20px;
    }
    .home {
      float: left;
    }
    .right {
      float: right;
      margin-left: 20px;
    }
  }


}
</style>