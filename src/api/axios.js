import axios from "axios"
// import NProgress from 'nprogress'
// import store from '../store'

//创建axios新实例，修改两个属性
const instance = axios.create({
    baseURL : '/api',
    timeout : 20000
})

//注册请求拦截器
// instance.interceptors.request.use(config => {
//     NProgress.start()
//     config.headers['userTempId'] = store.state.users.userTempId
//     const token = store.state.users.userInfo.token
//     if(token){
//         config.headers['token']= token
//     }
//     return config
// })

//注册响应拦截器
// instance.interceptors.response.use(
//     response =>{
//         NProgress.done()
//         return response.data
//     },
//     error =>{
//         NProgress.done()

//         // 1、抛出异常
//         // throw error

//         // 2、返回错误的promise
//         return  Promise.reject(error)
//     }
// )

export default instance