<template>
  <div class="container">
    <div v-if="isLoading">
      <loading-page></loading-page>
    </div>
    <div v-else>
      <div class="row">
        <div class="blog__icon col-12">
          <div class="blog__icon-link">
            <router-link to="/" class="blog__icon-text">home</router-link>
            <span class="blog__icon-text-active">SEARCH</span>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12"
          v-for="_product in getSearch"
          :key="_product.id"
        >
          <featured-item :productDetail="_product" :Loading="isLoading" />
        </div>
        <div class="pagination search-pagination">
          <paginate
            v-if="getPaginationCountSearch > 1"
            :page-count="getPaginationCountSearch"
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
      <div v-if="productList.length == 0">
        <h4>Không tìm thấy sản phẩm bạn yêu cầu</h4>
      </div>
    </div>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";
import { useStore } from "vuex";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import FeaturedItem from "@/components/FeaturedItem.vue";
import LoadingPage from "@/components/loading/LoadingPage.vue";
export default {
  components: {
    Paginate,
    FeaturedItem,
    LoadingPage,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const isLoading = ref(true);
    const items = ref([]);
    const currentPage = ref(1);
    const perPage = ref(6);
    const EndTimeLoading = () => {
      isLoading.value = false;
    };
    onMounted(async () => {
      await store.dispatch("products/searchNameAction", {
        route: route.params.title,
        loading: EndTimeLoading,
      });
      await productList.value.map((item) => {
        items.value.push(item);
      });
    });

    watch(route, (to) => {
      isLoading.value = true;
      store.dispatch("products/searchNameAction", {
        route: to.params.title,
        loading: EndTimeLoading,
      });
    });
    const productList = computed(() => store.state.products.productList);
    const getSearch = computed(() => {
      let start = (currentPage.value - 1) * perPage.value;
      let end = currentPage.value * perPage.value;
      return productList.value.slice(start, end);
    });
    const getPaginationCountSearch = computed(() => {
      return Math.ceil(productList.value.length / perPage.value);
    });
    const clickCallback = (pagenum) => {
      currentPage.value = Number(pagenum);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    };
    return {
      productList,
      isLoading,
      EndTimeLoading,
      clickCallback,
      items,
      currentPage,
      perPage,
      getPaginationCountSearch,
      getSearch,
    };
  },
};
</script>

<style>
.search-pagination {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
</style>
