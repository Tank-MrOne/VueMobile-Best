<template>
  <header>
    <router-link to="/" class="iconfont icon-shouye home" style="padding:0;background:#fff"></router-link>
    <router-link to="/cart" class="iconfont icon-gouwuche right"></router-link>
    <router-link to="/search" class="iconfont icon-sousuo right"></router-link>
    <div :class="{other:title==='网易严选'}">{{title}}</div>
  </header>
</template>



<script type="text/ecmascript-6">
export default {
  name: "",
  props:['title']
};
</script>



<style lang="less" scoped>
header {
  width: 750px;
  box-sizing: border-box;
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
  .other{
      font-family: "楷体";
      font-size: 43px;
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
</style>