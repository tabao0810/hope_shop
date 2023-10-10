<template>
  <div class="blog-list container col-12">
    <swiper
      :slidesPerView="countSwiper"
      :spaceBetween="20"
      :slidesPerGroup="1"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="{
        nextEl: '.blog-button-next',
        prevEl: '.blog-button-prev',
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="blog in blogList" :key="blog._id">
        <blog-item :blogList="blog" />
      </swiper-slide>
    </swiper>
    <div class="blog-btn">
      <a class="blog-button-prev"
        ><i class="fa-solid fa-arrow-left-long blog-icon-left"></i>
      </a>

      <a class="blog-button-next">
        <i class="fa-solid fa-arrow-right-long blog-icon-right"></i
      ></a>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import BlogItem from "./BlogItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useCount } from "@/composables/countSwiper";

export default {
  data() {
    return {
      isNavigation: true,
    };
  },
  components: {
    BlogItem,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    const { countSwiper } = useCount(screen.width);
    store.dispatch("blogs/getAllBlogAction");
    const blogList = computed(() => store.state.blogs.blogList);
    return {
      modules: [Pagination, Navigation],
      blogList,
      countSwiper,
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;

  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
<style scoped>
.blog-list {
  position: relative;
}
@keyframes blogList {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.blog-btn {
  width: 100%;
  display: none;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  animation: blogList linear 0.4s;
}
.blog-button-prev {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
  position: relative;
  left: -25px;
}
.blog-icon-left {
  transform: rotate(-45deg);
  position: absolute;
  top: 7px;
  right: 7px;
}
.blog-icon-left::before {
  font-size: 30px;
}
.blog-button-next {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
  position: relative;
  left: -7px;
}
.blog-icon-right {
  transform: rotate(-45deg);
  position: absolute;
  bottom: 8px;
  left: 10px;
}
.blog-icon-right::before {
  font-size: 30px;
}
.blog-button-prev:hover {
  width: 50px;
  height: 50px;
  background-color: #333;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
  cursor: pointer;
}
.blog-button-prev:hover .blog-icon-left {
  color: #fff;
}
.blog-button-next:hover {
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: #333;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
}
.blog-button-next:hover .blog-icon-right {
  color: #fff;
}
</style>
<style>
@media (max-width: 767.98px) {
  .blog-btn {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .blog-btn {
    display: none;
  }
}
@media (min-width: 992px) {
  .blog-list:hover .blog-btn {
    display: flex;
  }
}
</style>
