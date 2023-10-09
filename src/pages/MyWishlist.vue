<template>
  <div class="container">
    <div class="row" v-if="wishlist.length > 0">
      <div class="blog__icon col-12">
        <div class="blog__icon-link">
          <router-link to="/" class="blog__icon-text">home</router-link>
          <span class="blog__icon-text-active">FAVORITE</span>
        </div>
      </div>

      <div
        class="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6"
        v-for="_product in getItems"
        :key="_product.id"
      >
        <featured-item
          :productDetail="_product"
          :Loading="false"
          :wish="true"
        />
      </div>
      <hr />
      <div class="pagination shop_paginatin">
        <paginate
          v-if="getPaginationCount > 1"
          :page-count="getPaginationCount"
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
    <div class="wishlist_empty" v-else>
      <h3 class="wishlist_empty-text">Empty Your Wishlist!!</h3>
      <img :src="img_svg" alt="" />
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
import wishlistSVG from "../../public/image/wishlist.gif";
import Paginate from "vuejs-paginate-next";
import FeaturedItem from "@/components/FeaturedItem.vue";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
export default {
  components: {
    Paginate,
    FeaturedItem,
  },
  setup() {
    const store = useStore();
    const items = ref([]);
    const currentPage = ref(1);
    const perPage = ref(6);
    const img_svg = ref(wishlistSVG);
    const wishlist = computed(() => store.state.user.userWishes);
    onMounted(() => {
      wishlist.value.map((item) => {
        items.value.push(item);
      });
    });
    const getItems = computed(() => {
      let start = (currentPage.value - 1) * perPage.value;
      let end = currentPage.value * perPage.value;
      return wishlist.value.slice(start, end);
    });
    const getPaginationCount = computed(() => {
      return Math.ceil(wishlist.value.length / perPage.value);
    });
    const handleDeleteWish = (data) => {
      store.dispatch("user/removeWishAction", data);
    };
    const handleBuy = (data) => {
      store.dispatch("user/addCartAction", data);
    };
    const clickCallback = (pagenum) => {
      currentPage.value = Number(pagenum);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    };
    return {
      wishlist,
      items,
      currentPage,
      perPage,
      img_svg,
      getItems,
      getPaginationCount,
      handleDeleteWish,
      handleBuy,
      clickCallback,
    };
  },
};
</script>

<style>
.page-link {
  z-index: 1;
  color: #666;
  background-color: #fff;
  border-color: #ddd;
  outline: none;
}
.page-link:hover {
  background-color: #ff343b;
  color: #fff;
  transition: all linear 0.3s;
  outline: none;
}
.page-item.active .page-link {
  background-color: #ff343b;
  border-color: #ff343b;
  color: #fff;
}
.page-link:focus {
  box-shadow: none;
}
.pagination {
  display: flex;
  margin: 10px 0;
}
</style>
