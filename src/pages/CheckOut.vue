<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-lg-12">
        <div class="blog__icon-link">
          <router-link to="/my-cart" class="blog__icon-text"
            ><i class="fa fa-shopping-cart px-1"></i>cart</router-link
          >
          <span class="blog__icon-text-active">INFORMATION</span>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-lg-6 user-information">
        <h3 class="user-infor-heading">Shipping address</h3>
        <form action="" class="mt-3 mb-4">
          <div class="input-field mt-2">
            <input
              type="text"
              id="last_name"
              required
              class="fullName-input"
              v-model="order.fullName"
            />
            <label for="last_name" class="fullName-label">Họ và tên:</label>
          </div>
          <div class="mt-2 emailAndPhone">
            <div class="input-field">
              <input
                type="text"
                id="email"
                required
                class="fullName-input"
                v-model="order.email"
              />
              <label for="email" class="fullName-label">Email:</label>
            </div>
            <div class="input-field">
              <input
                type="text"
                id="phone"
                required
                class="fullName-input"
                v-model="order.phoneNumber"
              />
              <label for="phone" class="fullName-label">Số điện thoại:</label>
            </div>
          </div>
          <div class="input-field mt-2">
            <input
              type="text"
              id="city"
              required
              class="fullName-input"
              v-model="order.city"
            />
            <label for="city" class="fullName-label">Thành phố:</label>
          </div>
          <div class="input-field mt-2">
            <input
              type="text"
              id="district"
              required
              class="fullName-input"
              v-model="order.district"
            />
            <label for="district" class="fullName-label">Huyện:</label>
          </div>
          <div class="input-field mt-2">
            <input
              type="text"
              id="address"
              required
              class="fullName-input"
              v-model="order.commune"
            />
            <label for="address" class="fullName-label">Xã:</label>
          </div>
          <div class="input-field mt-2">
            <input
              type="text"
              id="homeNum"
              required
              class="fullName-input"
              v-model="order.address"
            />
            <label for="homeNum" class="fullName-label">Địa chỉ cụ thể:</label>
          </div>
        </form>
        <hr />
        <h3 class="user-infor-heading mt-2">Shipping method</h3>
        <div class="ship-product">
          <div>
            <input
              type="radio"
              name=""
              id="ship"
              value="20000"
              v-model="order.shipcod"
              style="height: 18px; width: 18px; vertical-align: middle"
            />
            <label for="ship">Ship</label>
          </div>
          <p>20,000 đ</p>
        </div>
        <div class="ship-product">
          <div>
            <input
              type="radio"
              name=""
              id="flash-ship"
              value="40000"
              v-model="order.shipcod"
              style="height: 18px; width: 18px; vertical-align: middle"
            />
            <label for="flash-ship">Flash ship</label>
          </div>
          <p>40,000 đ</p>
        </div>
        <hr />
        <div class="user-infor-btn mt-3">
          <a href="" @click.prevent="handleToCart">Return to cart</a>
          <a href="" @click.prevent="handleToPayment(order)"
            >Continue to payment</a
          >
        </div>
      </div>
      <div class="col-lg-6 product-information">
        <div
          class="product-infor-item mt-3"
          v-for="cart in order.carts"
          :key="cart.id"
        >
          <div class="product-infor-image">
            <img :src="cart.image" alt="" />
            <div class="product-infor-detail">
              <p class="ml-3">{{ cart.name }}</p>
              <p class="ml-3">
                <span class="mr-4" v-if="cart.color"
                  >Size: {{ cart.sizeClothing }}{{ cart.sizeShoe }}</span
                >Màu sắc: {{ cart.color }}
              </p>
            </div>
            <span class="product-infor-amount">{{ cart.amount }}</span>
          </div>
          <p>{{ FormatSale(cart) }}</p>
        </div>
        <hr />
        <div class="subTotal">
          <p>Subtotal</p>
          <p>{{ sumTotalCart }}</p>
        </div>
        <div class="subTotal">
          <p>Shipping</p>
          <p>{{ formatShip(order.shipcod) }}</p>
        </div>
        <hr />
        <div class="total">
          <p>Total</p>
          <p>{{ totalCart }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { createNamespacedHelpers, useStore } from "vuex";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
const { mapState } = createNamespacedHelpers("user");
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const toast = useToast();
    const order = reactive({
      fullName: "",
      email: "",
      phoneNumber: "",
      city: "",
      district: "",
      commune: "",
      address: "",
      shipcod: "20000",
      carts: store.state.user.userCarts,
      userId: store.state.user.userInfo._id,
    });
    const handleToPayment = () => {
      if (order.fullName.length >= 10) {
        if (order.email.length !== 0 && order.email.includes("@")) {
          if (order.phoneNumber.length > 9 && order.phoneNumber.length < 13) {
            const data = {
              fullName: order.fullName,
              email: order.email,
              phoneNumber: order.phoneNumber,
              city: order.city,
              district: order.district,
              commune: order.commune,
              address: order.address,
              shipcod: order.shipcod,
              carts: order.carts,
              userId: order.userId,
            };
            store.dispatch("order/createOrderAction", { data, router });
            store.dispatch("user/removeAllCartActions");
            toast.success("Đặt hàng thành công");
          } else {
            toast.error("Số điện thoại không hợp lệ");
          }
        } else {
          toast.error("Địa chỉ gmail không hợp lệ");
        }
      } else {
        toast.error("Họ và tên phải có từ 10 kí tự trở lên");
      }
    };
    return { order: order, handleToPayment };
  },
  computed: {
    ...mapState({
      cartList: (state) => state.userCarts,
    }),
    sumTotalCart() {
      let x = this.cartList.reduce(
        (sum, cart) => (sum += cart.amount * this.format_sale(cart)),
        0
      );
      return (x = x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      }));
    },
    totalCart() {
      const sub = this.cartList.reduce(
        (sum, cart) => (sum += cart.amount * this.format_sale(cart)),
        0
      );
      let x = sub + Number(this.order.shipcod);
      return (x = x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      }));
    },
  },
  created() {
    console.log();
  },
  methods: {
    formatShip(x) {
      let a = Number(x);
      return a.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
    },
    FormatSale(cartItem) {
      if (cartItem.isSale === true) {
        let x = cartItem.price - cartItem.price * (cartItem.sale / 100);
        return (x = x.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        }));
      } else {
        let x = cartItem.price;
        return (x = x.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        }));
      }
    },
    format_sale(cartItem) {
      if (cartItem.isSale === true) {
        return cartItem.price - cartItem.price * (cartItem.sale / 100);
      } else {
        return cartItem.price;
      }
    },
    handleToCart() {
      this.$router.push("/my-cart");
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.product-infor-detail > p {
  text-align: left;
  margin: 0;
}
.user-information {
  padding: 40px 20px;
  border-right: 1px #ccc solid;
  text-align: left;
  padding-top: 20px;
}
.user-infor-heading {
  font-size: 18px;
}

.input-field {
  position: relative;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}
.fullName-label {
  position: absolute;
  top: 6px;
  left: 10px;
  width: 100%;
  color: #555;
  transition: 0.2s all linear;
  cursor: text;
  margin: 0;
  padding: 4px 0;
  font-weight: 300;
}
.fullName-input {
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
  box-shadow: none;
  color: #111;
  margin-top: 6px;
  padding-bottom: 4px;
  font-size: 16px;
  background-color: transparent;
}
.fullName-input:invalid {
  outline-color: none;
  background-color: transparent;
}
.fullName-input:focus,
.fullName-input:valid {
  outline: none;
  background-color: transparent;
}
.fullName-input:focus ~ .fullName-label,
.fullName-input:valid ~ .fullName-label {
  font-size: 12px;
  top: -5px;
  color: #555;
  font-weight: 300;
  background-color: transparent;
}
.emailAndPhone {
  display: flex;
}
.emailAndPhone > .input-field:first-child {
  margin-right: 10px;
}
.product-infor-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-infor-image {
  display: flex;
  align-items: center;
  position: relative;
}
.product-infor-image > img {
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.product-infor-amount {
  position: absolute;
  top: -10px;
  left: 60px;
  border-radius: 50%;
  background-color: #898989;
  width: 20px;
  height: 20px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
}
.subTotal {
  display: flex;
  justify-content: space-between;
}
.ship-product {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ship-product label {
  font-size: 16px;
  font-weight: 500;
  float: right;
  margin-left: 10px;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
}
.user-infor-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-infor-btn > a:first-child {
  font-size: 14px;
}
.user-infor-btn > a:first-child:hover {
  text-decoration: none;
  color: #ff343b;
  transition: all linear 0.3s;
}
.user-infor-btn > a:last-child {
  padding: 15px 20px;
  background-color: #1990c6;
  color: #fff;
  font-size: 20px;
  border-radius: 4px;
}
.user-infor-btn > a:last-child:hover {
  text-decoration: none;
  background-color: #36bdfc;
  transition: all linear 0.3s;
}
</style>
