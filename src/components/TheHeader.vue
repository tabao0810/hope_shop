<template>
  <nav class="nav">
    <div class="container">
      <div class="row">
        <div class="navbar__header col-lg-3">
          <router-link to="/thehome" class="navbar__link">
            <img
              src="https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/logo-home-2.png?v=3954688773146649554"
              alt=""
              class="navbar__image"
            />
          </router-link>
        </div>
        <div class="col-lg-9 navbar-home">
          <div class="navbar__contact">
            <p class="navbar__contact-text">
              Liên hệ: (555) 732-253-8714, (555) 732-253-8715
            </p>
            <div class="navbar__contact-icon">
              <div class="navbar__contact-account">
                <a href="" class="mr-3 header__btn account__btn">
                  <span v-if="userInfo._id"
                    ><i class="far fa-user-circle mr-1"></i>Hi,
                    {{ userInfo.lastName }}</span
                  >
                  <span v-else><i class="fa fa-key mr-1"></i>Account</span>
                </a>
                <div class="account_menu_list">
                  <div class="account_single_item">
                    <h2>setting</h2>
                    <ul class="account_single_nav_3">
                      <!-- <li v-if="userInfo._id">
                        <a href="">Thông tin cá nhân</a>
                      </li> -->
                      <li v-if="userInfo._id">
                        <router-link href="" to="my-cart">giỏ hàng</router-link>
                      </li>
                      <li v-if="userInfo._id">
                        <router-link href="" to="/history"
                          >Đơn hàng</router-link
                        >
                      </li>
                      <li v-if="userInfo._id">
                        <router-link href="" to="/my-wishlist"
                          >danh sách yêu thích</router-link
                        >
                      </li>
                      <li v-if="userInfo._id">
                        <a href="" @click.prevent="LogoutPage">Đăng xuất</a>
                      </li>
                      <li v-else>
                        <router-link to="/login">Đăng nhập</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="navbar__contact-cart">
                <router-link href="" to="/my-cart" class="header__btn cart-btn"
                  ><i class="fa fa-shopping-cart mr-1"></i>Cart
                  <span
                    class="badge badge-pill badge-danger"
                    style="font-size: 10px"
                    >{{ sumCart }}</span
                  >
                </router-link>
                <div class="cart_down_area">
                  <div class="cart_single" v-if="sumCart === 0">
                    Hiện chưa có sản phẩm nào trong giỏ hàng
                  </div>
                  <div
                    class="cart_single"
                    v-else
                    v-for="cartItem in userCarts"
                    :key="cartItem._id"
                  >
                    <div class="cart_single-image">
                      <a href=""><img :src="cartItem.image" alt="" /></a>
                    </div>
                    <div class="cart_single-text">
                      <router-link
                        href=""
                        to="/my-cart"
                        class="cart_single__name"
                        >{{ cartItem.name }}</router-link
                      >
                      <p>{{ cartItem.amount }} x {{ FormatSale(cartItem) }}</p>
                    </div>
                    <div class="cart_single-remove">
                      <a title="Remove" @click="handleDelete(cartItem)">
                        <span><i class="fa fa-trash"></i></span>
                      </a>
                    </div>
                  </div>
                  <div class="cart_shoptings">
                    <router-link to="/my-cart">Thanh toán</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar__menu">
            <div class="row">
              <div class="navbar__menu-link col-lg-8">
                <ul class="navbar-list">
                  <li class="navbar-item">
                    <router-link to="/thehome" class="navbar-item-link"
                      ><span>Trang chủ</span></router-link
                    >
                  </li>
                  <li class="navbar-item">
                    <router-link to="/shop" class="navbar-item-link"
                      ><span>Sale</span></router-link
                    >
                  </li>
                  <li class="navbar-item">
                    <router-link to="/lookbook" class="navbar-item-link"
                      ><span>Sản phẩm</span></router-link
                    >
                  </li>
                  <li class="navbar-item">
                    <router-link to="/tutorial" href="" class="navbar-item-link"
                      ><span>Chọn size</span></router-link
                    >
                  </li>
                  <li class="navbar-item">
                    <router-link to="/blognew" class="navbar-item-link"
                      ><span>Tin tức</span></router-link
                    >
                  </li>
                  <li class="navbar-item">
                    <router-link to="/aboutus" href="" class="navbar-item-link"
                      ><span>Về Hope</span></router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="navbar__menu-input col-lg-4">
                <div class="navbar__menu-search">
                  <input
                    type="text"
                    class="navbar-search"
                    placeholder="Search our store"
                    v-model="searchName"
                  />
                  <button
                    class="navbar-icon"
                    @click="handleClickSearch(searchName)"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-mobile">
        <div class="navbar-mobile-main">
          <h5 style="padding: 6px 16px">MENU</h5>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggle-icon"><i class="fa fa-bars"></i></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav">
            <li class="navbar-item">
              <router-link to="/thehone" class="navbar-item-link"
                ><span>Trang chủ</span></router-link
              >
            </li>
            <li class="navbar-item">
              <router-link to="/shop" class="navbar-item-link"
                ><span>Sale</span></router-link
              >
            </li>
            <li class="navbar-item">
              <router-link to="/lookbook" class="navbar-item-link"
                ><span>Sản phẩm</span></router-link
              >
            </li>
            <li class="navbar-item">
              <router-link to="/tutorial" class="navbar-item-link"
                ><span>Chọn size</span></router-link
              >
            </li>
            <li class="navbar-item">
              <router-link to="/blognew" class="navbar-item-link"
                ><span>Tin tức</span></router-link
              >
            </li>
            <li class="navbar-item">
              <router-link to="/aboutus" class="navbar-item-link"
                ><span>Về HOPE</span></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import { createNamespacedHelpers, useStore } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("user");
