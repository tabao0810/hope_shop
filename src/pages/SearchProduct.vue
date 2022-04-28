<template>
  <div class="container mt-5 search-list">
    <div>
      <h1>Tìm kiếm</h1>
      <p v-if="productListByName.length > 0">
        {{ productListByName.length }} sản phẩm
      </p>
      <hr />
    </div>
    <div v-if="productListByName.length !== 0">
      <div
        class="single_product_list mt-5"
        v-for="featured in getSearch"
        :key="featured._id"
      >
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="product-image-search">
              <a href=""
                ><img
                  :src="featured.image"
                  :alt="featured.name"
                  @click.prevent="handleToDetail(featured._id)"
              /></a>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div class="blog_product_details">
              <h2 class="blog_heading">
                <a href="" @click.prevent="handleToDetail(featured._id)">{{
                  featured.name
                }}</a>
              </h2>
              <div class="product_rating">
                <span class="spr-badge"
                  ><span class="spr-starrating spr-badge-starrating"
                    ><i
                      class="fa fa-star"
                      style="color: #e7f20e"
                      aria-hidden="true"
                    ></i
                    ><i
                      class="fa fa-star"
                      style="color: #e7f20e"
                      aria-hidden="true"
                    ></i
                    ><i
                      class="fa fa-star"
                      style="color: #e7f20e"
                      aria-hidden="true"
                    ></i
                    ><i
                      class="fa fa-star"
                      style="color: #e7f20e"
                      aria-hidden="true"
                    ></i
                    ><i
                      class="fa fa-star"
                      style="color: #e7f20e"
                      aria-hidden="true"
                    ></i></span
                  ><span class="spr-badge-caption ml-2">No reviews</span>
                </span>
              </div>

              <div class="pricing_rate">
                <p class="rating_dollor">
                  <span class="rating_value_two">{{
                    formatPriceSearch(featured)
                  }}</span>
                  <span class="visually-hidden"
                    >translation missing: en.cart.general.regular_price</span
                  >
                  <span
                    class="rating_value_one"
                    v-if="featured.isSale === true"
                    >{{ formatSearch(featured) }}</span
                  >
                </p>

                <div>
                  <p class="blog_texts">
                    {{ featured.description }}
                  </p>
                  <a
                    class="learn_more"
                    href=""
                    @click.prevent="handleToDetail(featured._id)"
                    >Learn More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="pagination shop_paginatin">
        <paginate
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
    <div v-else>
      <h4>Không tìm thấy sản phẩm bạn yêu cầu</h4>
      <img :src="img_svg" alt="" />
    </div>
  </div>
</template>

<script>
import findIt from "../../public/image/find.svg";
import Paginate from "vuejs-paginate-next";
import { createNamespacedHelpers, useStore } from "vuex";
const { mapGetters } = createNamespacedHelpers("products");
export default {
  setup() {
    const store = useStore();
    store.dispatch("products/getAllProductsAction");
  },
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 5,
      img_svg: findIt,
    };
  },
  components: {
    Paginate,
  },
  computed: {
    ...mapGetters({
      productListByName: "productListByName",
    }),
    getSearch() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.productListByName.slice(start, end);
    },
    getPaginationCountSearch() {
      return Math.ceil(this.productListByName.length / this.perPage);
    },
  },
  created() {
    this.productListByName.map((item) => {
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
    handleToDetail(a) {
      this.$router.push(`/product-detail/${a}`);
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
    },
    formatPriceSearch(a) {
      if (a.isSale === false) {
        return a.price.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        });
      } else {
        return (a.price - a.price * (a.sale / 100)).toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        });
      }
    },
    formatSearch(a) {
      return (a = a.price.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      }));
    },
  },
};
</script>

<style></style>
<style scoped>
.single_product_list {
  text-align: left;
}
.product-image-search a > img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.blog_product_details .blog_heading {
  margin: 0 0 10px;
  font-size: 28px;
  font-weight: 600;
  text-align: left;
}
.blog_product_details .blog_heading a,
.product-title-search > a {
  color: #333;
  text-decoration: none;
}
.blog_heading > a:hover {
  color: #ff343b;
  transition: all linear 0.3s;
}
.pricing_rate .blog_texts {
  color: #555;
  text-align: left;
}
.learn_more {
  color: #000;
  text-decoration: underline;
  display: block;
  text-align: left;
  position: relative;
  top: -10px;
}
.learn_more:hover {
  color: #ff343b;
}
.product_button {
  text-align: left;
}
.cart_details {
  margin-right: 5px;
  float: left;
  cursor: pointer;
}
.product_button a i {
  border: 1px solid #666;
  color: #666;
  font-size: 13px;
  padding: 8px 10px;
  text-decoration: none;
  text-transform: uppercase;
}
.add_cart {
  text-decoration: none;
  color: #666;
  font-size: 13px;
  text-transform: uppercase;
  border: 1px solid #666;
  padding: 5px 10px;
  float: left;
  cursor: pointer;
  background: none;
}
.add_cart:hover {
  color: #ff3441;
  border: 1px solid #ff3441;
}
.cart_details i:hover {
  color: #ff3441;
  border: 1px solid #ff3441;
}
.pagination {
  position: absolute;
  right: 0;
  bottom: -30px;
}
.search-list {
  position: relative;
}
</style>
