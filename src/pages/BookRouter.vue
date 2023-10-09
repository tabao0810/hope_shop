<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-12">
        <div class="blog__icon-link">
          <router-link to="/" class="blog__icon-text">home</router-link>
          <span class="blog__icon-text-active">PRODUCTS</span>
        </div>
      </div>
      <div class="col-lg-3">
        <SidebarProduct
          :routes="route_products"
          :images="image_products"
          :title="'Collection'"
        />
      </div>
      <div class="col-lg-9">
        <menu-extend :routes="route_products">
          <div class="form-horizontal">
            <label class="hidden-xs mr-1" for="SortBy">Sắp xếp:</label>
            <select name="SortBy" id="SortBy" v-model="priceSort">
              <option value="" disabled>Giá</option>
              <option value="price-ascending">Tăng dần</option>
              <option value="price-descending">Giảm dần</option>
            </select>
          </div>
        </menu-extend>

        <div class="product-router-item">
          <div class="row">
            <div
              class="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6"
              v-for="_product in getProducts"
              :key="_product.id"
            >
              <featured-item :productDetail="_product" :Loading="isLoading" />
            </div>
          </div>
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
    </div>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";
import FeaturedItem from "@/components/FeaturedItem.vue";
import { useStore } from "vuex";
import { computed, onMounted, ref, watch } from "vue";
import SidebarProduct from "@/components/Sidebar.vue";
import { useRoute } from "vue-router";
import { typePackages } from "@/utils/type-product";
import MenuExtend from "@/components/MenuExtend.vue";
export default {
  components: {
    FeaturedItem,
    Paginate,
    SidebarProduct,
    MenuExtend,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const isLoading = ref(true);
    const currentPage = ref(1);
    const perPage = ref(9);
    const priceSort = ref("");
    const items = ref([]);
    const route_products = ref([
      { route: "Tất cả", to: "/products/all" },
      { route: "Quần áo", to: "/products/clothes" },
      { route: "Túi xách", to: "/products/bag" },
      { route: "Phụ kiện", to: "/products/accessory" },
      { route: "Giày cao gót", to: "/products/shoes" },
    ]);
    const image_products = ref([
      {
        image:
          "https://file.hstatic.net/1000003969/file/5_4e8bbd11e68d4e08a72d2d9b4738f03b.jpg",
      },
      {
        image:
          "https://file.hstatic.net/1000003969/file/1_bd94c2d5fef549f2ae4465bb6732fc0f.jpg",
      },
      {
        image:
          "https://file.hstatic.net/1000003969/file/3_bdbb2eb57de648dabcdb98fb58fb360d.jpg",
      },
    ]);
    const EndTimeLoading = () => {
      isLoading.value = false;
    };
    if (route.params.typeProduct === "all") {
      store.dispatch("products/getAllProductsAction", {
        loading: EndTimeLoading,
      });
    } else {
      store.dispatch("products/getRelatedProductsAction", {
        loading: EndTimeLoading,
        type: Object.keys(typePackages)[
          Object.values(typePackages).findIndex(
            (item) => item == route.params.typeProduct
          )
        ],
      });
    }

    watch(route, (to) => {
      isLoading.value = true;
      currentPage.value = 1;
      priceSort.value = "";
      if (to.params.typeProduct === "all") {
        store.dispatch("products/getAllProductsAction", {
          loading: EndTimeLoading,
        });
      } else {
        store.dispatch("products/getRelatedProductsAction", {
          loading: EndTimeLoading,
          type: Object.keys(typePackages)[
            Object.values(typePackages).findIndex(
              (item) => item == to.params.typeProduct
            )
          ],
        });
      }
    });
    const listProducts = computed(() => store.state.products.productList);
    onMounted(() => {
      listProducts.value.map((item) => {
        items.value.push(item);
      });
    });
    const getProducts = computed(() => {
      let start = (currentPage.value - 1) * perPage.value;
      let end = currentPage.value * perPage.value;
      if (priceSort.value === "price-ascending") {
        return productListSortAsc.value.slice(start, end);
      } else if (priceSort.value === "price-descending") {
        return productListSortDesc.value.slice(start, end);
      } else {
        return listProducts.value.slice(start, end);
      }
    });
    const productListSortAsc = computed(
      () => store.getters["products/productListSortAsc"]
    );
    const productListSortDesc = computed(
      () => store.getters["products/productListSortDesc"]
    );
    const getPaginationCount = computed(() => {
      return Math.ceil(listProducts.value.length / perPage.value);
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
      listProducts,
      productListSortAsc,
      productListSortDesc,
      isLoading,
      EndTimeLoading,
      items,
      getProducts,
      currentPage,
      perPage,
      priceSort,
      clickCallback,
      getPaginationCount,
      typePackages,
      route_products,
      image_products,
    };
  },
};
</script>
