<template>
  <div>
    <div class="wrapper" ref="myScroll">
      <ul class="content">
        <img :src="item.picUrl" v-for="item in list" :key="item.id" style="width:100%" alt />
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
import betterScroll from "better-scroll";
export default {
  props: ["list"],
  mounted() {
    //   this.showScroll()
  },
  watch: {
    list(newVal) {
        this.$nextTick(() => {
            this.showScroll();
        })
    },
  },
  methods: {
    showScroll() {
      new betterScroll(this.$refs.myScroll, {
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
</style>