<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-lg-12">
        <div class="blog__icon-link">
          <router-link to="/thehome" class="blog__icon-text"
            ><i class="fa fa-home px-1"></i>home</router-link
          >
          <span class="blog__icon-text-active">{{ productDetail.name }}</span>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-5">
        <img
          :src="productDetail.image"
          alt=""
          class="product-detail-image"
          loading="lazy"
          v-show="!isLoading"
        /><image-skeleton v-if="isLoading" />
      </div>
      <div class="product-detail col-lg-7">
        <h2 class="product-heading">
          {{ productDetail.name }}
        </h2>
        <!-- <h6 class="card-title small text-warning">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </h6> -->
        <hr />
        <h6>
          Tình trạng:<span style="color: red" v-if="productDetail.quantity > 0"
            >Còn hàng ({{ productDetail.quantity }} sản phẩm)</span
          ><span style="color: red" v-else>Hết hàng</span>
        </h6>
        <div class="d-flex align-items-center">
          <p class="product-detail-price">
            {{ formatPriceDetailNew(productDetail) }}
          </p>
          <p
            v-if="productDetail.isSale == true"
            class="product-detail-price-sale m-0 pl-2"
          >
            {{ formatDetailOldPrice(productDetail.price) }}
          </p>
        </div>
        <div>
          <div class="product-detail-des">
            {{ productDetail.description }}
          </div>
        </div>
        <div class="product-detail-option">
          <div class="product-detail">
            <div v-if="productDetail.sizeClothing" class="selectSize">
              <p>Size:</p>
              <div
                v-for="(size, index) in productDetail.sizesClothing"
                :key="index"
              >
                <input
                  class="checkbox-tools"
                  type="radio"
                  name="tools"
                  :id="size"
                  :value="size"
                  v-model="productDetail.sizeClothing"
                />
                <label class="for-checkbox-tools" :for="size">
                  {{ size }}
                </label>
              </div>
            </div>
            <div v-else></div>
          </div>
          <div class="product-detail">
            <div v-if="productDetail.sizeShoe" class="selectSize">
              <p>Size:</p>
              <div
                v-for="(sizeShoe, index) in productDetail.sizesShoe"
                :key="index"
              >
                <input
                  class="checkbox-tools"
                  type="radio"
                  name="tools"
                  :id="sizeShoe"
                  :value="sizeShoe"
                  v-model="productDetail.sizeShoe"
                />
                <label class="for-checkbox-tools" :for="sizeShoe">
                  {{ sizeShoe }}
                </label>
              </div>
            </div>
            <div v-else></div>
          </div>
          <div class="product-detail">
            <div v-if="productDetail.color" class="selectColor">
              <p style="margin: 0; font-size: 20px; font-weight: 500">
                Màu sắc:
              </p>
              <div class="selectColor-pick">
                <div
                  v-for="(color, index) in productDetail.colors"
                  :key="index"
                >
                  <input
                    class="pickColor"
                    type="radio"
                    name="color"
                    :id="color"
                    :value="color"
                    v-model="productDetail.color"
                  />
                  <label class="pickColorLabel" :for="color"
                    ><span :class="color"></span
                  ></label>
                </div>
              </div>
            </div>
            <div v-else></div>
          </div>
          <div class="product-detail mt-3"></div>
          <div class="product-detail mt-3">
            <label for="">Số lượng</label>
            <input
              type="number"
              style="outline: none; padding: 4px 10px; width: 200px"
              v-model="productDetail.amount"
              min="1"
              :max="productDetail.quantity"
            />
          </div>
          <div class="product-detail-button">
            <button
              @click="handleBuy(productDetail)"
              :disabled="productDetail.quantity === 0"
            >
              <span style="font-size: 14px">MUA NGAY</span>
            </button>
            <button @click="handleWishList(productDetail)">
              <i class="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <tab-nav
          :tabs="['Cửa hàng', 'Thông tin sản phẩm', 'Đánh giá sản phẩm']"
          :selected="selected"
          @selected="setSelected"
        >
        </tab-nav>
        <the-tab :isSelected="selected === 'Cửa hàng'">
          <div class="tab-pane">
            <table width="100%">
              <tr>
                <td align="left">Tên sản phẩm</td>
                <td align="left">
                  {{ productDetail.name }}
                </td>
              </tr>
              <tr>
                <td align="left">Cửa hàng</td>
                <td align="left">Hope</td>
              </tr>
            </table>
          </div>
        </the-tab>
        <the-tab :isSelected="selected === 'Thông tin sản phẩm'">
          <div class="tab-pane">
            <pre>{{ productDetail.description }}</pre>
          </div>
        </the-tab>
        <the-tab :isSelected="selected === 'Đánh giá sản phẩm'">
          <div class="tab-pane text-center">
            <h4>Customer Reviews</h4>
            <img :src="img_svg" style="width: 50%" alt="" />
          </div>
        </the-tab>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-12" v-if="productDetail.typeProduct === 'Quần áo'">
        <h1 class="blog__heading">Sản phẩm tương tự</h1>
        <div class="product-slide">
          <swiper
            :slidesPerView="setCount"
            :spaceBetween="20"
            :slidesPerGroup="1"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
              clickable: true,
            }"
            :navigation="{
              nextEl: '.blog-button-next',
              prevEl: '.blog-button-prev',
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              v-for="product in productListClothing"
              :key="product.id"
            >
              <related-product :productItem="product" />
            </swiper-slide>
          </swiper>
          <div class="product-btn">
            <a class="blog-button-prev"
              ><i class="fa-solid fa-arrow-left-long blog-icon-left"></i>
            </a>

            <a class="blog-button-next">
              <i class="fa-solid fa-arrow-right-long blog-icon-right"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="col-lg-12" v-if="productDetail.typeProduct === 'Phụ kiện'">
        <h1 class="blog__heading">Sản phẩm tương tự</h1>
        <div class="product-slide">
          <swiper
            :slidesPerView="setCount"
            :spaceBetween="20"
            :slidesPerGroup="1"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
              clickable: true,
            }"
            :navigation="{
              nextEl: '.blog-button-next',
              prevEl: '.blog-button-prev',
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              v-for="product in productListAccessory"
              :key="product.id"
            >
              <related-product :productItem="product" />
            </swiper-slide>
          </swiper>
          <div class="product-btn">
            <a class="blog-button-prev"
              ><i class="fa-solid fa-arrow-left-long blog-icon-left"></i>
            </a>

            <a class="blog-button-next">
              <i class="fa-solid fa-arrow-right-long blog-icon-right"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="col-lg-12" v-if="productDetail.typeProduct === 'Túi'">
        <h1 class="blog__heading">Sản phẩm tương tự</h1>
        <div class="product-slide">
          <swiper
            :slidesPerView="setCount"
            :spaceBetween="20"
            :slidesPerGroup="1"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
              clickable: true,
            }"
            :navigation="{
              nextEl: '.blog-button-next',
              prevEl: '.blog-button-prev',
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="product in productListBag" :key="product.id">
              <related-product :productItem="product" />
            </swiper-slide>
          </swiper>
          <div class="product-btn">
            <a class="blog-button-prev"
              ><i class="fa-solid fa-arrow-left-long blog-icon-left"></i>
            </a>

            <a class="blog-button-next">
              <i class="fa-solid fa-arrow-right-long blog-icon-right"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="col-lg-12" v-if="productDetail.typeProduct === 'Giày'">
        <h1 class="blog__heading">Sản phẩm tương tự</h1>
        <div class="product-slide">
          <swiper
            :slidesPerView="setCount"
            :spaceBetween="20"
            :slidesPerGroup="1"
            :loop="true"
            :loopFillGroupWithBlank="true"
            :pagination="{
              clickable: true,
            }"
            :navigation="{
              nextEl: '.blog-button-next',
              prevEl: '.blog-button-prev',
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="product in productListShoe" :key="product.id">
              <related-product :productItem="product" />
            </swiper-slide>
          </swiper>
          <div class="product-btn">
            <a class="blog-button-prev"
              ><i class="fa-solid fa-arrow-left-long blog-icon-left"></i>
            </a>

            <a class="blog-button-next">
              <i class="fa-solid fa-arrow-right-long blog-icon-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import theReview from "../../public/image/reviews.svg";
