<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-12">
        <div class="blog__icon-link">
          <router-link to="/" class="blog__icon-text">home</router-link>
          <span class="blog__icon-text-active">HISTORY</span>
        </div>
      </div>
    </div>
    <div v-if="listOrder?.length > 0">
      <h2 class="mt-5">Lịch sử mua hàng</h2>
      <div class="mt-3">
        <div class="table-responsive">
          <table border="1" cellpadding="20" width="2000">
            <thead>
              <tr style="background: #ccc; font-weight: bolder">
                <td width="10%">Mã đơn hàng</td>
                <td width="10%">Họ và tên</td>
                <td width="10%">Số điện thoại</td>
                <td width="10%">Địa chỉ</td>
                <td width="20%">Sản phẩm</td>
                <td width="10%">Phí vận chuyển</td>
                <td width="10%">Tổng tiền</td>
                <td width="10%">Thời gian đặt</td>
                <td width="10%">Tình trạng</td>
              </tr>
              <tr v-for="order in getOrders" :key="order._id">
                <td>{{ order._id }}</td>
                <td>{{ order.fullName }}</td>
                <td>{{ order.phoneNumber }}</td>
                <td>
                  {{ order.address }},{{ order.commune }},{{
                    order.district
                  }},{{ order.city }}
                </td>
                <td>
                  <div
                    class="product-infor-item mt-1"
                    v-for="(pro, index) in order.carts"
                    :key="index"
                  >
                    <div class="product-infor-image">
                      <img :src="pro.image" alt="" />
                      <div class="product-infor-detail">
                        <p class="ml-3">{{ pro.name }}</p>
                        <p class="ml-3">
                          <span
                            class="mr-4"
                            v-if="pro.sizeShoe || pro.sizeClothing"
                            >Size: {{ pro.sizeClothing
                            }}{{ pro.sizeShoe }}</span
                          ><span v-if="pro.color"
                            >Màu sắc: {{ pro.color }}</span
                          >
                        </p>
                      </div>
                      <span class="product-infor-amount">{{ pro.amount }}</span>
                    </div>
                  </div>
                </td>
                <td>
                  {{ formatShip(order.shipcod) }}
                </td>
                <td>
                  {{ totalPrice(order) }}
                </td>
                <td>{{ formatDate(order.createdAt) }}</td>
                <td>
                  <span v-if="order.mess === 'Đang giao'"
                    ><img
                      src="https://dungcudienbosch.com/wp-content/uploads/2016/04/chinh_sach_giao_hang.png"
                      alt=""
                      style="width: 50px"
                    />{{ order.mess }}</span
                  >
                  <span v-else-if="order.mess === 'Giao hàng thành công'"
                    ><img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mPt0BAlaPbvs_RmkaMWWUcvVXI1KcSa4qcy6xAXqdeJGFoixxAPVmBxUYj83-eh-oIM&usqp=CAU"
                      alt=""
                      style="width: 50px"
                    /><br />{{ order.mess }}
                  </span>
                  <span v-else
                    ><img
                      src="https://cdn-icons-png.flaticon.com/512/66/66166.png"
                      alt=""
                      style="width: 50px"
                    /><br />{{ order.mess }}</span
                  >
                  <hr v-if="order.mess !== 'Giao hàng thành công'" />
                  <div
                    class="updateStatus"
                    v-if="order.mess !== 'Giao hàng thành công'"
                  >
                    <input
                      type="checkbox"
                      :name="order._id"
                      :id="order._id"
                      class="check-status"
                      @click="checkedStatus(order)"
                    />
                    <label :for="order._id">Đã nhận hàng</label>
                  </div>
                </td>
              </tr>
            </thead>
          </table>
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCountOrder > 1"
              :page-count="getPaginationCountOrder"
              :page-range="2"
              :margin-pages="2"
              :click-handler="clickCallback"
              :prev-text="'←'"
              :next-text="'→'"
              :container-class="'pagination'"
              :page-class="'page-item'"
              :page-link-class="'page-link'"
              :prev-class="'page-item'"
              :prev-link-class="'page-link'"
              :next-class="'page-item'"
              :next-link-class="'page-link'"
              :hide-prev-next="true"
            >
            </paginate>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="mt-5">Hiện chưa có đơn hàng nào!!</h2>
    </div>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    Paginate,
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 5,
    };
  },
  setup() {
    const store = useStore();
    store.dispatch("order/getAllOrdersActions");
    const listOrder = computed(() => store.getters["order/getOrderByUser"]);
    const checkedStatus = (ord) => {
      ord.mess = "Giao hàng thành công";
      store.dispatch("order/updateOrderActions", ord);
    };
    return { listOrder, checkedStatus };
  },
  methods: {
    totalPrice(list) {
      const sub = list.carts.reduce(
        (sum, cart) => (sum += cart.amount * this.format_sale(cart)),
        0
      );
      let x = sub + Number(list.shipcod);
      return (x = x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      }));
    },
    format_sale(cartItem) {
      if (cartItem.isSale === true) {
        return cartItem.price - cartItem.price * (cartItem.sale / 100);
      } else {
        return cartItem.price;
      }
    },
    formatShip(a) {
      const x = Number(a);
      return x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
    },
    formatDate(a) {
      const time = new Date(a);
      return time.toDateString().slice(3);
    },
    clickCallback(pagenum) {
      this.currentPage = Number(pagenum);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  computed: {
    getOrders() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.listOrder.slice(start, end);
    },
    getPaginationCountOrder() {
      return Math.ceil(this.listOrder.length / this.perPage);
    },
  },
  created() {
    this.listOrder.map((item) => {
      this.items.push(item);
    });
  },
};
</script>

<style scoped>
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
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.product-infor-amount {
  position: absolute;
  top: 0px;
  left: 40px;
  border-radius: 50%;
  background-color: #898989;
  width: 20px;
  height: 20px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
}
.product-infor-detail > p {
  font-size: 14px;
  margin: 0;
  text-align: left;
}
.product-infor-detail > p:first-child {
  line-height: 20px;
  height: 20px;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.updateStatus > label {
  margin: 0;
  padding-left: 4px;
  font-weight: 500;
}
.updateStatus:hover label {
  color: rgb(0, 255, 0);
  font-weight: 600;
}
.updateStatus {
  display: flex;
  align-items: center;
}
.check-status {
  accent-color: #9d3039;
  height: 18px;
  width: 18px;
  cursor: pointer;
}
</style>
