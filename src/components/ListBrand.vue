<template>
  <div class="slide-sale container mt-3 col-12">
    <swiper
      :slidesPerView="setCount"
      :spaceBetween="10"
      :slidesPerGroup="1"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="{
        nextEl: '.brand-button-next',
        prevEl: '.brand-button-prev',
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(img, index) in listBrand" :key="index">
        <img :src="img.image" alt="" />
      </swiper-slide>
    </swiper>
    <div class="brand-btn">
      <a class="brand-button-prev">
        <i class="fa-solid fa-arrow-left-long brand-icon-left"></i
      ></a>
      <a class="brand-button-next"
        ><i class="fa-solid fa-arrow-right-long brand-icon-right"></i
      ></a>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("brands");

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  computed: {
    ...mapState({
      listBrand: (state) => state.listBrand,
    }),
    setCount() {
      let x = screen.width;
      let count;
      if (x < 719) {
        count = 2;
      } else if (x > 1024) {
        count = 6;
      } else {
        count = 4;
      }
      return count;
    },
    setNavigation() {
      let x = screen.width;
      let y = this.isNavigation;
      if (x < 719) {
        y = false;
      } else if (x > 1024) {
        y = true;
      } else {
        y = false;
      }
      return y;
    },
  },
  methods: {
    ...mapActions({
      getAllBrand: "getAllBrandAction",
    }),
  },
  created() {
    this.getAllBrand();
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
  font-size: 18px;
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
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide-sale {
  position: relative;
}
@keyframes brandList {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.brand-btn {
  width: 100%;
  display: none;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  animation: brandList linear 0.4s;
}

.brand-button-prev {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
  position: relative;
  left: -25px;
}
.brand-icon-left {
  transform: rotate(-45deg);
  position: absolute;
  top: 7px;
  right: 7px;
}
.brand-icon-left::before {
  font-size: 30px;
}
.brand-button-next {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
  position: relative;
  left: -7px;
}
.brand-icon-right {
  transform: rotate(-45deg);
  position: absolute;
  bottom: 7px;
  left: 7px;
}
.brand-icon-right::before {
  font-size: 30px;
}
.brand-button-prev:hover {
  width: 50px;
  height: 50px;
  background-color: #333;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
  cursor: pointer;
}
.brand-button-prev:hover .brand-icon-left {
  color: #fff;
}
.brand-button-next:hover {
  cursor: pointer;
  width: 50px;
  height: 50px;
  background-color: #333;
  border: 1px solid #333;
  border-radius: 5px;
  transform: rotate(45deg);
}
.brand-button-next:hover .brand-icon-right {
  color: #fff;
}
</style>
<style>
@media (max-width: 767.98px) {
  .brand-btn {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .brand-btn {
    display: none;
  }
}
@media (min-width: 992px) {
  .slide-sale:hover .brand-btn {
    display: flex;
  }
}
</style>
