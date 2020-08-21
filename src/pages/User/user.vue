<template>
  <div class="user">
    <Header :title="'网易严选'" />
    <Login v-if="type===0" :changeType="changeType"/>
    <Phone v-else-if="type===1" :changeType="changeType"/>
    <Email v-else-if="type===2" :changeType="changeType"/>
  </div>
</template>



<script type="text/ecmascript-6">
import Login from './login/login'
import Phone from './phone/phone'
import Email from './email/email'
import Header from '../../components/Header/Header'
export default {
  components:{
      Login,Phone,Email ,Header
  },
  data(){
      return{
          type:0
      }
  },
  methods:{
      changeType(num){
          this.type = num
      }
  }
};
</script>



<style lang="less" scoped>
.user {
  background-color: #f2f5f4;
  height: 100%;
}
</style>