<template>
  <div class="navbar__contact-icon">
    <div class="navbar__contact-account">
      <a href="" @click.prevent="" class="mr-3 header__btn account__btn">
        <span v-if="userInfo._id"
          ><i class="far fa-user-circle mr-1"></i>Hi,
          {{ userInfo.lastName }}</span
        >
        <span v-else
          ><i class="fa fa-key"></i
          ><span class="navbar__contact-account-mobile ml-1">
            Account</span
          ></span
        >
      </a>
      <div class="account_menu_list">
        <div class="account_single_item">
          <!-- <h2>setting</h2> -->
          <ul class="account_single_nav_3">
            <li v-if="userInfo._id">
              <a href="">Thông tin cá nhân</a>
            </li>
            <li v-if="userInfo._id">
              <router-link href="" to="my-cart">giỏ hàng</router-link>
            </li>
            <li v-if="userInfo._id">
              <router-link href="" to="/history">Đơn hàng</router-link>
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
        ><i class="fa fa-shopping-cart"></i
        ><span class="navbar__contact-account-mobile ml-1">Cart</span>
        <span class="badge badge-pill badge-danger" style="font-size: 10px">{{
          sumCart
        }}</span>
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
            <router-link href="" to="/my-cart" class="cart_single__name">{{
              cartItem.name
            }}</router-link>
            <p>{{ cartItem.amount }} x {{ FormatSale(cartItem) }}</p>
          </div>
          <div class="cart_single-remove">
            <a title="Remove" @click="handleDelete(cartItem)">
              <span><i class="fa fa-trash"></i></span>
            </a>
          </div>
        </div>
        <div class="cart_shoptings" v-if="sumCart > 0">
          <router-link to="/my-cart">Thanh toán</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  props: {
    userInfo: {
      type: Object,
    },
    userCarts: {
      type: Object,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const sumCart = computed(() =>
      props.userCarts.reduce((sum, cart) => (sum += cart.amount), 0)
    );
    const FormatSale = (cartItem) => {
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
    };

    const handleDelete = (data) => {
      store.dispatch("user/removeCartAction", data);
    };
    const LogoutPage = () => {
      store.dispatch("user/logoutUser");
      router.push("/");
    };
    return {
      sumCart,
      FormatSale,
      handleDelete,
      LogoutPage,
    };
  },
};
</script>

<style></style>
