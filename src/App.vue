<template>
  <div class="app">
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHide" />
  </div>
</template>

<script>
import Footer from './components/Footer/footer'
export default {
  components:{
    Footer
  }
}
</script>

<style lang="less">
  .app{
    height: 100%;
  }
</style>
