<template>
  <div class="container">
    <h2 class="my-cart-heading">Cart</h2>
    <div v-if="cartList.length > 0">
      <div class="cart_table">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            <table
              class="cart_table-list"
              border="1"
              cellspacing="0"
              cellpadding="10"
              width="100%"
            >
              <tr>
                <th width="10%">Remove</th>
                <th width="30%">Images</th>
                <th width="15%">Product Name</th>
                <th width="13%">variant name</th>
                <th width="12%">Unit Price</th>
                <th width="8%">Qty</th>
                <th width="12%">Subtotal</th>
              </tr>
              <tr v-for="cartItem in cartList" :key="cartItem._id">
                <td>
                  <a
                    title="Remove"
                    class="cart_table-remove"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                  >
                    <span><i class="fa fa-trash"></i></span>
                  </a>
                  <div
                    class="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          Bạn có chắc chắn muốn xóa sản phẩm ra khỏi giỏ hàng
                          không?
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Không
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger"
                            @click="handleDelete(cartItem)"
                            data-dismiss="modal"
                          >
                            Có
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <img
                    :src="cartItem.image"
                    class="cart_table-list-image"
                    alt=""
                  />
                </td>
                <td>
                  <p>{{ cartItem.name }}</p>
                </td>
                <td>
                  <span v-if="cartItem.sizeClothing" class="mr-2"
                    >{{ cartItem.sizeClothing }}/</span
                  >
                  <span v-if="cartItem.sizeShoe" class="mr-2"
                    >{{ cartItem.sizeShoe }}/</span
                  >{{ cartItem.color }}
                </td>
                <td>
                  <p>{{ FormatSale(cartItem) }}</p>
                </td>
                <td>
                  <div class="quantity_cart">
                    <button
                      class="qty-btn"
                      @click.prevent="handleDown(cartItem)"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      min="1"
                      class="cart_table-list-qty"
                      v-model="cartItem.amount"
                    />
                    <button class="qty-btn" @click.prevent="handleUp(cartItem)">
                      +
                    </button>
                  </div>
                </td>
                <td>{{ subTotal(cartItem) }}</td>
              </tr>
              <tr height="80px">
                <td colspan="7" align="left">
                  <router-link
                    to="/thehome"
                    class="cart_table-btn cart_table-margin"
                    >continue shopping</router-link
                  >
                  <a href="" @click="ClearTable" class="cart_table-btn"
                    >clear shopping cart</a
                  >
                  <a href="" class="cart_table-btn">update shopping cart</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="cart_comment">
        <div class="row">
          <div class="col-lg-8 cart_comment-heading">
            <h2>Special Instructions For Seller</h2>
            <textarea name="" id="" cols="auto" rows="4"></textarea>
          </div>
          <div class="col-lg-4 cart_comment-heading-2">
            <p class="cart_comment-price">
              Subtotal <span>{{ sumTotal }}</span>
            </p>
            <a
              href=""
              class="cart_table-btn cart_table-btn-pay"
              @click.prevent="handleToCheckOut"
              >proceed to checkout</a
            >
            <p class="cart_comment-note">
              Shipping & Taxes Calculated At Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="my-cart-empty" v-else>
      <p class="my-cart-heading-2">Your cart is currently empty.</p>
      <p class="my-cart-heading-2">
        Continue browsing <router-link to="/thehome" href="">here</router-link>.
      </p>
      <img :src="img_svg" alt="" />
    </div>
  </div>
</template>

<script>
import shopping from "../../public/image/shopping.gif";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("user");
const { mapActions } = createNamespacedHelpers("user");
export default {
  data() {
    return {
      img_svg: shopping,
    };
  },
  computed: {
    ...mapState({
      cartList: (state) => state.userCarts,
    }),
    sumTotal() {
      let x = this.cartList.reduce(
        (sum, cart) => (sum += cart.amount * this.format_sale(cart)),
        0
      );
      return (x = x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      }));
    },
  },
  methods: {
    subTotal(cartItem) {
      if (cartItem.isSale === true) {
        let x =
          (cartItem.price - cartItem.price * (cartItem.sale / 100)) *
          cartItem.amount;
        return (x = x.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        }));
      } else {
        let x = cartItem.price * cartItem.amount;
        return (x = x.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        }));
      }
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
    ...mapActions({
      handleDelete: "removeCartAction",
      handleDown: "handleDownAction",
      handleUp: "handleUpAction",
    }),
    handleToCheckOut() {
      this.$router.push("/check-out");
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    ClearTable() {
      return this.cartList.splice(1, this.cartList.length);
    },
  },
};
</script>

<style>
.cart_table-list > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  border-top: 1px solid #000;
}
.cart_table-list-image {
  width: 76%;
}
.cart_table-list-qty {
  width: 100%;
  background-color: #f0f0f0;
  border: none;
  outline: none;
  text-align: center;
  padding: 5px;
}
.cart_table-btn {
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 20px;
  color: #fff;
  background-color: #afafaf;
  font-size: 13px;
  transition: all linear 0.3s;
  margin: 0px 6px;
}
.cart_table-btn:hover {
  background-color: #ff343b;
  text-decoration: none;
  color: #fff;
}
.cart_table-margin {
  margin-right: 44%;
}
.cart_comment {
  border: 1px solid #afafaf;
  margin: 30px 0;
  padding: 20px;
}
.cart_comment-heading {
  text-align: left;
}
.cart_comment-heading > h2 {
  color: #222;
  font-size: 20px;
  font-weight: bold;
}
.cart_comment-heading > textarea {
  resize: none;
  width: 100%;
  outline: none;
  padding: 10px;
}
.cart_comment-price {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding-top: 28px;
}
.cart_comment-heading-2 > a {
  float: right;
  margin: 10px;
}
.cart_comment-note {
  float: right;
  font-size: 10px;
}
.cart_table-remove:hover i {
  cursor: pointer;
  color: #ff343b;
  transition: all linear 0.3s;
}
.my-cart-heading {
  margin: 40px 0 20px;
}
.my-cart-heading,
.my-cart-heading-2 {
  text-align: left;
}
.quantity_cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.quantity_cart > input {
  background-color: #fff;
}
.qty-btn {
  background: #fff;
  font-weight: 500;
  font-size: 20px;
  color: #111;
  padding: 8px;
  text-align: center;
  border: none;
  border-radius: 0;
  cursor: pointer;
  outline: none;
}
.qty-btn:hover {
  color: #ff343b;
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .cart_table-margin {
    margin-right: 8%;
  }
  .quantity_cart {
    flex-wrap: wrap-reverse;
  }
}
</style>
