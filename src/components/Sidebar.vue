<script setup>
import { defineProps } from "vue";
const props = defineProps({
  routes: {
    type: Array,
    required: true,
  },
  images: {
    type: Array,
  },
  title: {
    type: String,
  },
});
</script>

<template>
  <div class="catagory_all_products sidebar_products">
    <div class="catagory_area">
      <h2>{{ props.title }}</h2>
      <ul class="catagory_area-menu">
        <li v-for="(item, index) in props.routes" :key="index">
          <router-link :to="item.to"
            ><span><i class="fa fa-angle-right"></i></span
            >{{ item.route }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="sidebar_product_feature">
    <div
      class="add_r_sidebar"
      v-for="(_img, index) in props.images"
      :key="index"
    >
      <router-link to="/" class="banner_block">
        <img :src="_img.image" alt="" />
      </router-link>
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
      transition: all linear 0.3s;
      display: flex;
      align-items: flex-end;
      line-height: 24px;
      span {
        padding: 0px 4px;
      }
      &:hover {
        color: red;
        transform: translateX(16px);
        font-weight: 600;
        transition: all linear 0.3s;
      }
    }
    .active {
      color: red;
      transform: translateX(16px);
      font-weight: 600;
      transition: all linear 0.3s;
    }
  }
}
</style>
