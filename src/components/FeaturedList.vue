<template>
  <div class="featured-list">
    <div class="container">
      <div class="featured-header font-weight-bold">
        <h1 class="featured__heading">Nổi bật</h1>
      </div>
    </div>
    <div class="fea-list">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-6 col-sm-12 col-xs-12 col-12"
            v-for="featuredItem in featuredList"
            :key="featuredItem.id"
          >
            <featured-item :productDetail="featuredItem" :Loading="loading" />
          </div>
        </div>
      </div>
    </div>
    <div class="container col-12 mt-3">
      <button class="btn btn-loadmore mt-4 mb-5" @click="handleToShop">
        <span> Xem thêm...</span>
      </button>
    </div>
  </div>
</template>

<script>
import FeaturedItem from "./FeaturedItem.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  components: {
    FeaturedItem,
  },
  setup() {
    const store = useStore();
    const loading = ref(true);
    const EndTimeLoading = () => {
      loading.value = false;
    };
    store.dispatch("products/getAllProductsAction", {
      loading: EndTimeLoading,
    });
    const featuredList = computed(
      () => store.getters["products/productListfeatured"]
    );
    return {
      featuredList,
      loading,
    };
  },
  methods: {
    handleToShop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return this.$router.push("/products");
    },
  },
};
</script>

<style>
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  display: none;
}
.btn-loadmore {
  border-radius: 0px;
  background-color: transparent;
  border: 1px solid #ddd;
}
.btn-loadmore:hover {
  color: #ff343b;
  border: 1px solid #ff343b;
  transition: all linear 0.3s;
  outline: none;
}
.btn-loadmore > span {
  padding: 4px 10px;
}
.featured__heading::before {
  content: "";
  width: 102px;
  height: 25px;
  display: inline-block;
  background: url(https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/bkg_title.png)
    no-repeat 50% 50%;
  margin-right: 15px;
}
.featured__heading::after {
  content: "";
  width: 102px;
  height: 25px;
  display: inline-block;
  background: url(https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/bkg_title.png)
    no-repeat 50% 50%;
  margin-left: 15px;
  transform: rotate(180deg);
}
.featured__heading {
  font-weight: bold;
}
.featured-header {
  margin: 15px 0px;
}

@media (max-width: 580px) {
  .featured-list {
    padding: 0 50px;
  }
  .col-xs-12 {
    width: 100%;
  }
  .icon {
    display: none;
  }
  .btn-sign {
    display: flex;
    margin: 10px 0;
    width: 50%;
  }
  .card__title {
    position: absolute;
    font-size: 24px;
    left: 10%;
    top: 20%;
  }
  .text-sale {
    font-size: 14px;
    margin: 15px 0;
    font-weight: bold;
    top: -5px;
  }
  .header-detail {
    display: none;
  }
  .img-slide {
    height: 125px;
    width: 100%;
    object-fit: fill;
  }
  .featured__heading::after,
  .featured__heading::before {
    display: none;
  }
}
@media (min-width: 720px) and (max-width: 1024px) {
  .container {
    width: 970px;
  }
  .col-md-3 {
    width: 25%;
  }
  .modal__container {
    display: none;
  }
  .card__title {
    position: absolute;
    font-size: 36px;
    left: 10%;
    top: 30%;
  }
  .img-slide {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
}
@media (min-width: 1024px) {
  .container {
    width: 1170px;
  }
  .col-lg-3 {
    width: 25%;
  }
  .img-slide {
    height: 560px;
    width: 100%;
    object-fit: fill;
  }
  .card__title {
    position: absolute;
    font-size: 24px;
    left: 10%;
    top: 20%;
  }
}
</style>
