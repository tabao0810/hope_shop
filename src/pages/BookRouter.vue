<template>
  <div class="container">
    <div class="row">
      <div class="blog__icon col-lg-12">
        <div class="blog__icon-link">
          <router-link to="/thehome" class="blog__icon-text"
            ><i class="fa fa-home px-1"></i>home</router-link
          >
          <span class="blog__icon-text-active">PRODUCTS</span>
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
              :tabs="['Quần áo', 'Phụ kiện', 'Túi xách', 'Giày']"
              :selected="selected"
              @selected="setSelected"
            ></tab-product>
          </div>
        </div>
        <h2 class="blog__right-title-5">featured</h2>
        <div class="add_r_sidebar">
          <div class="banner_block">
            <a>
              <img
                class="sidebar-image"
                src="https://toplist.vn/images/800px/chuong-trinh-khuyen-mai-2010-cua-giay-juno-552660.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class="add_r_sidebar">
          <div class="banner_block">
            <a>
              <img
                class="sidebar-image"
                src="https://img.cdnki.com/juno-bien-hoa-khuyen-mai---d41e7cf07bb416f45943aef89115bd1d.wepb"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <the-product :isSelected="selected === 'Quần áo'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a>
                      <img
                        src="https://file.hstatic.net/1000003969/file/kv-walkfreely-ldp_166a960e7eb840da93ab012caaf3f8dd.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="toolbar">
            <div class="collection-view">
              <button
                type="button"
                title="Grid view"
                class="change-view change-view--active"
                data-view="grid"
              >
                <span class="icon-fallback-text">
                  <span class="icon_grid_view" aria-hidden="true"
                    ><i class="fa fa-th"></i
                  ></span>
                  <span class="fallback-text">Grid view</span>
                </span>
              </button>
              <router-link to="bookdetail"
                ><button
                  type="button"
                  title="List view"
                  class="change-view"
                  data-view="list"
                >
                  <span class="icon-fallback-text">
                    <span class="icon_list_view" aria-hidden="true"
                      ><i class="fa fa-th-list"></i
                    ></span>
                    <span class="fallback-text">List view</span>
                  </span>
                </button></router-link
              >
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
          <div class="product-router-item">
            <div class="fea-list row">
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getClothings"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCountClothing > 1"
              :page-count="getPaginationCountClothing"
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
        <the-product :isSelected="selected === 'Phụ kiện'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a>
                      <img
                        src="https://file.hstatic.net/1000003969/file/banner-web_them-phu-kien_-them-phong-cach_1920x400_03ec7df4907a4c6fa58458c66da8b463.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="toolbar">
            <div class="collection-view">
              <button
                type="button"
                title="Grid view"
                class="change-view change-view--active"
                data-view="grid"
              >
                <span class="icon-fallback-text">
                  <span class="icon_grid_view" aria-hidden="true"
                    ><i class="fa fa-th"></i
                  ></span>
                  <span class="fallback-text">Grid view</span>
                </span>
              </button>
              <router-link to="bookdetail"
                ><button
                  type="button"
                  title="List view"
                  class="change-view"
                  data-view="list"
                >
                  <span class="icon-fallback-text">
                    <span class="icon_list_view" aria-hidden="true"
                      ><i class="fa fa-th-list"></i
                    ></span>
                    <span class="fallback-text">List view</span>
                  </span>
                </button></router-link
              >
            </div>
            <div class="form-horizontal">
              <label class="hidden-xs mr-1" for="SortBy">Sắp xếp:</label>
              <select name="SortBy" id="SortBy" v-model="priceSortAccessory">
                <option value="" disabled>Giá</option>
                <option value="price-ascending">Tăng dần</option>
                <option value="price-descending">Giảm dần</option>
              </select>
            </div>
          </div>
          <div class="product-router-item">
            <div class="fea-list row">
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getAccessory"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCountAccesory > 1"
              :page-count="getPaginationCountAccesory"
              :page-range="2"
              :margin-pages="2"
              :click-handler="clickCallbackAcc"
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
        ><the-product :isSelected="selected === 'Túi xách'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a>
                      <img
                        src="https://fahashop.com/wp-content/uploads/2020/12/banner-sl-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="toolbar">
            <div class="collection-view">
              <button
                type="button"
                title="Grid view"
                class="change-view change-view--active"
                data-view="grid"
              >
                <span class="icon-fallback-text">
                  <span class="icon_grid_view" aria-hidden="true"
                    ><i class="fa fa-th"></i
                  ></span>
                  <span class="fallback-text">Grid view</span>
                </span>
              </button>
              <router-link to="bookdetail"
                ><button
                  type="button"
                  title="List view"
                  class="change-view"
                  data-view="list"
                >
                  <span class="icon-fallback-text">
                    <span class="icon_list_view" aria-hidden="true"
                      ><i class="fa fa-th-list"></i
                    ></span>
                    <span class="fallback-text">List view</span>
                  </span>
                </button></router-link
              >
            </div>
            <div class="form-horizontal">
              <label class="hidden-xs mr-1" for="SortBy">Sắp xếp:</label>
              <select name="SortBy" id="SortBy" v-model="priceSortBag">
                <option value="" disabled>Giá</option>
                <option value="price-ascending">Tăng dần</option>
                <option value="price-descending">Giảm dần</option>
              </select>
            </div>
          </div>
          <div class="product-router-item">
            <div class="fea-list row">
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getBag"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCountBag > 1"
              :page-count="getPaginationCountBag"
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
          </div> </the-product
        ><the-product :isSelected="selected === 'Giày'">
          <div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a>
                      <img
                        src="https://file.hstatic.net/1000003969/file/cover_986822cf61e4497ab178e92efb22f14c.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="toolbar">
            <div class="collection-view">
              <button
                type="button"
                title="Grid view"
                class="change-view change-view--active"
                data-view="grid"
              >
                <span class="icon-fallback-text">
                  <span class="icon_grid_view" aria-hidden="true"
                    ><i class="fa fa-th"></i
                  ></span>
                  <span class="fallback-text">Grid view</span>
                </span>
              </button>
              <router-link to="bookdetail"
                ><button
                  type="button"
                  title="List view"
                  class="change-view"
                  data-view="list"
                >
                  <span class="icon-fallback-text">
                    <span class="icon_list_view" aria-hidden="true"
                      ><i class="fa fa-th-list"></i
                    ></span>
                    <span class="fallback-text">List view</span>
                  </span>
                </button></router-link
              >
            </div>
            <div class="form-horizontal">
              <label class="hidden-xs mr-1" for="SortBy">Sắp xếp:</label>
              <select name="SortBy" id="SortBy" v-model="priceSortShoe">
                <option value="" disabled>Giá</option>
                <option value="price-ascending">Tăng dần</option>
                <option value="price-descending">Giảm dần</option>
              </select>
            </div>
          </div>
          <div class="product-router-item">
            <div class="fea-list row">
              <div
                class="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-12"
                v-for="featuredItem in getShoe"
                :key="featuredItem.id"
              >
                <featured-item :featuredItem="featuredItem" />
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
              v-if="getPaginationCountShoe > 1"
              :page-count="getPaginationCountShoe"
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
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    store.dispatch("products/getAllProductsAction");
    const featuredList = computed(() => store.state.products.productList);
    const productListClothing = computed(
      () => store.getters["products/productListClothing"]
    );
    const productListAccessory = computed(
      () => store.getters["products/productListAccessory"]
    );
    const productListBag = computed(
      () => store.getters["products/productListBag"]
    );
    const productListShoe = computed(
      () => store.getters["products/productListShoe"]
    );
    const productListClothingSortAsc = computed(
      () => store.getters["products/productListClothingSortAsc"]
    );
    const productListClothingSortDesc = computed(
      () => store.getters["products/productListClothingSortDesc"]
    );
    const productListAccessorySortAsc = computed(
      () => store.getters["products/productListAccessorySortAsc"]
    );
    const productListAccessorySortDesc = computed(
      () => store.getters["products/productListAccessorySortDesc"]
    );
    const productListBagSortAsc = computed(
      () => store.getters["products/productListBagSortAsc"]
    );
    const productListBagSortDesc = computed(
      () => store.getters["products/productListBagSortDesc"]
    );
    const productListShoeSortAsc = computed(
      () => store.getters["products/productListShoeSortAsc"]
    );
    const productListShoeSortDesc = computed(
      () => store.getters["products/productListShoeSortDesc"]
    );
    return {
      featuredList,
      productListClothing,
      productListAccessory,
      productListBag,
      productListShoe,
      productListClothingSortAsc,
      productListClothingSortDesc,
      productListAccessorySortAsc,
      productListAccessorySortDesc,
      productListBagSortAsc,
      productListBagSortDesc,
      productListShoeSortAsc,
      productListShoeSortDesc,
    };
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      currentPageAcc: 1,
      currentPageBag: 1,
      currentPageShoe: 1,
      perPage: 9,
      selected: "Quần áo",
      selectedcolor: "",
      priceSort: "",
      priceSortAccessory: "",
      priceSortBag: "",
      priceSortShoe: "",
    };
  },
  components: {
    FeaturedItem,
    Paginate,
    TabProduct,
    TheProduct,
  },
  computed: {
    getClothings() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      if (this.priceSort === "price-ascending") {
        return this.productListClothingSortAsc.slice(start, end);
      } else if (this.priceSort === "price-descending") {
        return this.productListClothingSortDesc.slice(start, end);
      } else {
        return this.productListClothing.slice(start, end);
      }
    },
    getAccessory() {
      let start = (this.currentPageAcc - 1) * this.perPage;
      let end = this.currentPageAcc * this.perPage;
      if (this.priceSortAccessory === "price-ascending") {
        return this.productListAccessorySortAsc.slice(start, end);
      } else if (this.priceSortAccessory === "price-descending") {
        return this.productListAccessorySortDesc.slice(start, end);
      } else {
        return this.productListAccessory.slice(start, end);
      }
    },
    getBag() {
      let start = (this.currentPageBag - 1) * this.perPage;
      let end = this.currentPageBag * this.perPage;
      if (this.priceSortBag === "price-ascending") {
        return this.productListBagSortAsc.slice(start, end);
      } else if (this.priceSortBag === "price-descending") {
        return this.productListBagSortDesc.slice(start, end);
      } else {
        return this.productListBag.slice(start, end);
      }
    },

    getShoe() {
      let start = (this.currentPageShoe - 1) * this.perPage;
      let end = this.currentPageShoe * this.perPage;
      if (this.priceSortShoe === "price-ascending") {
        return this.productListShoeSortAsc.slice(start, end);
      } else if (this.priceSortShoe === "price-descending") {
        return this.productListShoeSortDesc.slice(start, end);
      } else {
        return this.productListShoe.slice(start, end);
      }
    },
    getPaginationCountClothing() {
      return Math.ceil(this.productListClothing.length / this.perPage);
    },
    getPaginationCountAccesory() {
      return Math.ceil(this.productListAccessory.length / this.perPage);
    },
    getPaginationCountBag() {
      return Math.ceil(this.productListBag.length / this.perPage);
    },
    getPaginationCountShoe() {
      return Math.ceil(this.productListShoe.length / this.perPage);
    },
  },
  created() {
    this.productListClothing.map((item) => {
      this.items.push(item);
    });
    this.productListAccessory.map((item) => {
      this.items.push(item);
    });
    this.productListBag.map((item) => {
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
    clickCallbackAcc(pagenum) {
      this.currentPageAcc = Number(pagenum);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    clickCallbackBag(pagenum) {
      this.currentPageBag = Number(pagenum);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    clickCallbackShoe(pagenum) {
      this.currentPageShoe = Number(pagenum);
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
.sidebar-image {
  width: 100%;
}
.toolbar {
  border-bottom: 1px solid #ddd;
  margin-bottom: 32px;
  overflow: hidden;
  padding-bottom: 25px;
}
.toolbar .collection-view {
  display: inline-block;
  float: left !important;
  border: medium none !important;
  font-size: 20px !important;
  display: inline-block;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  padding: 0 5px;
  height: 37px;
  overflow: hidden;
}
.change-view {
  display: block;
  background: none;
  border: 0 none;
  float: left;
  padding: 10px 8px;
  color: #e5e5e5;
  line-height: 1;
  cursor: pointer;
}
.change-view--active {
  cursor: default;
  color: #747474;
}
.change-view {
  color: #666 !important;
}
.toolbar .change-view:first-child {
  padding-right: 0;
}
.toolbar .change-view.change-view--active span i {
  color: #ea3a3c;
}
.icon-fallback-text .fallback-text {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
.toolbar .form-horizontal {
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toolbar .form-horizontal label {
  color: #666;
}
label[for] {
  cursor: pointer;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
.form-horizontal > select {
  background: #f0f0f0 none repeat scroll 0 0;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
}
.form-horizontal option {
  color: #111;
  background-color: #fff;
  padding: 50px;
}
.banner_home_inner-2 img {
  width: 100%;
}
.blog__right-title-4 {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin: 45px 0 20px;
  padding: 0 0 15px;
}
.blog__right-title-4::after {
  content: "";
  position: absolute;
  border-bottom: 0.5px solid #ccc;
  left: 15px;
  top: 540px;
  width: var(--blog-width);
}
.blog__right-title-5 {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin: 45px 0 20px;
  padding: 0 0 15px;
}
.blog__right-title-5::after {
  content: "";
  position: absolute;
  border-bottom: 0.5px solid #ccc;
  left: 15px;
  top: 540px;
  width: var(--blog-width);
}
.catagory_price_color {
  background: #f3f3f3;
}
.catagory_area {
  padding: 20px;
}
.catagory_area h2 {
  font-size: 18px;
  color: rgba(34, 34, 34, 0.8);
  padding-bottom: 8px;
  border-bottom: 1px solid #c2c2c2;
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
}
.catagory {
  margin: 0;
  padding: 0;
  list-style: none;
}
@media (max-width: 991.98px) {
  .blog__right-title-5::after {
    content: "";
    position: absolute;
    border-bottom: 0.5px solid #ccc;
    left: 15px;
    top: 540px;
    width: var(--blog-width);
  }
  .add_r_sidebar-2 {
    display: none;
  }
}
@media (max-width: 767.98px) {
  label {
    display: none;
  }
}
</style>
