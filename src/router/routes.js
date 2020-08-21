

const Home = () => import('../pages/Home/home.vue')
const Category = () => import('../pages/Category/category.vue')
const Cart = () => import('../pages/Cart/cart.vue')
const ShouldBuy = () => import('../pages/ShouldBuy/shouldBuy.vue')
const User = () => import('../pages/User/user.vue')
const Search = () => import('../pages/Search/search.vue')
const ShopList = () => import('../pages/ShopList/shopList.vue')
const Detail = () => import('../pages/Detail/detail.vue')
// import Home from '../pages/Home/home.vue'
// import Category from '../pages/Category/category.vue'
// import Cart from '../pages/Cart/cart.vue'
// import ShouldBuy from '../pages/ShouldBuy/shouldBuy.vue'
// import User from '../pages/User/user.vue'
// import Search from '../pages/Search/search.vue'
// import ShopList from '../pages/ShopList/shopList.vue'
// import Detail from '../pages/Detail/detail.vue'

export default[
    {
        path:'/',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/shouldbuy',
        component:ShouldBuy
    },
    {
        path:'/user',
        component:User,
        meta:{
            isHide:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta:{
            isHide:true
        }
    },
    {
        path:'/shoplist',
        component:ShopList,
        meta:{
            isHide:true
        }
    },
    {
        path:'/detail/:id',
        component:Detail,
        meta:{
            isHide:true
        }
    }
]