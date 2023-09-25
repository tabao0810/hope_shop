<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-12">
        <div class="blog__icon-link">
          <router-link to="/" class="blog__icon-text">home</router-link>
          <span class="blog__icon-text-active">SALE</span>
        </div>
      </div>
      <div class="col-lg-3">
        <sidebar-sale
          :routes="route_sale"
          :images="image_sale"
          :title="'Sale'"
        />
      </div>
      <div class="col-lg-9">
        <menu-extend :routes="route_sale">
          <div style="width: 100%"></div>
        </menu-extend>
        <div class="product-router-item" v-if="getSale?.length">
          <div class="fea-list row">
            <div
              class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
              v-for="_product in getSale"
              :key="_product.id"
            >
              <featured-item :productDetail="_product" :Loading="isLoading" />
            </div>
          </div>
        </div>
        <div v-else>
          <h2>Không tìm thấy sản phẩm</h2>
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
import error from "../../public/image/error.svg";

import Paginate from "vuejs-paginate-next";
import FeaturedItem from "../components/FeaturedItem.vue";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import SidebarSale from "@/components/Sidebar.vue";
import MenuExtend from "@/components/MenuExtend.vue";
import { useRoute } from "vue-router";
import { typePackages } from "@/utils/type-product";
export default {
  components: {
    FeaturedItem,
    Paginate,
    MenuExtend,
    SidebarSale,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const isLoading = ref(true);
    const currentPage = ref(1);
    const perPage = ref(9);
    const route_sale = ref([
      { route: "Tất cả", to: "/sale/all" },
      { route: "Quần áo", to: "/sale/clothes" },
      { route: "Túi xách", to: "/sale/bag" },
      { route: "Phụ kiện", to: "/sale/accessory" },
      { route: "Giày cao gót", to: "/sale/shoes" },
    ]);
    const image_sale = ref([
      {
        image:
          "https://webmuasam.com.vn/data/files/Ma%20giam%20gia/deal_coupons-28-01-2021-v1mpue.png",
      },
      {
        image:
          "http://file.hstatic.net/1000003969/collection/kv_sale_kho_qua_doc_700x1010_final_d4cd552dbefe4ae681dd58fb8bfaad58.jpg",
      },
    ]);
    const EndTimeLoading = () => {
      isLoading.value = false;
    };
    if (route.params.type === "all") {
      store.dispatch("products/getAllProductsAction", {
        loading: EndTimeLoading,
      });
    } else {
      store.dispatch("products/getRelatedProductsAction", {
        loading: EndTimeLoading,
        type: Object.keys(typePackages)[
          Object.values(typePackages).findIndex(
            (item) => item == route.params.type
          )
        ],
      });
    }
    watch(route, (to) => {
      isLoading.value = true;
      currentPage.value = 1;
      if (to.params.type === "all") {
        store.dispatch("products/getAllProductsAction", {
          loading: EndTimeLoading,
        });
      } else {
        store.dispatch("products/getRelatedProductsAction", {
          loading: EndTimeLoading,
          type: Object.keys(typePackages)[
            Object.values(typePackages).findIndex(
              (item) => item == to.params.type
            )
          ],
        });
      }
    });
    const productListSale = computed(
      () => store.getters["products/productListSale"]
    );
    const getSale = computed(() => {
      let start = (currentPage.value - 1) * perPage.value;
      let end = currentPage.value * perPage.value;
      return productListSale.value.slice(start, end);
    });
    const getPaginationCount = computed(() => {
      return Math.ceil(productListSale.value.length / perPage.value);
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
      isLoading,
      EndTimeLoading,
      productListSale,
      route_sale,
      image_sale,
      currentPage,
      perPage,
      getSale,
      getPaginationCount,
      clickCallback,
      typePackages,
    };
  },
  data() {
    return {
      items: [],
      img_svg: error,
    };
  },

  created() {
    this.productListSale.map((item) => {
      this.items.push(item);
    });
  },
};
</script>
