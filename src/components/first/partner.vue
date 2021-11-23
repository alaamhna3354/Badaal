<template>
  <!-- Start partner -->
  <div class="partner">
    <div class="container">
      <div class="main-heading">
        <h2>Partner</h2>
      </div>
      <swiper
        class="swiper"
        :slides-per-view="4"
        :space-between="50"
        :scrollbar="{ draggable: true }"
        :speed="1000"
        :breakpoints="breakpoints"
      >
        <swiper-slide v-for="item in partner" :key="item" style="width:auto">
          <a :href="item.link">
            <img v-lazy="`http://badaelonline.com/backend/public/storage/${item.cover}`" :alt="item.name" />
            <h3>{{item.name}}</h3>
            <!-- <img v-lazy="'img/brand.png'" :alt="item.name" /> -->
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- End partner -->
</template>
<script>
import SwiperCore, { Scrollbar } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Scrollbar]);
export default {
  name: "partner",
  data() {
    return {
      breakpoints: {
        300: {
          // when window width from 300px to 576px
          slidesPerView: 1,
          spaceBetween: 50,
        },
        576: {
          // when window width from 576px to 767px
          slidesPerView: 2,
          spaceBetween: 50,
        },
        767: {
          // when window width from 767px to 991px
          slidesPerView: 3,
          spaceBetween: 50,
        },

        991: {
          // when window width from 991px to 1200px
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1200: {
          // when window width from 1200px to higher
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    };
  },
  props: ["partner"],
  components: { Swiper, SwiperSlide },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
