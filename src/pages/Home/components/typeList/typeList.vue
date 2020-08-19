<template>
    <div class="typeList">
        <div v-for="item in typeList" :key="item.text">
            <img :src="item.picUrl" alt="">
            <span>{{item.text}}</span>
        </div>
    </div>
</template>



<script type="text/ecmascript-6">
    export default {
        props:['typeList'],
    }
</script>



<style lang="less" scoped>
    .typeList{
        display: flex;
        flex-wrap: wrap;
        margin-top: -40px;
        justify-content: space-around;
        padding-bottom: 30px;
        background-color: #fff;
        div{
            width: 110px;
            margin: 9.99975px 20px 9px;
            img{
                width: 100%;
            }
            span{
                display: block;
                margin-top: 9.99975px;
                color: #333;
            }
        }
    }
</style>