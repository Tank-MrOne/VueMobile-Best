import Vue from 'vue'
import Vuex from 'vuex'

import shopList from './modules/shopList'

Vue.use(Vuex)

const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules:{
        shopList
    }
})