import TabNav from "./TabNav.vue";
import TheTab from "./TheTab.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import RelatedProduct from "../components/RelatedProduct.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";
import ImageSkeleton from "@/components/loading/ImageSkeleton.vue";
export default {
  data() {
    return {
      selected: "Cửa hàng",
      img_svg: theReview,
    };
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const isLoading = ref(true);
    const EndTimeLoading = () => {
      isLoading.value = false;
    };
    store.dispatch("products/getSingleProductsAction", {
      id: route.params.productId,
      loading: EndTimeLoading,
    });
    watch(route, (to) => {
      if (to.params.productId) {
        store.dispatch("products/getSingleProductsAction", {
          id: to.params.productId,
          loading: EndTimeLoading,
        });
      }
    });
    store.dispatch("products/getAllProductsAction");
    const productDetail = computed(() => store.state.products.productDetail);
    const productListClothing = computed(
      () => store.getters["products/productListClothing"]
    );
    const productListAccessory = computed(
      () => store.getters["products/productListAccessory"]
    );
    const productListBag = computed(
      () => store.getters["products/productListBag"]
    );
    const productListShoe = computed(
      () => store.getters["products/productListShoe"]
    );
    const handleWishList = (data) => {
      store.dispatch("user/addWishListAction", data);
    };
    return {
      modules: [Pagination, Navigation],
      productDetail,
      productListClothing,
      productListAccessory,
      productListBag,
      productListShoe,
      isLoading,
      handleWishList,
      EndTimeLoading,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    RelatedProduct,
    TabNav,
    TheTab,
    ImageSkeleton,
  },
  computed: {
    setCount() {
      let x = screen.width;
      let count;
      if (x < 719) {
        count = 1;
      } else if (x > 1024) {
        count = 4;
      } else {
        count = 2;
      }
      return count;
    },
  },
  methods: {
    formatPriceDetailNew(a) {
      if (a.isSale === false) {
        return a.price.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        });
      } else {
        return (a.price - a.price * (a.sale / 100)).toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        });
      }
    },
    formatDetailOldPrice(x) {
      return x.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
    },
    setSelected(tab) {
      this.selected = tab;
    },
    handleBuy(pro) {
      this.$store.dispatch("user/addCartAction", pro);
      this.$router.push("/my-cart");
    },
    handleToDetail(a) {
      this.$router.push(`/product-detail/${a}`);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
  },
  created() {},
};
</script>

