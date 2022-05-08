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
              :tabs="['Tất cả', 'Sản phẩm 290k', 'Sản phẩm 400k']"
              :selected="selected"
              @selected="setSelected"
            ></tab-product>
          </div>
        </div>
        <div class="add_r_sidebar">
          <p class="banner_block">
            <a href="">
              <img
                class="sidebar-image"
                src="https://webmuasam.com.vn/data/files/Ma%20giam%20gia/deal_coupons-28-01-2021-v1mpue.png"
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
                    <a href="">
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
        <the-product :isSelected="selected === 'Sản phẩm 290k'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a href="">
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
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getSaleMin"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              :page-count="getPaginationCountSaleMin"
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
          </div> </the-product
        ><the-product :isSelected="selected === 'Sản phẩm 400k'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a href="">
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
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getSaleMax"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              :page-count="getPaginationCountSaleMax"
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
      </div>
    </div>
  </div>
</template>

<script>
import TabProduct from "./TabProduct.vue";
import TheProduct from "./TheProduct.vue";
import Paginate from "vuejs-paginate-next";
import FeaturedItem from "../components/FeaturedItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapGetters, mapActions } =
  createNamespacedHelpers("products");
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 9,
      selected: "Tất cả",
      selectedcolor: "",
    };
  },
  components: {
    FeaturedItem,
    Paginate,
    TabProduct,
    TheProduct,
  },
  computed: {
    ...mapState({
      featuredList: (state) => state.productList,
    }),
    ...mapGetters({
      productListSale: "productListSale",
      productListSaleMin: "productListSaleMin",
      productListSaleMax: "productListSaleMax",
      productListShoe: "productListShoe",
    }),
    getSale() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListSale.slice(start, end);
    },
    getSaleMin() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListSaleMin.slice(start, end);
    },
    getSaleMax() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListSaleMax.slice(start, end);
    },
    getShoe() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListShoe.slice(start, end);
    },
    getPaginationCountSale() {
      return Math.ceil(this.productListSale.length / this.perPage);
    },
    getPaginationCountSaleMin() {
      return Math.ceil(this.productListSaleMin.length / this.perPage);
    },
    getPaginationCountSaleMax() {
      return Math.ceil(this.productListSaleMax.length / this.perPage);
    },
    getPaginationCountShoe() {
      return Math.ceil(this.productListShoe.length / this.perPage);
    },
  },
  created() {
    this.productListSale.map((item) => {
      this.items.push(item);
    });
    this.productListSaleMin.map((item) => {
      this.items.push(item);
    });
    this.productListSaleMax.map((item) => {
      this.items.push(item);
    });
    this.productListShoe.map((item) => {
      this.items.push(item);
    });
    this.getAllProduct();
  },
  methods: {
    ...mapActions({
      getAllProduct: "getAllProductsAction",
    }),
    clickCallback(pagenum) {
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
