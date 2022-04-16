import TheHome from './pages/TheHome.vue'
import BlogNews from './pages/BlogNews.vue'
import SaleRouter from './pages/SaleRouter.vue'
import BookRouter from './pages/BookRouter.vue'
import BookDetail from './pages/BookDetail.vue'
import PageError from './pages/PageError.vue'
import AboutUs from './pages/AboutUs.vue'
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from'./pages/RegisterPage.vue'
import BlogDetail from './pages/BlogDetail.vue'
import MyCart from './pages/MyCart.vue'
import MyWishlist from './pages/MyWishlist.vue'
import ProductDetail from './pages/ProductDetail.vue'
import CheckOut from './pages/CheckOut.vue'
import SearchProduct from './pages/SearchProduct.vue'
import TheTutorial from './pages/TheTutorial.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:"/thehome", component: TheHome,
        alias:'/'
    },
    {
        path:"/blognew", component: BlogNews,       
    },
    {
        path:"/shop", component: SaleRouter,       
    },
    {
        path:"/lookbook", component: BookRouter,       
    },
    {
        path:"/bookdetail", component: BookDetail,       
    },
    {
        path:"/pageerror", component: PageError,       
    },
    {
        path:"/aboutus", component: AboutUs,       
    },
    {
        path:"/login", component: LoginPage,   
    },
    {
        path:"/register", component: RegisterPage,       
    },
    {
        path:"/my-cart", component: MyCart,       
    },
    {
        path:"/my-wishlist", component: MyWishlist,       
    },
   {
        path:"/blog-detail/:blogId", component: BlogDetail,       
    },
    {
        path:'/product-detail/:productId', component: ProductDetail,
    },
    {
        path:'/check-out', component:CheckOut,
    },
    {
        path:'/search',component:SearchProduct,
    },
    {
        path:'/tutorial',component:TheTutorial,
    }
    

];
const router = createRouter({
    history:createWebHistory(),
    routes: routes,
    linkActiveClass : "active"
})
export default router;