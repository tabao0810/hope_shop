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
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
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
