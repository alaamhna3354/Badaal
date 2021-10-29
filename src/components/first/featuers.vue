<template>
  <div class="featuers">
    <!-- Start Landing Section  ../assets/img/featuers-services.svg -->
    <swiper
      class="parallax-slider"
      :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
      :speed="1500"
      parallax
      grabCursor
      @swiper="onSwiperInitialized"
    >
      <div class="parallax-slider-navigation">
        <div class="nav-indicator prevArrow">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
        <div class="nav-indicator nextArrow">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
      <swiper-slide
        class="parallax-slide"
        v-for="image in images"
        :key="image.id"
      >
        <div class="intro-text">
          <h2>أبرز خدماتنا</h2>
          <p>شريكك في الخدمات والحلول اللوجستية</p>
          <p class="lorem">
            شريكك في الخدمات والحلول اللوجستية شريكك في <br />الخدمات والحلول
            اللوجستية شريكك في الخدمات والحلول اللوجستية.
          </p>
          <a href="#"
            ><button class="botun">
              أتصل بنا<i class="fab fa-whatsapp" aria-hidden="true"></i></button
          ></a>
          <!-- target="_blank" -->
        </div>
        <div
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <img :src="image.imageUrl" />
        </div>
      </swiper-slide>
    </swiper>
    <!-- End Landing Section -->
  </div>
</template>
<style scoped>
/* Start Landing Section */
.parallax-slider {
  position: relative;
}
.parallax-slide {
  height: 500px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.parallax-slider-navigation {
  position: absolute;
  top: 50%;
  z-index: 11;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 0;
}
.parallax-slide-image {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.parallax-slide-image img {
  width: 100%;
}
.nav-indicator {
  height: 40px;
  width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);
  color: #ffffff;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%);
}

.intro-text {
  position: absolute;
  z-index: 10;
  display: grid;
  place-content: center;
  width: 100%;
}
.intro-text h2 {
  color: #272b31;
  font-size: 30px;
}
.intro-text p {
  color: #010f11;
  font-size: 20px;
}
.intro-text .lorem {
  color: #242828;
  font-size: 15px;
}
/* End Landing Section */
</style>
<script>
import SwiperCore, { Navigation, Parallax } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation, Parallax]);
export default {
  name: "featuers",
  data() {
    return {
      parallaxSwiperWidth: 0,

      images: [
        { id: 1, imageUrl: require("../../assets/img/screen-preview1.webp") },
        { id: 2, imageUrl: require("../../assets/img/featuers-services.jpg") },
        { id: 3, imageUrl: require("../../assets/img/featuers-services.webp") },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    parallaxAmount() {
      return this.parallaxSwiperWidth * 0.5;
    },
  },
  methods: {
    onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
  },
  mounted() {},
};
</script>
