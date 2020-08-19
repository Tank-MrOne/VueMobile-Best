import Home from '../pages/Home/home.vue'
import Category from '../pages/Category/category.vue'
import Cart from '../pages/Cart/cart.vue'
import ShouldBuy from '../pages/ShouldBuy/shouldBuy.vue'
import User from '../pages/User/user.vue'
import Search from '../pages/Search/search.vue'

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
    }
]