import { ref } from "vue";

export default {
  methods: {
    ...mapActions({
      handleDelete: "removeCartAction",
    }),
    FormatSale(cartItem) {
      if (cartItem.isSale === true) {
        let x = cartItem.price - cartItem.price * (cartItem.sale / 100);
        return (x = x.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        }));
      } else {
        let x = cartItem.price;
        return x.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        });
      }
    },
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
      userCarts: (state) => state.userCarts,
    }),
    sumCart() {
      return this.userCarts.reduce((sum, cart) => (sum += cart.amount), 0);
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const searchName = ref("");
    store.dispatch("user/loadUserLoginFromLocalStorage");
    const LogoutPage = () => {
      store.dispatch("user/logoutUser");
      router.push("/");
    };

    const handleClickSearch = () => {
      const data = searchName.value;
      store.dispatch("products/searchNameAction", { data, router });
    };
    return {
      LogoutPage,
      handleClickSearch,
      searchName: searchName,
    };
  },
};
</script>

<style>
.badge-danger {
  position: absolute;
  top: 0;
  right: -16px;
}
.header__btn {
  color: white;
  font-size: 18px;
}
.navbar__contact-account {
  position: relative;
  cursor: pointer;
}
.navbar__contact-cart {
  position: relative;
  cursor: pointer;
}
.navbar__contact-icon {
  display: flex;
}
.navbar-mobile {
  background-color: red;
  border-radius: 5px;
  display: none;
}
/* Mobile */
@media (max-width: 767.98px) {
  .navbar__image {
    padding: 16px 0 0;
  }
  .navbar__contact {
    display: none;
  }
  .navbar__contact-text,
  .navbar__contact-icon {
    display: none;
  }
  .navbar__menu-link {
    display: none;
  }
  .navbar__menu::before {
    display: none;
  }
  .navbar-mobile {
    display: block;
  }
}
/* Tablet */
@media (min-width: 768px) and (max-width: 991.98px) {
  .navbar__image {
    padding: 32px;
  }
  .navbar__contact {
    margin-top: 12px;
  }
  .navbar-list {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .navbar__menu-search {
    display: flex;
  }
  .navbar-search {
    flex-grow: 1;
  }
  .navbar__menu-link {
    padding: 12px 0;
  }
}
/* PC */
.nav {
  background-color: #282828;
}
.navbar__header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar__contact {
  justify-content: space-between;
  display: flex;
}
.navbar__contact {
  padding: 20px 0 20px;
}
.navbar__contact-text {
  color: #aaaaaa;
}
.navbar__menu {
  padding: 10px 0;
}
.navbar__menu::before {
  content: "";
  border-top: 1px solid #aaaaaa;
  width: 100%;
  display: block;
  position: relative;
  top: -15px;
}
.navbar-list {
  display: flex;
  list-style: none;
  padding-left: 0;
}
.navbar-item-link {
  color: #ffff;
  padding: 20px 10px;
  font-weight: bold;
}
.navbar__menu-search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-search {
  background-color: #282828;
  outline: none;
  border: 1px solid #3d3d3d;
  padding: 0 40px 0 15px;
  background: transparent none repeat scroll 0 0;
  border-radius: 1px;
  height: 34px;
  min-width: 220px;
  color: aliceblue;
}
.navbar-icon {
  font-size: 16px;
  padding: 5.5px 12px;
  color: #fff;
  background-color: #64656a;
  cursor: pointer;
  border: none;
  border-radius: 1px;
}
.navbar-icon:hover {
  background-color: red;
  outline: none;
}
.navbar-item:hover .navbar-item-link {
  color: red;
  text-decoration: none;
}
.navbar-item {
  position: relative;
  text-align: left;
}
.navbar-item:hover .navbar-item-link span::before {
  visibility: visible;
  animation: navbar linear 0.3s;
}
.navbar-item:hover .navbar-item-link span::after {
  visibility: visible;
  animation: navbar-2 linear 0.3s;
}
@keyframes navbar {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(-10px);
    opacity: 1;
  }
}
@keyframes navbar-2 {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(10px);
    opacity: 1;
  }
}
.navbar-item-link span::before {
  position: absolute;
  content: "";
  top: -6px;
  left: 0;
  width: 100%;
  height: 16px;
  background: url(https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/bg_hover_white.png)
    no-repeat 50% 50%;
  visibility: hidden;
  transform: translateY(-10px);
}
.navbar-item-link span::after {
  position: absolute;
  content: "";
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 16px;
  background: url(https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/bg_hover2_white.png)
    no-repeat 50% 50%;
  visibility: hidden;
  transform: translateY(10px);
}
.navbar-mobile-main {
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
}
.navbar-toggle-icon {
  color: #fff;
  font-size: 24px;
}