<style>
.product-detail {
  text-align: left;
}
.product-detail-image {
  width: 100%;
}
.product-detail-price {
  font-size: 26px;
  color: #ff343b;
  font-weight: 500;
  margin-bottom: 0;
}
.product-detail-price-sale {
  font-size: 18px;
  text-decoration: line-through;
  color: #8f8f8f;
}
.product-detail-option {
  background: #f4f9ea none repeat scroll 0 0;
  border: 1px solid #dddddd;
  padding: 24px;
  border-radius: 8px;
}
.product-detail > label {
  display: inline-block;
  width: 100%;
}
.product-detail > select {
  display: block;
  width: 100%;
  background: #fff none repeat scroll 0 0;
  padding: 8px 10px;
  outline: none;
}
.product-detail-button > button {
  display: block;
  min-width: 180px;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #fff;
  border: black 1px solid;
  cursor: pointer;
}
.product-detail-button > button:hover {
  color: #ff343b;
  border: #ff343b 1px solid;
  transition: all 0.3s linear;
}
.tablist {
  text-align: left;
  margin: 0;
  padding: 0;
}
.tablist li {
  margin-left: 4px;
  list-style: none;
  display: inline-flex;
  color: #ccc;
  margin-top: 4px;
}
.tablist li a {
  text-transform: uppercase;
  padding: 8px 10px;
  border: 2px solid #ccc;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}
.tablist li.active a {
  color: #222222;
  border: 2px solid #222222;
  transition: all linear 0.5s;
}
.tablist li.active a:hover {
  color: #222222;
}

.tab-content {
  margin-top: 30px;
  width: 100%;
  background-color: #f3f3f3;
}
.tab-pane {
  padding: 30px;
  width: 100%;
  background-color: #e5e5e5;
  text-align: left;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.tab-pane td {
  background: #fff none repeat scroll 0 0;
  border: 1px solid #e5e5e5;
  color: #222;
  height: 42px;
  padding-left: 11px;
  text-transform: capitalize;
}
.tab-pane > p {
  text-align: left;
  width: 100%;
  text-align: justify;
}
</style>
<style scoped>
:root {
  --white: #ffffff;
  --light: #f0eff3;
  --black: #000000;
  --dark-blue: #1f2029;
  --dark-light: #353746;
  --red: #da2c4d;
  --yellow: #f8ab37;
  --grey: #ecedf3;
}
.product-slide {
  position: relative;
}
@keyframes blogList {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.product-btn {
  width: 100%;
  display: none;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  animation: blogList linear 0.4s;
}
.product-slide:hover .product-btn {
  display: flex;
}
.blog-button-prev {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
  position: relative;
  left: -25px;
}
.blog-icon-left {
  transform: rotate(-45deg);
  position: absolute;
  top: 7px;
  right: 7px;
}
.blog-icon-left::before {
  font-size: 30px;
}
.blog-button-next {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
  position: relative;
  left: -7px;
}
.blog-icon-right {
  transform: rotate(-45deg);
  position: absolute;
  bottom: 8px;
  left: 10px;
}
.blog-icon-right::before {
  font-size: 30px;
}
.blog-button-prev:hover {
  width: 50px;
  height: 50px;
  background-color: #333;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
  cursor: pointer;
}
.blog-button-prev:hover .blog-icon-left {
  color: #fff;
}
.blog-button-next:hover {
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: #333;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
}
.blog-button-next:hover .blog-icon-right {
  color: #fff;
}
.selectSize {
  display: flex;
  align-items: center;
}
.selectSize > p {
  font-size: 20px;
  font-weight: 500;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  visibility: hidden;
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label {
  position: relative;
  display: inline-block;
  padding: 6px;
  min-width: 50px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  text-transform: uppercase;
  color: var(--white);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  font-weight: bold;
}
.checkbox-tools:not(:checked) + label {
  background-color: #353746;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-tools:checked + label {
  background-color: #dc3545;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:not(:checked) + label:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-image: linear-gradient(90deg, #f86983, var(--red));
  z-index: -1;
}
.selectColor {
  display: flex;
  align-items: center;
}
.selectColor-pick {
  display: flex;
  margin-left: 10px;
}
@media (max-width: 580px) {
  .blog__heading {
    font-size: 28px;
  }
}
</style>
<style lang="scss" scoped>
$colors: (
  red: #ff343b,
  blue: #2185d0,
  pink: #e03997,
  black: black,
  gray: gray,
  white: white,
);

.pickColor {
  display: none;
  &:checked + label {
    span {
      transform: scale(1.25);
    }
    @each $name, $value in $colors {
      .#{$name} {
        border: 2px solid darken($value, 100%);
      }
    }
  }
}

.pickColorLabel {
  display: inline-block;
  width: 30px;
  height: 30px;

  margin-right: 10px;
  cursor: pointer;
  &:hover {
    span {
      transform: scale(1.25);
    }
  }
  span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
    @each $name, $value in $colors {
      &.#{$name} {
        background: $value;
      }
    }
  }
}
.product-detail-des {
  width: 100%;
  text-align: justify;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 10px 0px;
  white-space: pre-line;
}
</style>
