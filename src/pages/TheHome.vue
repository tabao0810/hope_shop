<template>
  <slider-list />
  <sale-list class="container" />
  <list-brand />
  <div class="container">
    <hr />
  </div>
  <featured-list />
  <contact-shop />
  <blog-post-list />
  <blog-list />
</template>

<script>
import SaleList from "../components/SaleList.vue";
import FeaturedList from "../components/FeaturedList.vue";
import ContactShop from "../components/ContactShop.vue";
import BlogPostList from "../components/BlogPostList.vue";
import SliderList from "../components/SliderList.vue";
import ListBrand from "../components/ListBrand.vue";
import BlogList from "../components/BlogList.vue";
export default {
  components: {
    SliderList,
    SaleList,
    FeaturedList,
    ContactShop,
    BlogPostList,
    ListBrand,
    BlogList,
  },
};
</script>

<style></style>
