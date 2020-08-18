<template>
    <div class="phone">
        <img class="logo" src="../../../image/logo.png" alt="">
        <div class="form">
            <div class="form-div">
                <div class="close" v-show="close" @click="clearText">x</div>
                <input type="text" maxlength="11" placeholder="请输入手机号" v-model="phoneNumber" @focus="clearSubmit" @blur="regSubmit">
            </div>
            <div class="form-div">
                <input type="text" placeholder="请输入短信验证码"  v-model="numReg" @focus="clearSubmit" @blur="regSubmit">
                <button>获取验证码</button>
            </div>
            <span class="flag" v-show="flag">{{text}}</span>
            <div class="help">
                <a href="##">遇到问题?</a>
                <span>
                    使用密码验证登入
                </span>
            </div>
            <div class="logonButton" @click="login">
                登录
            </div>
            <div class="agree">
                <input type="checkbox" checked>
                我同意
                <span> 《服务条款》</span>
                和
                <span> 《网易隐私政策》</span>
            </div>
            <div class="last" @click="changeType(0)">
                其他登入方式 >
            </div>
        </div>
        
    </div>
</template>



<script type="text/ecmascript-6">
    export default {
        props:['changeType'],
        data(){
            return {
                phoneNumber:"",
                numReg :"",
                flag : false,
                text : '',
            }
        },
        computed:{
            close(){
                if(this.phoneNumber.length>0){
                    return true
                }else{
                    return false
                }
            }
        },
        methods:{
            regSubmit(){
                let phoneReg = /^1[3-9]{2}[0-9]{8}$/;
                let num = /^[0-9]{4}$/
                if(this.phoneNumber.length===0){
                    this.flag = true
                    this.text = "请输入手机号"
                    return
                }
                if(!phoneReg.test(this.phoneNumber)){
                    this.flag = true
                    this.text = "手机号格式错误"
                    return
                }
                if(!num.test(this.numReg)){
                    this.flag = true
                    this.text = "短信验证码格式错误"
                    return
                }
            },
            clearSubmit(){
                this.flag = false
                this.text = ""
            },
            clearText(){
                this.phoneNumber = ''
                this.clearSubmit()
            },
            login(){
                this.regSubmit()
                if(!this.flag){
                    alert("验证通过")
                }
            }
        }
    }
</script>



<style lang="less" scoped>
    .phone{
        height: 100%;
        padding-top: 56px;
        background-color: #fff;
        .logo{
            display: block;
            margin: 0 auto 56px;
            width: 268px;
            height: 90px;
        }
        .form{
            width: 670.68px;
            height: 566.76px;
            margin: 0 auto;
            .form-div{
                border-bottom: solid 1px #F3F3F3;
                box-sizing: border-box;
                &:nth-child(1){
                    position: relative;
                    .close{
                        position: absolute;
                        top: 50%;
                        // transform: translateY(-50%);
                        right: 20px;
                        background: #ccc;
                        width: 25px;
                        height: 25px;
                        text-align: center;
                        line-height: 25px;
                        color: #fff;
                        border-radius: 50%;
                    }
                }
                &:nth-child(2){
                    position: relative;
                    margin-top: 28.42px;
                    button{
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 20px;
                        width: 164.22px;
                        height: 53.54px;
                        padding: 0;
                        background: none;
                        border: solid 1px #ABABAB;
                        border-radius:2px ;
                        font-size: 28px;
                    }
                }
                input{
                    width: 100%;
                    box-sizing: border-box;
                    border: none;
                    outline: none;
                    margin: 27.846px 0;
                    font-size: 30px;
                }
            }
            .flag{
                display: block;
                padding: 20px 0;
                color: #dd1a21;
            }
            .help{
                margin-top: 41.8832px;
                font-size: 28.56px;
                color: #666;
                span{
                    float: right;
                    color: black;
                }
            }
            .logonButton{
                margin-top: 41.8832px;
                width: 670.68px;
                height: 91.38px;
                background-color: #dd1a21;
                border-radius: 2px;
                text-align: center;
                line-height: 91.38px;
                color: #fff;
                font-size: 28.56px;
            }
            .agree{
                margin-top: 25px;
                font-size: 24px;
                color:#7f7f7f ;
                input{
                    width: 34.26px;
                    height: 34.26px;
                    vertical-align: middle;
                    background: none;
                    border: solid 1px #ABABAB;
                    &:checked{
                        background: none;
                    }
                }
                span{
                    color: #007aff;
                }
            }
            .last{
                text-align: center;
                font-size: 28px;
                margin-top: 45.9998px;
                color: #333;
            }
        }
    }
</style>