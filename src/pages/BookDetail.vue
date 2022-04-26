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

          <div class="catagory_area color">
            <h2>COLOR</h2>

            <ul class="catagory">
              <li>
                <a class="bs_color_red" href="/collections/all/red"
                  ><i class="fa fa-angle-right"></i>red</a
                >
              </li>

              <li>
                <a class="bs_color_white" href="/collections/all/white"
                  ><i class="fa fa-angle-right"></i>white</a
                >
              </li>

              <li>
                <a class="bs_color_blue" href="/collections/all/blue"
                  ><i class="fa fa-angle-right"></i>blue</a
                >
              </li>

              <li>
                <a class="bs_color_black" href="/collections/all/black"
                  ><i class="fa fa-angle-right"></i>black</a
                >
              </li>

              <li>
                <a class="bs_color_pink" href="/collections/all/pink"
                  ><i class="fa fa-angle-right"></i>pink</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="add_r_sidebar-2 mt-3">
          <h2 class="blog__right-title-5">bestsellers</h2>
          <p class="banner_block-2">
            <a href="">
              <img
                src="https://cdn.shopify.com/s/files/1/1309/3901/t/2/assets/banner_left.jpg?v=4606861808685713538"
                alt=""
              />
            </a>
          </p>
        </div>
      </div>
      <div class="col-lg-9">
        <the-product :isSelected="selected === 'Quần áo'"
          ><div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a href="">
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
              <router-link to="lookbook">
                <button
                  type="button"
                  title="Grid view"
                  class="change-view change-view"
                  data-view="grid"
                >
                  <span class="icon-fallback-text">
                    <span class="icon_grid_view" aria-hidden="true"
                      ><i class="fa fa-th"></i
                    ></span>
                    <span class="fallback-text">Grid view</span>
                  </span>
                </button>
              </router-link>

              <button
                type="button"
                title="List view"
                class="change-view change-view--active"
                data-view="list"
              >
                <span class="icon-fallback-text">
                  <span class="icon_list_view" aria-hidden="true"
                    ><i class="fa fa-th-list"></i
                  ></span>
                  <span class="fallback-text">List view</span>
                </span>
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
          <div
            class="single_product_list"
            v-for="featured in getClothings"
            :key="featured.id"
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="product_blog_image">
                  <div class="product_blog_image">
                    <a href=""
                      ><img :src="featured.image" :alt="featured.name"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="blog_product_details">
                  <h2 class="blog_heading">
                    <a href="">{{ featured.name }}</a>
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
                        >{{ featured.price }}</span
                      >
                    </p>

                    <div>
                      <p class="blog_texts">
                        {{ featured.description }}
                      </p>
                      <a
                        class="learn_more"
                        href="/collections/all/products/lorem-ipsum-dolor-1"
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
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="cart_details">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#lorem-ipsum-dolor-1"
                        title="Quick view"
                        ><i class="fa fa-eye"> </i
                      ></a>
                    </div>
                    <div class="cart_details">
                      <a href="/account/login"><i class="fa fa-heart-o"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
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
            </paginate></div
        ></the-product>
        <the-product :isSelected="selected === 'Phụ kiện'"
          ><div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a href="">
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
              <router-link to="lookbook">
                <button
                  type="button"
                  title="Grid view"
                  class="change-view change-view"
                  data-view="grid"
                >
                  <span class="icon-fallback-text">
                    <span class="icon_grid_view" aria-hidden="true"
                      ><i class="fa fa-th"></i
                    ></span>
                    <span class="fallback-text">Grid view</span>
                  </span>
                </button>
              </router-link>

              <button
                type="button"
                title="List view"
                class="change-view change-view--active"
                data-view="list"
              >
                <span class="icon-fallback-text">
                  <span class="icon_list_view" aria-hidden="true"
                    ><i class="fa fa-th-list"></i
                  ></span>
                  <span class="fallback-text">List view</span>
                </span>
              </button>
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
          <div
            class="single_product_list"
            v-for="featured in getAccessory"
            :key="featured.id"
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="product_blog_image">
                  <div class="product_blog_image">
                    <a href=""
                      ><img :src="featured.image" :alt="featured.name"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="blog_product_details">
                  <h2 class="blog_heading">
                    <a href="">{{ featured.name }}</a>
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
                        >{{ featured.price }}</span
                      >
                    </p>

                    <div>
                      <p class="blog_texts">
                        {{ featured.description }}
                      </p>
                      <a
                        class="learn_more"
                        href="/collections/all/products/lorem-ipsum-dolor-1"
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
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="cart_details">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#lorem-ipsum-dolor-1"
                        title="Quick view"
                        ><i class="fa fa-eye"> </i
                      ></a>
                    </div>
                    <div class="cart_details">
                      <a href="/account/login"><i class="fa fa-heart-o"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
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
            </paginate></div
        ></the-product>
        <the-product :isSelected="selected === 'Túi xách'"
          ><div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a href="">
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
              <router-link to="lookbook">
                <button
                  type="button"
                  title="Grid view"
                  class="change-view change-view"
                  data-view="grid"
                >
                  <span class="icon-fallback-text">
                    <span class="icon_grid_view" aria-hidden="true"
                      ><i class="fa fa-th"></i
                    ></span>
                    <span class="fallback-text">Grid view</span>
                  </span>
                </button>
              </router-link>

              <button
                type="button"
                title="List view"
                class="change-view change-view--active"
                data-view="list"
              >
                <span class="icon-fallback-text">
                  <span class="icon_list_view" aria-hidden="true"
                    ><i class="fa fa-th-list"></i
                  ></span>
                  <span class="fallback-text">List view</span>
                </span>
              </button>
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
          <div
            class="single_product_list"
            v-for="featured in getBag"
            :key="featured.id"
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="product_blog_image">
                  <div class="product_blog_image">
                    <a href=""
                      ><img :src="featured.image" :alt="featured.name"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="blog_product_details">
                  <h2 class="blog_heading">
                    <a href="">{{ featured.name }}</a>
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
                        >{{ featured.price }}</span
                      >
                    </p>

                    <div>
                      <p class="blog_texts">
                        {{ featured.description }}
                      </p>
                      <a
                        class="learn_more"
                        href="/collections/all/products/lorem-ipsum-dolor-1"
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
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="cart_details">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#lorem-ipsum-dolor-1"
                        title="Quick view"
                        ><i class="fa fa-eye"> </i
                      ></a>
                    </div>
                    <div class="cart_details">
                      <a href="/account/login"><i class="fa fa-heart-o"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
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
            </paginate></div
        ></the-product>
        <the-product :isSelected="selected === 'Giày'"
          ><div class="blog_banner_area">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="single_banner">
                  <div class="banner_home_inner-2">
                    <a href="">
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
              <router-link to="lookbook">
                <button
                  type="button"
                  title="Grid view"
                  class="change-view change-view"
                  data-view="grid"
                >
                  <span class="icon-fallback-text">
                    <span class="icon_grid_view" aria-hidden="true"
                      ><i class="fa fa-th"></i
                    ></span>
                    <span class="fallback-text">Grid view</span>
                  </span>
                </button>
              </router-link>

              <button
                type="button"
                title="List view"
                class="change-view change-view--active"
                data-view="list"
              >
                <span class="icon-fallback-text">
                  <span class="icon_list_view" aria-hidden="true"
                    ><i class="fa fa-th-list"></i
                  ></span>
                  <span class="fallback-text">List view</span>
                </span>
              </button>
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
          <div
            class="single_product_list"
            v-for="featured in getShoe"
            :key="featured.id"
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="product_blog_image">
                  <div class="product_blog_image">
                    <a href=""
                      ><img :src="featured.image" :alt="featured.name"
                    /></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div class="blog_product_details">
                  <h2 class="blog_heading">
                    <a href="">{{ featured.name }}</a>
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
                        >{{ featured.price }}</span
                      >
                    </p>

                    <div>
                      <p class="blog_texts">
                        {{ featured.description }}
                      </p>
                      <a
                        class="learn_more"
                        href="/collections/all/products/lorem-ipsum-dolor-1"
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
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="cart_details">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#lorem-ipsum-dolor-1"
                        title="Quick view"
                        ><i class="fa fa-eye"> </i
                      ></a>
                    </div>
                    <div class="cart_details">
                      <a href="/account/login"><i class="fa fa-heart-o"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="pagination shop_paginatin">
            <paginate
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
            </paginate></div
        ></the-product>
      </div>
    </div>
  </div>
