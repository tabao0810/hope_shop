<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-lg-12">
        <div class="blog__icon-link">
          <router-link to="/thehome" class="blog__icon-text"
            ><i class="fa fa-home px-1"></i>home</router-link
          >
          <span class="blog__icon-text-active">SALE</span>
        </div>
      </div>
    </div>
  </div>
  <div class="container blog-content col-12">
    <div class="row">
      <div class="col-lg-3">
        <div class="catagory_price_color">
          <div class="catagory_area">
            <h2>collection</h2>
            <tab-product
              :tabs="['Tất cả', 'Quần áo', 'Phụ kiện', 'Túi xách', 'Giày']"
              :selected="selected"
              @selected="setSelected"
            ></tab-product>
          </div>
        </div>
        <div class="add_r_sidebar">
          <p class="banner_block">
            <a>
              <img
                class="sidebar-image"
                src="https://webmuasam.com.vn/data/files/Ma%20giam%20gia/deal_coupons-28-01-2021-v1mpue.png"
                alt=""
              />
            </a>
          </p>
        </div>
        <div class="add_r_sidebar">
          <p class="banner_block">
            <a>
              <img
                class="sidebar-image"
                src="http://file.hstatic.net/1000003969/collection/kv_sale_kho_qua_doc_700x1010_final_d4cd552dbefe4ae681dd58fb8bfaad58.jpg"
                alt=""
              />
            </a>
          </p>
        </div>
      </div>
      <div class="col-lg-9">
        <the-product :isSelected="selected === 'Tất cả'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a style="cursor: default">
                      <img
                        src="https://file.hstatic.net/1000003969/file/d3f0a7eb-8dd3-451f-9970-b9de7ce0134f_8279224c5331452abde49137bc8627e4.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="product-router-item">
            <div class="fea-list row">
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getSale"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCountSale > 1"
              :page-count="getPaginationCountSale"
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
        </the-product>
        <the-product :isSelected="selected === 'Quần áo'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a style="cursor: default">
                      <img
                        src="https://img.freepik.com/free-vector/black-friday-sale-banner-with-limited-time-offer-details_1017-28051.jpg?w=2000"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="product-router-item">
            <div class="fea-list row">
              <div v-if="getSaleClothing.length === 0" style="width: 100%">
                <h3>Hiện chưa có sản phẩm nào</h3>
                <img
                  :src="img_svg"
                  alt=""
                  style="width: 50%; margin: auto; display: block"
                />
              </div>
              <div
                v-else
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getSaleClothing"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCountSaleClothing > 1"
              :page-count="getPaginationCountSaleClothing"
              :page-range="2"
              :margin-pages="2"
              :click-handler="clickCallbackClothing"
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
            <div v-else></div>
          </div> </the-product
        ><the-product :isSelected="selected === 'Phụ kiện'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a style="cursor: default">
                      <img
                        src="https://img.lovepik.com/photo/45000/2166.jpg_wh300.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="product-router-item">
            <div class="fea-list row">
              <div v-if="getSaleAccessory.length === 0" style="width: 100%">
                <h3>Hiện chưa có sản phẩm nào</h3>
                <img
                  :src="img_svg"
                  alt=""
                  style="width: 50%; margin: auto; display: block"
                />
              </div>
              <div
                v-else
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getSaleAccessory"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCountSaleAccessory > 1"
              :page-count="getPaginationCountSaleAccessory"
              :page-range="2"
              :margin-pages="2"
              :click-handler="clickCallbackAccessory"
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
            <div v-else></div>
          </div>
        </the-product>
        <the-product :isSelected="selected === 'Túi xách'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a style="cursor: default">
                      <img
                        src="https://cdn.chanhtuoi.com/uploads/2016/07/juno.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="product-router-item">
            <div class="fea-list row">
              <div v-if="getSaleBag.length === 0" style="width: 100%">
                <h3>Hiện chưa có sản phẩm nào</h3>
                <img
                  :src="img_svg"
                  alt=""
                  style="width: 50%; margin: auto; display: block"
                />
              </div>
              <div
                v-else
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getSaleBag"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCountSaleBag > 1"
              :page-count="getPaginationCountSaleBag"
              :page-range="2"
              :margin-pages="2"
              :click-handler="clickCallbackBag"
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
            <div v-else></div>
          </div>
        </the-product>
        <the-product :isSelected="selected === 'Giày'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a style="cursor: default">
                      <img
                        src="https://laruki.com/wp-content/uploads/2019/08/juno-running-sale.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="product-router-item">
            <div class="fea-list row">
              <div v-if="getSaleShoe.length === 0" style="width: 100%">
                <h3>Hiện chưa có sản phẩm nào</h3>
                <img
                  :src="img_svg"
                  alt=""
                  style="width: 50%; margin: auto; display: block"
                />
              </div>
              <div
                v-else
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getSaleShoe"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCountSaleShoe > 1"
              :page-count="getPaginationCountSaleShoe"
              :page-range="2"
              :margin-pages="2"
              :click-handler="clickCallbackShoe"
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
            <div v-else></div>
          </div>
        </the-product>
      </div>
    </div>
  </div>
