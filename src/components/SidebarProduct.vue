<script setup>
import { ref } from "vue";

const route_products = ref([
  { route: "Tất cả", to: "/products/all" },
  { route: "Quần áo", to: "/products/clothes" },
  { route: "Túi xách", to: "/products/bag" },
  { route: "Phụ kiện", to: "/products/accessory" },
  { route: "Giày cao gót", to: "/products/shoes" },
]);
</script>

<template>
  <div class="catagory_all_products">
    <div class="catagory_area">
      <h2>collection</h2>
      <ul class="catagory_area-menu">
        <li v-for="(item, index) in route_products" :key="index">
          <router-link :to="item.to"
            ><span><i class="fa fa-angle-right"></i></span
            >{{ item.route }}</router-link
          >
        </li>
      </ul>
    </div>
    <div class="sidebar_product_feature">
      <h2>featured</h2>
      <div class="add_r_sidebar">
        <router-link to="/" class="banner_block">
          <img
            src="https://file.hstatic.net/1000003969/file/5_4e8bbd11e68d4e08a72d2d9b4738f03b.jpg"
            alt=""
          />
        </router-link>
      </div>
      <div class="add_r_sidebar">
        <router-link to="/" class="banner_block">
          <img
            src="https://file.hstatic.net/1000003969/file/3_bdbb2eb57de648dabcdb98fb58fb360d.jpg"
            alt=""
          />
        </router-link>
      </div>
      <div class="add_r_sidebar">
        <router-link to="/" class="banner_block">
          <img
            src="https://file.hstatic.net/1000003969/file/1_bd94c2d5fef549f2ae4465bb6732fc0f.jpg"
            alt=""
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.catagory_all_products {
  background: #f3f3f3;
  padding: 20px;
  h2 {
    font-size: 18px;
    color: rgba(34, 34, 34, 0.8);
    padding-bottom: 8px;
    border-bottom: 1px solid #c2c2c2;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;
  }
}
.catagory_area-menu {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    color: #666;
    padding: 6px 0px;
    text-align: left;
    a {
      font-weight: 500;
      font-size: 12px;
      text-transform: uppercase;
      color: #666;
      text-decoration: none;
      position: relative;
      transition: all linear 0.3s;
      span {
        padding: 0px 4px;
      }
      &:hover {
        color: red;
        left: 16px;
        font-weight: 600;
      }
    }
    .active {
      color: red;
      left: 16px;
      font-weight: 600;
    }
  }
}
.sidebar_product_feature {
  h2 {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    margin: 45px 0 20px;
    padding: 0 0 15px;
    // &::after {
    //   content: "";
    //   position: absolute;
    //   border-bottom: 0.5px solid #ccc;
    //   left: 15px;
    //   top: 540px;
    //   width: 100%;
    // }
  }
}
</style>