</template>

<script>
import TabProduct from "./TabProduct.vue";
import TheProduct from "./TheProduct.vue";
import Paginate from "vuejs-paginate-next";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapGetters } =
  createNamespacedHelpers("products");
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      currentPageAcc: 1,
      currentPageBag: 1,
      currentPageShoe: 1,
      perPage: 5,
      selected: "Quần áo",
      priceSort: "",
      priceSortAccessory: "",
      priceSortBag: "",
      priceSortShoe: "",
    };
  },
  components: {
    Paginate,
    TabProduct,
    TheProduct,
  },
  computed: {
    ...mapState({
      featuredList: (state) => state.productList,
    }),
    ...mapGetters({
      productListClothing: "productListClothing",
      productListAccessory: "productListAccessory",
      productListBag: "productListBag",
      productListShoe: "productListShoe",
      productListClothingSortAsc: "productListClothingSortAsc",
      productListClothingSortDesc: "productListClothingSortDesc",
      productListAccessorySortAsc: "productListAccessorySortAsc",
      productListAccessorySortDesc: "productListAccessorySortDesc",
      productListBagSortAsc: "productListBagSortAsc",
      productListBagSortDesc: "productListBagSortDesc",
      productListShoeSortAsc: "productListShoeSortAsc",
      productListShoeSortDesc: "productListShoeSortDesc",
    }),
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
    this.getAllProduct();
  },
  methods: {
    ...mapActions({
      getAllProduct: "getAllProductsAction",
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
  outline: none;
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
.toolbar .form-horizontal > select {
  background: #f0f0f0 none repeat scroll 0 0;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  padding: 5px;
  cursor: pointer;
  outline: none;
}
option {
  color: #000;
  background-color: #fff;
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
  top: 600px;
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
.catagory li {
  color: #666;
  padding: 8px 0px;
  display: flex;
  justify-content: space-between;
}
.catagory li a {
  font-size: 12px;
  text-transform: uppercase;
  color: #666;
  text-decoration: none;
  font-weight: bold;
  transition: all linear 0.3s;
  text-align: left;
}
.catagory li i {
  margin-right: 5px;
}
.catagory li a:hover {
  color: #ff343b;
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
}
@media (max-width: 767.98px) {
  label {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .add_r_sidebar-2 {
    display: none;
  }
}
.single_product_list {
  overflow: hidden;
  padding-bottom: 30px;
}
.product_blog_image img {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}
.blog_product_details {
  position: relative;
}
.blog_product_details:before {
  position: absolute;
  top: 77px;
  left: 0;
  content: "";
  background: #eeeeee;
  height: 1px;
  width: 100%;
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
.product_rating {
  display: inline;
  text-align: left;
}
.product_rating span {
  color: #333;
}
.spr-badge {
  *zoom: 1;
  min-height: auto;
  min-width: auto;
  display: block;
}
.spr-badge-caption {
  color: #222 !important;
}
.spr-badge:before,
.spr-badge:after {
  content: " ";
  display: table;
}
.spr-badge:after {
  clear: both;
}
.pricing_rate {
  margin-bottom: 0;
}
.pricing_rate .rating_dollor {
  font-size: 20px;
  font-style: italic;
  margin: 15px 0 15px 0px;
  color: #ff343b;
  text-align: left;
  font-weight: 600;
}
.pricing_rate .rating_dollor .rating_value_one {
  text-decoration: line-through;
  color: #898989;
  margin-left: 4px;
  font-size: 16px;
}
.visually-hidden,
.supports-fontface .icon-fallback-text .fallback-text {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
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
@media (max-width: 991.98px) {
  .blog_texts {
    height: 90px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
}
</style>
