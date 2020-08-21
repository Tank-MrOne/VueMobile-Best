<template>
  <div class="cart">
    <div class="fixed">
      <header>
        <span>领券</span>
        购物车
      </header>
      <ul class="nav">
        <li>30天无忧退货</li>
        <li>48小时快速退款</li>
        <li>满99元免邮</li>
      </ul>
    </div>
    <!-- <div class="null">
      <div class="image"></div>
      <div class="btn">登入</div>
    </div>-->
    <div style="height:0">1</div>
    <ul class="cartlist" v-if="cartList.length>0">
      <li class="item" v-for="(item,index) in cartList" :key="item.id">
        <div class="img">
          <img v-lazy="item.primaryPicUrl" alt />
          <input type="checkbox" :checked="item.checked" @click="$store.commit('receive_checkedCartList',index)">
        </div>
        <div class="title">{{item.name}}</div>
        <div class="box">
          <div class="price">￥{{item.retailPrice}}</div>
          <div class="delete" @click="deleteCartList(index)">删除</div>
          <div class="buy">
            <span>购买</span>
          </div>
        </div>
      </li>
    </ul>
    <footer>
        <div class="allChoice"><input 
            type="checkbox" 
            :checked="allChecked"
            @click="$store.commit('receive_checkedAllCartList',!allChecked)"
        > 全选</div>
        <div class="pay">
            合计： <span>￥ {{allMoney}}</span> 元
        </div>
        <div class="btn">结算</div>
    </footer>
  </div>
</template>



<script type="text/ecmascript-6">
import { mapState } from "vuex";
export default {
  name: "",
  computed: {
    ...mapState({
      cartList: (state) => state.shopList.cartList,
    }),
    allMoney(){
        return this.cartList.reduce((pre,item)=>{
            if(item.checked){
                pre = item.retailPrice + pre
            }else{
                pre = 0 + pre
            }
            return pre
        } ,0) || 0
    },
    allChecked(){
        return this.cartList.every(item => item.checked)
    }
  },
  methods: {
    deleteCartList(index) {
      if (window.confirm("是否确认删除")) {
        this.$store.commit("receive_deletecartList", index);
      }
    },
  },
};
</script>



<style lang="less" scoped>
.cart {
  height: 100%;
  background-color: #f4f4f4;
  .fixed {
    width: 750px;
    position: fixed;
    header {
      height: 87.98px;
      padding: 0 30px;
      color: #333;
      font-size: 36px;
      line-height: 87.98px;
      background-color: #fff;
      span {
        float: right;
        color: #dd1a21;
      }
    }
    .nav {
      display: flex;
      line-height: 69.98px;
      padding: 0 30px;
      background-color: #eee;
      justify-content: space-between;
      li {
        list-style: inside;
        font-size: 24px;
        color: #666;
      }
    }
  }
  .null {
    position: absolute;
    width: 750px;
    top: 50%;
    transform: translateY(-50%);
    .image {
      width: 248px;
      height: 248px;
      margin: 0 auto;
      background-image: url("./image/cart.webp");
      background-size: 100% 100%;
    }
    .btn {
      width: 480px;
      height: 92px;
      line-height: 92px;
      background-color: #dd1a21;
      text-align: center;
      color: #fff;
      font-size: 30px;
      margin: 0 auto;
      border-radius: 4px;
      margin-top: 50px;
    }
  }
  .cartlist {
    background-color: #fff;
    padding: 30px;
    margin-top: 180px;
    .item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .img {
          position: relative;
        width: 150px;
        height: 150px;
        img {
          width: 100%;
          height: 100%;
        }
        input{
            width: 25px;
            height: 25px;
            position: absolute;
            top: 0px;
            left: -20px;
        }
      }
      .title {
        font-weight: bold;
        font-size: 24px;
        padding: 0 10px;
        box-sizing: border-box;
        line-height: 120%;
      }
      .box {
        .price {
          color: #dd1a21;
          font-size: 30px;
          margin-bottom: 20px;
        }
        .delete {
          text-align: center;
          text-decoration: underline;
          &:hover {
            color: #dd1a21;
          }
          margin-bottom: 30px;
        }
        .buy {
          text-align: center;
          span {
            padding: 0 10px;
            border-radius: 30px;
            border: solid 1px orangered;
            color: orangered;
          }
        }
      }
    }
  }
  footer{
      position: fixed;
      width: 750px;
      bottom: 100px;
      display: flex;
      height: 80px;
      background-color: #fff;
      line-height: 80px;
      justify-content: space-around;
      align-items: center;
      .allChoice{
          width: 100px;
          font-size: 26px;
      }
      .pay{
          span{
              color: #dd1a21;
              font-size: 32px;
          }
      }
      .btn{
          padding:0 40px;
          border-radius: 4px;
          background-color: orangered;
          height: 60px;
          color: #fff;
          line-height: 60px;
          
      }
  }
}
</style>