<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :navigation="{
      nextEl: '.slide-button-next',
      prevEl: '.slide-button-prev',
    }"
    :effect="'creative'"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
        opacity: 0,
      },
      next: {
        translate: ['100%', 0, 0],
        opacity: 1,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="image in listBanner" :key="image._id"
      ><slide-item :img="image"
    /></swiper-slide>
    <div class="navigation-btn">
      <a class="slide-button-prev"
        ><i class="fa fa-angle-left slide-icon-left"></i
      ></a>

      <a class="slide-button-next"
        ><i class="fa fa-angle-right slide-icon-right"></i
      ></a>
    </div>
  </swiper>
</template>

<script>
import SlideItem from "./SlideItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCreative } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("banners");
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      listBanner: (state) => state.listBanner,
    }),
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
  components: {
    Swiper,
    SwiperSlide,
    SlideItem,
  },
  methods: {
    ...mapActions({
      getAllBanner: "getAllBannerAction",
    }),
  },
  created() {
    this.getAllBanner();
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, EffectCreative],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
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

.swiper {
  margin-left: auto;
  margin-right: auto;
}
.swiper:hover .navigation-btn {
  display: flex;
}
@keyframes slideHeader {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.navigation-btn {
  width: 100%;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  display: none;
  /* animation: slideHeader linear 0.3s; */
}
@keyframes btn-next {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes btn-prev {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
.slide-button-next {
  width: 0;
  height: 0;
  border: 30px solid #333;
  border-left-width: 0;
  border-top-color: transparent;
  border-bottom-color: transparent;
  position: relative;
  animation: btn-next linear 0.3s;
}
.slide-icon-right {
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  right: -20px;
  color: white;
  top: -8px;
}
.slide-button-next:hover {
  width: 0;
  height: 0;
  border: 30px solid #337ab7;
  border-left-width: 0;
  border-top-color: transparent;
  border-bottom-color: transparent;
  position: relative;
  cursor: pointer;
}
.slide-button-prev {
  width: 0;
  height: 0;
  border: 30px solid #333;
  border-right-width: 0;
  border-top-color: transparent;
  border-bottom-color: transparent;
  position: relative;
  animation: btn-prev linear 0.3s;
}
.slide-icon-left {
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  left: -20px;
  color: white;
  top: -8px;
}
.slide-button-prev:hover {
  cursor: pointer;
  width: 0;
  height: 0;
  border: 30px solid #337ab7;
  border-right-width: 0;
  border-top-color: transparent;
  border-bottom-color: transparent;
  position: relative;
}
</style>