.account_menu_list {
  visibility: hidden;
  width: 250px;
  position: absolute;
  top: 25px;
  right: 10px;
  background: #fff;
  z-index: 9;
  border-top: 1px solid #eee;
  box-shadow: 0 2px 3px rgb(0 0 0 / 30%);
  overflow: hidden;
  /* opacity: 0; */
  cursor: default;
  transition: all linear;
}
@keyframes account {
  from {
    transform: translateY(15px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
.navbar__contact-account:hover .account__btn {
  color: red;
  transition: all 0.2s linear;
  text-decoration: none;
}
.navbar__contact-account:hover .account_menu_list {
  visibility: visible;
  animation: account linear 0.3s;
}

.account_single_item {
  float: left;
  overflow: hidden;
  width: 100%;
  padding: 20px;
}
.account_single_item > h2 {
  border-bottom: 1px solid #eee;
  display: block;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 20px;
  margin: 0;
  padding: 20px 0 15px;
  text-align: right;
  text-transform: uppercase;
  font-weight: bold;
}
.account_single_nav_3 {
  margin: 0;
  padding: 0;
  list-style: none;
}
.account_single_nav_3 li {
  display: inline-block;
  padding: 5px 0px;
  border-bottom: 1px solid #eee;
  width: 100%;
  text-align: right;
}
.account_single_nav_3 li a {
  display: inline-block;
  color: #666;
  text-transform: capitalize;
  font-size: 14px;
  margin: 0 10px;
  text-decoration: none;
  font-weight: 600;
}
.account_single_nav_3 li a:hover {
  color: #ff343b;
}
.cart_down_area {
  position: absolute;
  top: 25px;
  right: 10px;
  background: #fff;
  z-index: 9;
  box-shadow: 0 2px 3px rgb(0 0 0 / 30%);
  width: 250px;
  visibility: hidden;
  cursor: default;
  transform-origin: 0 0 0;
  transition: all 0.5s ease 0s;
  transform: scaleY(0);
}
.cart_single {
  padding: 4px 10px;

  display: flex;
  align-items: center;
}
.cart_single a {
  color: #888;
  margin: 0;
}
.cart_single-image {
  flex: 0.2;
}
.cart_single-text {
  flex: 0.7;
  text-align: left;
  margin-left: 10px;
}
.cart_single-text > a {
  font-size: 16px;
  font-weight: bold;
}
.cart_single-text > a:hover {
  color: #ff343b;
  text-decoration: none;
  transition: all linear 0.3s;
}
.cart_single-remove {
  flex: 0.1;
  cursor: pointer;
}
.cart_single-remove:hover {
  color: #ff343b;
  transition: all linear 0.2s;
}
.cart_single p {
  color: #888;
  margin: 0;
  font-size: 15px;
}
.cart_single img {
  margin-right: 8px;
  width: 100%;
}
.cart_shoptings {
  padding: 0px 10px 10px 10px;
}
.cart_shoptings a {
  padding: 10px 0px;
  background: #afafaf;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  /* transition: all 0.2s linear; */
  text-align: center;
  text-decoration: none;
  display: block;
  font-weight: 600;
}
.cart_shoptings a:hover {
  text-decoration: none;
  background-color: #ff343b;
  color: #fff;
}
.navbar__contact-cart:hover .cart-btn {
  color: red;
  transition: all 0.2s linear;
  text-decoration: none;
}
.navbar__contact-cart:hover .cart_down_area {
  visibility: visible;
  transform: scaleY(1);
}
.mega_menu_list {
  position: absolute;
  z-index: 9;
  top: 50px;
  left: -102px;
  background: #fff;
  box-shadow: 0 2px 3px rgb(0 0 0 / 30%);
  border: 1px solid #eee;
  transform-origin: 0 0 0;
  transition: all 0.5s ease 0s;
  padding: 30px;
  opacity: 0;
  visibility: hidden;
  transform: scaleY(0);
}
.mega_menu_list::before {
  content: "";
  position: absolute;
  height: 20px;
  width: 100%;
  z-index: 7;
  top: -20px;
  left: 0;
}
.drown_menu {
  left: 0 !important;
  padding: 15px !important;
  width: 220px;
}
.mega_menu_list a {
  display: block;
  padding: 12px 0px;
  font-size: 18px;
  text-transform: capitalize;
  text-decoration: none;
  color: #666666;
  font-weight: 600;
}
.mega_menu_list a:hover {
  color: #ff343b;
  text-decoration: none;
}
.navbar-item:hover .mega_menu_list {
  opacity: 1;
  visibility: visible;
  transform: scaleY(1);
}
.single_megamenu {
  float: left;
  width: 25%;
  text-align: left;
}
.single_megamenu h2 {
  font-size: 18px;
  color: #666;
  margin-bottom: -4px;
}
.items_list a {
  font-size: 14px;
  color: #999999;
  padding: 6px 0;
  margin-left: 2px;
}
.mega-menu-new {
  left: -130px !important;
  width: 800px;
}
.cart_single__name {
  height: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
