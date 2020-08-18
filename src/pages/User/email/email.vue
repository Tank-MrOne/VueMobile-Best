<template>
  <div class="email">
    <img class="logo" src="../../../image/logo.png" alt />
    <div class="form">
      <div class="input">
        <div class="close" v-show="emailText" @click="clearText(1)">x</div>
        <!--      @blur="changeEmailText('blur')"  -->
        <input type="text" placeholder="邮箱账号" v-model="emailText" @focus="submit=false"/>
        <ul class="emailAddress" v-show="address">
          <li @click="changeEmailText('@163.com')">{{emailText}}@163.com</li>
          <li @click="changeEmailText('@126.com')">{{emailText}}@126.com</li>
          <li @click="changeEmailText('@yeah.net')">{{emailText}}@yeah.net</li>
          <li @click="changeEmailText('@188.com')">{{emailText}}@188.com</li>
        </ul>
      </div>
      <div class="input">
        <div class="close" v-show="emailPassword.length>0" @click="clearText(2)">x</div>
        <input type="password" v-model="emailPassword" placeholder="密码" @focus="submit=false"/>
      </div>
      <span class="flag" v-show="submit">{{text}}</span>
      <div class="register">
        注册账号
        <span>忘记密码</span>
      </div>
      <div class="login" @click="toSubmit">登录</div>
      <a href="##" class="last" @click="changeType(0)">其他登入方式 ></a>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props: ["changeType"],
  data() {
    return {
      emailText: "",
      emailPassword : '',
      flag: true,
      text:'123',
      submit:false
    };
  },
  computed: {
    address() {
      if (this.emailText.length > 0 && this.flag) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    emailText(newVla) {
      if (newVla.length === 0) {
        this.flag = true;
      }
    },
  },
  methods: {
    changeEmailText(value) {
        console.log('changeEmailText');
        if(value === 'blur'){
            this.changeText() 
        }
        this.emailText = this.emailText + value;
        this.flag = false;
    },
    toSubmit(){
        if(this.flag){
            this.text = "请输入账号"
            this.submit = true
            return 
        }
        if(this.emailPassword.length===0){
            this.text = "请输入密码"
            this.submit = true
            return 
        }
        alert("验证通过")
    },
    clearText(index){
        if(index === 1){
            this.emailText = ''
        }else{
            this.emailPassword = ''
        }
    }
  },
};
</script>



<style lang="less" scoped>
.email {
  height: 100%;
  background-color: #fff;
  padding-top: 56px;
  .logo {
    display: block;
    margin: 0 auto 40px;
    width: 268px;
    height: 90px;
  }
  .form {
    margin: 0 auto;
    width: 670.68px;
    padding-top: 114.24px;
    .input {
      box-sizing: border-box;
      border-bottom: solid 1px #ececec;
      position: relative;
      .close {
        position: absolute;
        top: 50%;
        // transform: translateY(-50%);
        right: 20px;
        background: #ccc;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        color: #fff;
        border-radius: 50%;
      }
      .emailAddress {
        background: #fff;
        position: absolute;
        top: 95px;
        left: 0px;
        z-index: 1;
        width: 670.68px;
        li {
          line-height: 90px;
        }
      }
      input {
        margin: 27.846px 0;
        width: 100%;
        border: none;
        outline: none;
        box-sizing: border-box;
      }
    }
    .register {
      color: #666;
      font-size: 25px;
      padding: 41.8832px 0 40px;
      span {
        float: right;
      }
    }
    .flag {
      display: block;
      padding: 20px 0;
      color: #dd1a21;
    }
    .login {
      width: 670.68px;
      height: 91.38px;
      background-color: #dd1a21;
      border-radius: 2px;
      text-align: center;
      line-height: 91.38px;
      color: #ffffff80;
      font-size: 28.56px;
      border-radius: 2px;
    }
    .last {
      display: block;
      font-size: 28px;
      color: #333;
      margin-top: 75px;
      text-align: center;
    }
  }
}
</style>