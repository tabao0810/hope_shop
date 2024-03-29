<template>
  <nav class="nav" ref="srTop">
    <div class="container">
      <!-- Header mobile -->
      <div class="navbar-mobile">
        <div class="navbar-mobile-left">
          <navbar-menu v-model:status="toggleMenu"></navbar-menu>
          <div class="nav-menu-extend" :class="{ active: toggleMenu }">
            <ul>
              <li v-for="(item, index) in routeMenu" :key="index">
                <router-link :to="item.route">{{ item.title }}</router-link>
              </li>
            </ul>
            <div class="navbar__menu-search">
              <input
                type="text"
                class="navbar-search"
                placeholder="Search our store"
                v-model="searchName"
                @keyup.enter="handleClickSearch(searchName)"
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
        <div>
          <router-link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png"
              alt=""
              loading="lazy"
              style="width: 52px"
            />
          </router-link>
        </div>
        <div>
          <the-cart :userInfo="userInfo" :userCarts="userCarts"></the-cart>
        </div>
      </div>
      <!-- Header PC -->
      <div class="row navbar-pc">
        <div class="navbar__header col-3">
          <router-link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png"
              alt=""
              loading="lazy"
            />
          </router-link>
        </div>
        <div class="col-9 navbar-home">
          <div class="navbar__contact">
            <p class="navbar__contact-text">
              Liên hệ: 036.7773.541 - 033.5480.569
            </p>
            <the-cart :userInfo="userInfo" :userCarts="userCarts"></the-cart>
          </div>
          <div class="navbar__menu">
            <div class="row">
              <div class="navbar__menu-link col-lg-8">
                <ul class="navbar-list">
                  <li
                    class="navbar-item"
                    v-for="(item, index) in routeMenu"
                    :key="index"
                  >
                    <router-link :to="item.route" class="navbar-item-link"
                      ><span>{{ item.title }}</span></router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="col-lg-4">
                <div class="navbar__menu-search">
                  <input
                    type="text"
                    class="navbar-search"
                    placeholder="Search our store"
                    v-model="searchName"
                    @keyup.enter="handleClickSearch(searchName)"
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
    </div>
  </nav>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, computed, watch } from "vue";
import TheCart from "./TheCart.vue";
import NavbarMenu from "./icons/NavbarMenu.vue";

export default {
  components: {
    TheCart,
    NavbarMenu,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const searchName = ref("");
    const toggleMenu = ref(false);
    const routeMenu = ref([
      {
        route: "/",
        title: "Trang chủ",
      },
      {
        route: "/sale/all",
        title: "Sale",
      },
      {
        route: "/products/all",
        title: "Sản phẩm",
      },
      {
        route: "/tutorial/size_clothes",
        title: "Chọn size",
      },
      {
        route: "/blognew",
        title: "Tin tức",
      },
      {
        route: "/aboutus",
        title: "Về H&M",
      },
    ]);
    watch(route, () => {
      toggleMenu.value = false;
    });
    store.dispatch("user/loadUserLoginFromLocalStorage");

    const handleClickSearch = () => {
      const data = searchName.value;
      router.push(`/search/s=${data}`);
    };
    const userInfo = computed(() => store.state.user.userInfo);
    const userCarts = computed(() => store.state.user.userCarts);

    return {
      handleClickSearch,
      userInfo,
      userCarts,
      searchName,
      routeMenu,
      toggleMenu,
    };
  },
  mounted() {
    const totop = this.$refs.srTop;
    window.addEventListener("scroll", () => {
      let y = scrollY;
      if (y > 50) {
        totop.classList.add("activeHeader");
      } else {
        totop.classList.remove("activeHeader");
      }
    });
  },
};
</script>

<style>
.activeHeader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: auto;
}
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
  margin-right: 12px;
}
/* Mobile */
@media (max-width: 767.98px) {
  .navbar__image {
    padding: 16px 0 0;
    width: 100%;
  }
  .navbar__contact-text {
    display: none;
  }
  .navbar__menu-link {
    display: none;
  }
  .navbar__menu::before {
    display: none;
  }
}
/* Tablet */
@media (min-width: 768px) and (max-width: 991.98px) {
  .navbar__image {
    width: 100%;
    padding: 10px 0px;
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
  width: 100%;
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
  padding: 20px 0 0px;
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
  padding: 10px 0;
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
