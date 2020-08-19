<template>
    <div class="search">
        <header>
            <div class="content">
                <div class="sousuo iconfont icon-sousuo"></div>
                <div v-show="value.length>0" class="close" @click="clearMessage">x</div>
                <input @input="sendRequest" v-model="value" v-if="search.defaultKeyword" type="text" :placeholder="search.defaultKeyword.keyword">
                <input @input="sendRequest" v-model="value" v-else type="text" placeholder="9.9包邮">
                <div @click="$router.back()">取消</div>
            </div>
        </header>
        <div class="content" v-show="value.length===0">
            <div class="title">
                热门搜索
            </div>
            <div class="searchItem">
                <div :class="{hot:item.highlight === 1}" v-for="(item,index) in listItem" :key="index">
                    {{item.keyword}}    
                </div> 
            </div>
        </div>
        <ul class="result" v-if="results.length>0">
            <li v-for="(item,index) in results" :key="index">{{item}}</li>
        </ul>
    </div>
</template>



<script type="text/ecmascript-6">
import {reqGetSearchMessage,reqSendSearch} from '../../api'
let setTime ;
    export default {
        data(){
            return {
                listItem : [],
                search:{},
                value : '',
                results : []
            }
        },
        watch:{
            value(newVal){
                if(newVal.length === 0){
                    this.clearMessage()
                }
            }
        },
        mounted(){
            this.getSearchMessage()
            console.log(this.$router)
        },
        methods:{
            async getSearchMessage(){
                let result = await reqGetSearchMessage()
                this.listItem = result.data.data.hotKeywordVOList
                this.search = result.data.data
            },
            sendRequest(){
                clearTimeout(setTime)
                setTime = setTimeout(async ()=>{
                    let result = await reqSendSearch(this.value)
                    this.results = result.data.data
                },300)
            },
            clearMessage(){
                this.value = ''
                this.results = []
            }
        }
    }
</script>



<style lang="less" scoped>
    .search{
        height: 100%;
        background-color: #EEEEEE;
        header{
            margin-bottom: 79.27px;
            .content{
                padding:0 30px;
                background-color: #fff;
                 height: 87.98px;
                 display: flex;
                 align-items: center;
                 .sousuo{
                     position: absolute;
                     font-size: 25px;
                     left: 20px;
                     color: #999;
                 }
                 input{
                     width: 604.02px;
                     height: 54px;
                     box-sizing: border-box;
                     padding: 0 60.02px 0 60px;
                     border: none;
                     outline: none;
                     border-radius: 3px;
                     background-color: #F4F4F4;
                     
                 }
                 div{
                     margin-left: 30px;
                     color: #333;
                     font-size: 27.9998px;
                 }
                 .close{
                     position: absolute;
                     right: 130px;
                     background-color: #ccc;
                     color: #fff;
                     width: 30px;
                     height: 30px;
                     border-radius: 50%;
                     text-align: center;
                     line-height: 26px;
                 }
            }
        }
        .content{
            padding: 0 30px 30px;
            background-color: #fff;
            .title{
                line-height: 90px;
                font-size: 27.9998px;
                color: #999;
            }
            .searchItem{
                display: flex;
                flex-wrap: wrap;
                div{
                    font-size: 24px;
                    margin: 0 32.0003px 32.0003px 0;
                    color: #333;
                    padding: 0 15px;
                    box-sizing: border-box;
                    border: solid 1px #BCBCBC;
                    line-height: 47px;
                    border-radius: 4px;
                    &.hot{
                        color: #E9696D;
                        border: solid 1px #E9696D;
                    }
                }
            }
        }
        .result{
            padding-left: 30px;
            background-color: #fff;
            li{
                line-height: 104px;
                position: relative;
                font-size: 27.9998px;
                color: #333;
                &::before{
                    content: ">";
                    position: absolute;
                    line-height: 104px;
                    right: 30px;
                    // font-size: 27.9998px;
                    color: #333;
                }
                &::after{
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    bottom: 10px;
                    left: 0;
                    background: #EDEDED;
                }
            }
        }
    }
</style>