</template>

<script>
import error from "../../public/image/error.svg";
import TabProduct from "./TabProduct.vue";
import TheProduct from "./TheProduct.vue";
import Paginate from "vuejs-paginate-next";
import FeaturedItem from "../components/FeaturedItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    store.dispatch("products/getAllProductsAction");
    const featuredList = computed(() => store.state.products.productList);
    const productListSale = computed(
      () => store.getters["products/productListSale"]
    );
    const productListShoe = computed(
      () => store.getters["products/productListShoe"]
    );
    const productListSaleClothing = computed(
      () => store.getters["products/productListSaleClothing"]
    );
    const productListSaleAccessory = computed(
      () => store.getters["products/productListSaleAccessory"]
    );
    const productListSaleBag = computed(
      () => store.getters["products/productListSaleBag"]
    );
    const productListSaleShoe = computed(
      () => store.getters["products/productListSaleShoe"]
    );
    return {
      featuredList,
      productListSale,
      productListShoe,
      productListSaleClothing,
      productListSaleAccessory,
      productListSaleBag,
      productListSaleShoe,
    };
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 9,
      selected: "Tất cả",
      selectedcolor: "",
      img_svg: error,
    };
  },
  components: {
    FeaturedItem,
    Paginate,
    TabProduct,
    TheProduct,
  },
  computed: {
    getSale() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListSale.slice(start, end);
    },
    getSaleClothing() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListSaleClothing.slice(start, end);
    },
    getSaleAccessory() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListSaleAccessory.slice(start, end);
    },
    getSaleBag() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListSaleBag.slice(start, end);
    },
    getSaleShoe() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListSaleShoe.slice(start, end);
    },
    getShoe() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListShoe.slice(start, end);
    },
    getPaginationCountSale() {
      return Math.ceil(this.productListSale.length / this.perPage);
    },
    getPaginationCountSaleClothing() {
      return Math.ceil(this.productListSaleClothing.length / this.perPage);
    },
    getPaginationCountSaleAccessory() {
      return Math.ceil(this.productListSaleAccessory.length / this.perPage);
    },
    getPaginationCountSaleBag() {
      return Math.ceil(this.productListSaleBag.length / this.perPage);
    },
    getPaginationCountSaleShoe() {
      return Math.ceil(this.productListSaleShoe.length / this.perPage);
    },
    getPaginationCountShoe() {
      return Math.ceil(this.productListShoe.length / this.perPage);
    },
  },
  created() {
    this.productListSale.map((item) => {
      this.items.push(item);
    });
    this.productListSaleClothing.map((item) => {
      this.items.push(item);
    });
    this.productListSaleAccessory.map((item) => {
      this.items.push(item);
    });
    this.productListShoe.map((item) => {
      this.items.push(item);
    });
  },
  methods: {
    clickCallback(pagenum) {
      this.currentPage = Number(pagenum);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    clickCallbackClothing(pagenum) {
      this.currentPage = Number(pagenum);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    clickCallbackAccessory(pagenum) {
      this.currentPage = Number(pagenum);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    clickCallbackBag(pagenum) {
      this.currentPage = Number(pagenum);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    clickCallbackShoe(pagenum) {
      this.currentPage = Number(pagenum);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    setSelected(tab) {
      this.selected = tab;
    },
  },
};
</script>

<style>
.left-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.collection-p-title {
  position: relative;
  margin-top: 20px;
}
.left-title > span {
  font-size: 30px;
  font-weight: 550;
}
.left-title > a {
  color: #ff343b;
  font-size: 15px;
  font-weight: 600;
  display: block;
}
.collection-p-title::after {
  content: "";
  position: absolute;
  border-bottom: 0.5px solid #ccc;
  top: 45px;
  width: 100%;
  left: 0;
}
.collection-item {
  max-height: 460px;
  overflow: hidden;
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .collection-item {
    max-height: 920px;
    overflow: hidden;
  }
}
@media (max-width: 767.98px) {
  .collection-item {
    max-height: 1780px;
    overflow: hidden;
  }
  .left-title > span {
    font-size: 24px;
    font-weight: 550;
  }
  .left-title > a {
    color: #ff343b;
    font-size: 10px;
    font-weight: 600;
  }
  .collection-p-title::after {
    content: "";
    position: absolute;
    border-bottom: 0.5px solid #ccc;
    top: 32px;
    width: 100%;
    left: 0;
  }
}
</style>
