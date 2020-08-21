<template>
    <div class="shopList">
        <div class="title">
            限时购
            <div>更多 ></div>
        </div>
        <div class="content">
            <div class="list" v-for="item in shopList" :key="item.itemId">
                <img v-lazy="item.picUrl" alt="">
                <span class="money">￥{{item.activityPrice}}</span>
                <span class="oldmoney">￥{{item.originPrice}}</span>
            </div>
        </div>
    </div>
</template>



<script type="text/ecmascript-6">
    export default {
        props:['shopList']
    }
</script>



<style lang="less" scoped>
    .shopList{
        margin: 20px 0;
        background-color: #fff;
        padding: 0 30px;
        .title{
            height: 99.98px;
            line-height: 99.98px;
            font-size: 32px;
            color: #333;
            position: relative;
            div{
                position: absolute;
                line-height: 99.98px;
                top: 0;
                right: 0;
                font-size: 27.9998px;
            }
        }
        .content{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .list{
                width: 216px ;
                height: 300px;
                img{
                    width: 216px;
                    height: 216px;
                }
                span{
                    line-height: 50px;
                }
                .money{
                    color: #dd1a21;
                    font-size: 27.9998px;
                    padding-right: 10px;
                }
                .oldmoney{
                    color: #7f7f7f;
                    font-size: 24px;
                }
            }
        }
    }
</style>