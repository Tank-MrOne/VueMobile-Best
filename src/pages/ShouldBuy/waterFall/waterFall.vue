<template>
  <div class="container-water-fall">
    <waterfall
      :col="col"
      :data="data"
      :width="itemWidth"
      :gutterWidth="gutterWidth"
      :isTransition="true"
      @scroll="scroll"
    >
      <template>
        <div class="cell-item" v-for="(item,index) in data" :key="index">
          <img v-if="item.look.picUrl" :src="item.look.picUrl" alt="加载错误" class="waterImg" />
          <div class="item-body">
            <div class="item-desc">{{item.look.content}}</div>
          </div>
          <div class="avator">
            <img :src="item.look.avatar" alt />
            <span>{{item.look.nickname}}</span>
            <i class="right iconfont icon-yanjing">{{item.look.readCount}}</i>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>



<script type="text/ecmascript-6">
import { reqGetWaterFallMessage } from "../../../api";
export default {
  data() {
    return {
      data: [],
      col: 2,
      page:1,
    };
  },
  mounted() {
    this.getWaterFallMessage()
  },
  computed: {
    itemWidth() {
      return 145.5 * (document.documentElement.clientWidth / 375); //rem布局 计算宽度
    },
    gutterWidth() {
      return 8 * (document.documentElement.clientWidth / 375); //rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
    },
  },
  methods: {
    scroll(scrollData) {
        let scrollTop = document.documentElement.scrollTop 
        let clientHeight = document.documentElement.clientHeight 
        let scrollHeight = document.documentElement.scrollHeight 

        if(scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
            this.page = this.page + 1
            this.getWaterFallMessage()
        }
    },
    switchCol(col) {
      this.col = col;
      console.log(this.col);
    },
    async getWaterFallMessage(){
        let result = await reqGetWaterFallMessage(this.page);
        let arr = result.data.data.result;
        this.data = this.data.concat(arr)
    }
  },
};
</script>



<style lang="less" scoped>
.cell-item {
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
  margin-top: 20px;
  .waterImg {
    width: 100%;
  }
  .item-desc {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    // box-sizing: border-box;
    padding: 0 10px;
    line-height: 35px;
  }
  .avator {
    padding: 14.875px 14px 21px;
    color: #7f7f7f;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      margin-right: 20px;
      vertical-align: middle;
    }
    .right {
      float: right;
    }
  }
}
</style>