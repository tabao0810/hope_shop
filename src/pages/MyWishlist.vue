<template>
  <div class="container my-wishlist">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="wishlist_heading">My Wishlist</h2>
        <hr />
        <div v-if="wishlist.length > 0">
          <div
            class="single_product_list"
            v-for="featured in getItems"
            :key="featured.id"
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="product_blog_image">
                  <div class="product_blog_image">
                    <a href=""
                      ><img
                        :src="featured.image"
                        :alt="featured.name"
                        @click.prevent="handleToDetail(featured._id)"
                    /></a>
                  </div>
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
                        FormatSale(featured)
                      }}</span>
                      <span class="visually-hidden"
                        >translation missing:
                        en.cart.general.regular_price</span
                      >
                      <span
                        class="rating_value_one"
                        v-if="featured.isSale === true"
                        >{{ FormatWish(featured) }}</span
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
                  <div class="product_button">
                    <div class="cart_details">
                      <button
                        title="Add to cart"
                        class="add_cart"
                        type="submit"
                        name="add"
                        value=""
                        @click="handleBuy(featured)"
                        :disabled="featured.quantity === 0"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="cart_details">
                      <a @click="handleDeleteWish(featured._id)"
                        ><i class="fa fa-trash"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
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
    </div>
  </div>
</template>

<script>
import wishlistSVG from "../../public/image/wishlist.gif";
import Paginate from "vuejs-paginate-next";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("user");
const { mapActions } = createNamespacedHelpers("user");
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 4,
      img_svg: wishlistSVG,
    };
  },
  components: {
    Paginate,
  },
  computed: {
    ...mapState({
      wishlist: (state) => state.userWishes,
    }),
    getItems() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = this.currentPage * this.perPage;
      return this.wishlist.slice(start, end);
    },
    getPaginationCount() {
      return Math.ceil(this.wishlist.length / this.perPage);
    },
  },
  created() {
    this.wishlist.map((item) => {
      this.items.push(item);
    });
  },
  methods: {
    ...mapActions({
      handleDeleteWish: "removeWishAction",
      handleBuy: "addCartAction",
    }),
    FormatSale(featured) {
      if (featured.isSale === true) {
        let x = featured.price - featured.price * (featured.sale / 100);
        return (x = x.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        }));
      } else {
        let x = featured.price;
        return (x = x.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        }));
      }
    },
    FormatWish(x) {
      return (x = x.price.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      }));
    },
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
  },
};
</script>

<style>
.my-wishlist {
  margin-top: 30px;
}
.wishlist_heading {
  color: #555;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: left;
}
.wishlist_empty-text {
  color: #ff343b;
  text-align: left;
  font-size: 16px;
}
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
<style scoped></style>
