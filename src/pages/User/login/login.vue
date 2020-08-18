<template>
  <div>
    <main>
      <img class="logo" src="../../../image/logo.png" alt />
      <div class="phoneBtn btn" @click="change(1)">
        <i class="iconfont icon-shouji" ></i>手机号快捷登入
      </div>
      <div class="emailBtn btn" @click="change(2)">
        <i class="iconfont icon-youxiang" ></i>邮箱账号登入
      </div>
    </main>
    <footer>
      <button>
        <i class="iconfont icon-weixin"></i> 微信
      </button>
      <button class="center">
        <i class="iconfont icon-qq"></i> QQ
      </button>
      <button>
        <i class="iconfont icon-weibo"></i> 微博
      </button>
    </footer>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props:['changeType'],
  methods:{
      change(num){
          this.changeType(num)
      }
  }
};
</script>



<style lang="less" scoped>
main {
  text-align: center;
  padding-top: 160px;
  .logo {
    width: 276.96px;
    height: 90px;
  }
  .btn {
    width: 670.06px;
    height: 93.96px;
    margin: 0 auto;
    border-radius: 2px;
    line-height: 93.96px;
    font-size: 28px;
    i {
      padding-right: 16px;
      font-size: 40px;
    }
  }
  .phoneBtn {
    color: #fff;
    margin-top: 232px;
    background-color: #dd1a21;
  }
  .emailBtn {
    color: #dd1a21;
    margin-top: 32px;
    border: solid 0.1px #dd1a21;
    box-sizing: border-box;
  }
}

footer {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 87.96px;
  button {
    background: none;
    border: none;
    outline: none;
    color: #7f7f7f;
    font-size: 25px;
    padding: 0 40px;
    i {
      margin-right: 5px;
    }
    &.center {
      border-left: solid 1px #7f7f7f;
      border-right: solid 1px #7f7f7f;
    }
  }
}
</style>