<template>
    <div class="footer">
        <router-link to="/" class="page" :class="{isChoice : '/'=== $route.path}">
            <div class="icon iconfont icon-shouye"></div>
            <span>首页</span>
        </router-link>
        <router-link to="/category" class="page" :class="{isChoice : '/category'=== $route.path}">
            <div class="icon iconfont icon-jiajutubiao-"></div>
            <span>分类</span>
        </router-link>
        <router-link to="/shouldbuy" class="page" :class="{isChoice : '/shouldbuy'=== $route.path}"> 
            <div class="icon iconfont icon-image"></div>
            <span>值得买</span>
        </router-link>
        <router-link to="/cart" class="page" :class="{isChoice : '/cart'=== $route.path}">
            <div class="icon iconfont icon-gouwuche"></div>
            <span>购物车</span>
        </router-link>
        <router-link to="/user" class="page" :class="{isChoice : '/user'=== $route.path}">
            <div class="icon iconfont icon-geren"></div>
            <span>个人</span>
        </router-link>
    </div>
</template>



<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                isChoice : 0
            }
        },

        methods:{
            
        }
    }
</script>



<style lang="less" scoped>
    .footer{
        position: fixed;
        border-top: solid 1px #f6f6f6 ;
        bottom: 0;
        width: 750px;
        height: 98px;
        display: flex;
        color: #B5B5B5;
        background-color: #fff;
        z-index: 999;
        .isChoice{
            color: #E55359;
            font-weight: bold;
        }
        .page{
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content:center;
            width: 20%;
            height: 98px;
            .icon{
                width: 40px;
                height: 40px;
                font-size: 40px;
            }
            span{
                margin-top: 6.99975px;
            }
        }
    }

</style>