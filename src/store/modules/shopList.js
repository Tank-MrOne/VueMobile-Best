import {reqGetShopList} from '../../api'
import Vue from 'vue'
export default {
        state:{
                shoplist : {},
                id:0,
                cartList : []
        },
        mutations :{
                receive_shoplist(state,shoplist){
                        state.shoplist = shoplist
                },
                receive_id(state,id){
                    state.id = id
                },
                receive_cartList(state,obj){
                    Vue.set(obj,'checked',true)
                    state.cartList.push(obj)
                },
                receive_deletecartList(state,index){
                    state.cartList.splice(index,1)
                },
                receive_checkedCartList(state,index){
                    state.cartList[index].checked = !state.cartList[index].checked
                },
                receive_checkedAllCartList(state,flag){
                    state.cartList.forEach(item=>{
                        item.checked = flag
                    })
                },
        },
        actions:{
                async getShopList({commit},{categoryId,subCategoryId}){
                        const result = await reqGetShopList(categoryId,subCategoryId)
                        commit('receive_shoplist',result.data.data)
                }
        },
        getters:{
                shopDetail(state){
                    if(state.shoplist.categoryItems){
                        let obj = state.shoplist.categoryItems.itemList.find(item => item.id === state.id)
                        console.log("obj",obj)
                        return obj
                    }
                    return {}
                },
        }
}