<template>
  <section
    class="featured-list-item"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
    <div class="list-featured">
      <div class="card text-left text-center mt-3">
        <img
          class="card-img-top pro-img"
          :src="featuredItem.image"
          alt=""
          @click.prevent="handleToDetail(featuredItem._id)"
          loading="lazy"
        />
      </div>
      <div class="sale" v-if="featuredItem.isSale">
        <div class="box-sale">
          <p class="text-sale">sale</p>
        </div>
      </div>
      <div class="card-body" v-if="isActive === true">
        <h4 class="card-title card-title_name">{{ featuredItem.name }}</h4>
        <p
          v-if="!featuredItem.isSale"
          class="card-text text-danger font-weight-bold"
        >
          {{ FormatPrice(featuredItem.price) }}
        </p>
        <p v-else class="card-text text-danger font-weight-bold">
          {{ FormatOldPrice(featuredItem.price, featuredItem.sale)
          }}<span class="oldPrice ml-1 font-weight-light">{{
            FormatPrice(featuredItem.price)
          }}</span>
        </p>
      </div>
      <div class="card-body mt-3" v-else>
        <!-- <h6 class="card-title small text-warning">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </h6> -->
        <p class="card-text feature-cart">
          <button
            class="btn mx-1 feature-btn"
            @click="handleBuy(featuredItem)"
            :disabled="featuredItem.quantity === 0"
          >
            THÊM VÀO GIỎ HÀNG
          </button>
          <!-- <button class="btn feature-btn" @click="handleOpenDetail">
            <i class="fa fa-eye"></i>
          </button> -->
          <button
            class="btn ml-1 feature-btn"
            @click="handleWishList(featuredItem)"
          >
            <i class="fa fa-heart"></i>
          </button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { FormatPrice, FormatOldPrice } from "@/utils/constant";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  props: {
    featuredItem: {
      type: Object,
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isActive = ref(true);
    const handleBuy = (data) => {
      store.dispatch("user/addCartAction", data);
    };
    const handleWishList = (data) => {
      store.dispatch("user/addWishListAction", data);
    };
    const mouseOver = () => {
      isActive.value = false;
    };
    const mouseLeave = () => {
      isActive.value = true;
    };
    const handleToDetail = (_id) => {
      router.push(`/product-detail/${_id}`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    return {
      isActive,
      handleBuy,
      handleWishList,
      FormatPrice,
      FormatOldPrice,
      mouseOver,
      mouseLeave,
      handleToDetail,
    };
  },
};
</script>

<style scoped>
.card {
  border: none;
  position: relative;
  width: 100%;
  min-height: 320px;
  object-fit: fill;
  border-radius: 0px;
}
.list-featured:hover .card {
  border: 2px solid rgba(0, 0, 0, 0.9);
  filter: brightness(85%);
  border-radius: 0px;
}
.pro-img {
  width: 100%;
  min-height: 315px;
  transition-duration: 0.8s;
  -webkit-transition-duration: 0.8s;
  object-fit: fill;
}
/* .pro-img:hover{
    transform: scale(1.2); 
    -webkit-transform: scale(1.2);      
    cursor: pointer;     
} */
.list-featured:hover .pro-img {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  cursor: pointer;
}
.btn {
  font-size: 12px;
}
.card-body {
  width: 100%;
  height: 100%;
  /* transition-duration: 0.2s;       
    -webkit-transition-duration: 0.5s;  */
  animation: move linear 0.25s;
  position: relative;
  animation-duration: 0.25s;
  /* transition: all linear .5s;   */
}
.card-body > p {
  font-size: 18px;
}
@keyframes move {
  from {
    top: -20px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}
.sale {
  position: absolute;
  top: 8%;
  left: 8%;
}
.feature-btn {
  background-color: transparent;
  border: 1px solid #666;
  border-radius: 0;
  color: #666;
}
.feature-btn:hover {
  border: 1px solid #ff3441;
  color: #ff3441;
}
.is-sale {
  display: none;
}
.oldPrice {
  text-decoration: line-through;
  color: black;
  font-size: 14px;
}
</style>
<style>
.card-title_name {
  line-height: 24px;
  height: 24px;
  font-size: 18px;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.text-sale {
  display: block;
  transform: rotate(-45deg);
  position: absolute;
  top: 10px;
  left: -10px;
  right: 0px;
  bottom: 5px;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
}
.box-sale {
  position: absolute;
  top: 0;
  left: 10px;
  min-width: 42px;
  min-height: 42px;
  border: 2px solid black;
  border-radius: 4px;
  background: #fff;
  transform: rotate(45deg);
  text-align: center;
  z-index: 2;
  font-weight: bold;
}
@media (max-width: 767.98px) {
  .feature-cart {
    text-align: center;
  }
  .feature-btn {
    padding: 8px 10px;
  }
  .pro-img {
    height: auto;
  }
}
</style>
