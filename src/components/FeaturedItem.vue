<template>
  <div class="single_product">
    <router-link
      :to="`/products/${typePackages[productDetail.typeProduct]}/${
        productDetail._id
      }`"
      class="product_overlay"
    >
      <LoadingImageSkeleton v-if="Loading" style="min-height: 250px" />
      <img
        class=""
        :src="productDetail.image"
        alt=""
        loading="lazy"
        @load="Loading == false"
        v-show="!Loading"
        v-else
      />
    </router-link>
    <div class="sale_product" v-if="productDetail.isSale" v-show="!Loading">
      <h5>Sale</h5>
    </div>
    <div class="product_feature">
      <div class="product_feature-detail">
        <button @click="handleWishList(productDetail)" v-if="!wish">
          <i class="fa fa-heart"></i>
        </button>
        <button @click="handleDeleteWish(productDetail._id)" v-else>
          <i class="fa fa-heart" style="color: red"></i>
        </button>
      </div>
      <div class="product_feature-detail">
        <button
          @click="handleBuy(productDetail)"
          :disabled="productDetail.quantity === 0"
        >
          THÊM VÀO GIỎ HÀNG
        </button>
      </div>
    </div>
    <div>
      <LoadingImageSkeleton
        v-if="Loading"
        style="min-height: 50px; margin-top: -20px"
      />
      <div class="product_detail" v-else>
        <h2>
          <router-link
            :to="`/products/${typePackages[productDetail.typeProduct]}/${
              productDetail._id
            }`"
            >{{ productDetail.name }}</router-link
          >
        </h2>
        <p>
          <span v-if="productDetail.isSale">
            <span class="product_price">
              {{ oldPrice }}
            </span>
            <span class="product_price_sale"> {{ newPrice }}</span>
          </span>
          <span class="product_price" v-else>
            {{ newPrice }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import LoadingImageSkeleton from "@/components/loading/ImageSkeleton.vue";
import { typePackages } from "@/utils/type-product";
import { usePrice } from "@/composables/price";

export default {
  props: {
    productDetail: {
      type: Object,
    },
    Loading: {
      type: Boolean,
    },
    wish: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LoadingImageSkeleton,
  },
  setup(props) {
    const store = useStore();
    const { newPrice, oldPrice } = usePrice(
      props.productDetail.price,
      props.productDetail.sale
    );
    const handleBuy = (data) => {
      store.dispatch("user/addCartAction", data);
    };
    const handleWishList = (data) => {
      store.dispatch("user/addWishListAction", data);
    };
    const handleDeleteWish = (data) => {
      store.dispatch("user/removeWishAction", data);
    };
    return {
      handleBuy,
      handleWishList,
      typePackages,
      handleDeleteWish,
      newPrice,
      oldPrice,
    };
  },
};
</script>
