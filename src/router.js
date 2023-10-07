import TheHome from "./pages/TheHome.vue";
import BlogNews from "./pages/BlogNews.vue";
import SaleRouter from "./pages/SaleRouter.vue";
import BookRouter from "./pages/BookRouter.vue";
import PageError from "./pages/PageError.vue";
import AboutUs from "./pages/AboutUs.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import BlogDetail from "./pages/BlogDetail.vue";
import MyCart from "./pages/MyCart.vue";
import MyWishlist from "./pages/MyWishlist.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import CheckOut from "./pages/CheckOut.vue";
import SearchProduct from "./pages/SearchProduct.vue";
import TheTutorial from "./pages/TheTutorial.vue";
import PaymentSuccess from "./pages/PaymentSuccess.vue";

// Middleware
import checkTypeProduct from "@/middleware/products";

import { createRouter, createWebHistory } from "vue-router";

function lazyLoad(view) {
  return () => import(`@/pages/${view}.vue`);
}

const routes = [
  {
    path: "/",
    component: TheHome,
    alias: "/",
  },
  {
    path: "/blognew",
    component: BlogNews,
  },
  {
    path: "/sale/:type",
    component: SaleRouter,
  },
  {
    path: "/products/:typeProduct",
    component: BookRouter,
    beforeEnter: checkTypeProduct,
  },
  {
    path: "/pageerror",
    name: "PageError",
    component: PageError,
  },
  {
    path: "/aboutus",
    component: AboutUs,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/my-cart",
    component: MyCart,
  },
  {
    path: "/my-wishlist",
    component: MyWishlist,
  },
  {
    path: "/blog-detail/:blogId",
    component: BlogDetail,
  },
  {
    path: "/products/:typeProduct/:productId",
    component: ProductDetail,
    beforeEnter: checkTypeProduct,
  },
  {
    path: "/check-out",
    component: CheckOut,
  },
  {
    path: "/search/s=:title",
    component: SearchProduct,
  },
  {
    path: "/tutorial/:type",
    component: TheTutorial,
  },
  {
    path: "/history",
    component: lazyLoad("HistoryOrder"),
  },
  {
    path: "/success",
    component: PaymentSuccess,
  },
  {
    path: "/:catchAll(.*)",
    name: "PageError",
    component: PageError,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});
export default router;
