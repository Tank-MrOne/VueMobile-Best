<template>
    <div class="detail">
        <Header :title="'网易严选'"/>
        <img v-if="shopDetail" v-lazy="shopDetail.primaryPicUrl" class="banner" alt="1">
        <div class="content">
            <div class="money">￥248</div>
            <div class="spmcprice">
                <span class="pro">Pro专享</span>
                <span class="text">Pro会员叠加优惠，到手价235.6</span>
                <div class="btn">
                    <span>开通</span>   
                </div>
            </div>
            <div class="title">好肌肤秘籍，火眼水路套装</div>
        </div>
        <footer>
            <div class="iconfont icon-erji"></div>
            <div class="buy">立即购买</div>
            <div class="cart" @click="addCartList">加入购物车</div>
        </footer>
    </div>
</template>



<script type="text/ecmascript-6">
import Header from '../../components/Header/Header'
import {mapGetters ,mapMutations} from 'vuex'
    export default {
        components:{
            Header
        },
        mounted(){
            this.$store.commit('receive_id',parseInt(this.$route.params.id))
        },
        computed:{
            ...mapGetters(['shopDetail'])
        },
        methods:{
            addCartList(){
                this.$store.commit('receive_cartList',this.shopDetail)
                this.$router.push('/cart')
            }
        }
        
        
    }
</script>



<style lang="less" scoped>
    .detail{
        .banner{
            width: 750px;
            height: 750px;
        }
        .content{
            padding: 30px;
            .money{
                line-height: 60px;
                font-size: 50px;
                color: #DD1A21;
                font-weight: bold;
            }
            .spmcprice{
                height: 68px;
                background-image: url('./image/detail.png');
                background-size: 100%;
                background-repeat:no-repeat ;
                display: flex;
                line-height: 69px;
                font-size: 20.0002px;
                padding: 0 10px 0 0 ;
                justify-content: space-between;
                margin-top: 10px;
                .pro{
                    background-color: #E3B685;
                    color: #333;
                    padding: 0 8.60025px 0 8.4px;
                    font-weight: bold;
                }
                .text{
                    color: #E3B685;
                    font-weight: bold;
                    padding-left: 20px;
                }
                .btn{
                    color: #333;
                    span{
                        background-color: #E3B685;
                        padding: 0 12px;
                        border-radius: 18px;
                        font-size: 24px;
                    }
                }
            }
            .title{
                line-height: 68px;
                font-size: 32px;
                color: #333;
                font-weight: bold;
            }
        }
        footer{
            position: fixed;
            bottom: 0;
            display: flex;
            height: 104px;
            line-height: 104px;
            text-align: center;
            border-top: solid 1px #E9E9E9;
            .iconfont{
                width: 156px;
                font-size: 60px;
            }
            .buy{
                width: 297px;
                font-size: 27.99980px;
                border-left: solid 1px #E9E9E9;
                border-right: solid 1px #E9E9E9;
            }
            .cart{
                width: 297px;
                background-color: #dd1a21;
                color: #fff;
                font-size: 27.99980px;
            }
        }
    }
</style>