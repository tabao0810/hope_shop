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
        <SidebarProduct />
      </div>
      <div class="col-lg-9">
        <div class="toolbar">
          <div class="extend_sidebar">
            <button
              class="icon_extend"
              @click.prevent="showMenuProduct = !showMenuProduct"
              v-if="!showMenuProduct"
            >
              <i class="fas fa-bars"></i>
            </button>
            <button
              class="icon_extend"
              @click.prevent="showMenuProduct = !showMenuProduct"
              v-else
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="form-horizontal">
            <label class="hidden-xs mr-1" for="SortBy">Sắp xếp:</label>
            <select name="SortBy" id="SortBy" v-model="priceSort">
              <option value="" disabled>Giá</option>
              <option value="price-ascending">Tăng dần</option>
              <option value="price-descending">Giảm dần</option>
            </select>
          </div>
        </div>
        <Transition>
          <div class="menu_extend_product" v-if="showMenuProduct">
            <ul>
              <li v-for="(item, index) in route_products" :key="index">
                <router-link :to="item.to">{{ item.route }}</router-link>
              </li>
            </ul>
          </div></Transition
        >

        <div class="product-router-item">
          <div class="fea-list row">
            <div
              class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
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
import { computed, ref, watch } from "vue";
import SidebarProduct from "@/components/SidebarProduct.vue";
import { useRoute } from "vue-router";
import { typePackages } from "@/utils/type-product";
export default {
  components: {
    FeaturedItem,
    Paginate,
    SidebarProduct,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const isLoading = ref(true);
    const currentPage = ref(1);
    const perPage = ref(9);
    const priceSort = ref("");
    const showMenuProduct = ref(false);
    const route_products = ref([
      { route: "Tất cả", to: "/products/all" },
      { route: "Quần áo", to: "/products/clothes" },
      { route: "Túi xách", to: "/products/bag" },
      { route: "Phụ kiện", to: "/products/accessory" },
      { route: "Giày cao gót", to: "/products/shoes" },
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
      showMenuProduct.value = false;
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
      getProducts,
      currentPage,
      perPage,
      priceSort,
      clickCallback,
      getPaginationCount,
      typePackages,
      route_products,
      showMenuProduct,
    };
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.listProducts.map((item) => {
      this.items.push(item);
    });
  },
};
</script>
<style lang="scss">
.toolbar {
  border-bottom: 1px solid #ddd;
  margin-bottom: 12px;
  padding-bottom: 12px;
  overflow: hidden;
  .form-horizontal {
    float: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    select {
      background: #f0f0f0 none repeat scroll 0 0;
      border: 1px solid #e5e5e5;
      border-radius: 0;
      padding: 5px 10px;
      cursor: pointer;
      outline: none;
      option {
        color: #111;
        background-color: #fff;
        padding: 50px;
      }
    }
  }
}
</style>
