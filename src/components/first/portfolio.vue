<template>
  <!-- Start Portfolio -->
  <div class="port">
    <div class="portfolios">
      <h2 class="special-heading">Portfolio</h2>
      <div class="change-view">
        <span @click="toggle">Show {{ show ? "Mobile" : "Disktop" }} View</span>
      </div>
      <div class="image" v-if="show">
        <img
          v-lazy="'img/screen-preview.svg'"
          alt=""
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div class="slide-preview">
          <swiper
            class="swiper"
            :slides-per-view="1"
            :space-between="50"
            navigation
            :speed="1000"
          >
            <swiper-slide v-for="item in portfolio" :key="item">
              <a href="">
                <div class="image-scroll">
                  <img v-lazy="'img/badaal-design.png'" :alt="item.name" />
                </div>
                <!--  :src="`http://badaelonline.com/backend/public/${item.cover}`" -->
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="image mobile" v-else>
        <img
          v-lazy="'img/preview-phone.png'"
          alt=""
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div class="slide-preview">
          <swiper
            class="swiper"
            :slides-per-view="1"
            :space-between="50"
            navigation
            :speed="1000"
          >
            <swiper-slide v-for="item in portfolio" :key="item">
              <a href="">
                <div class="image-scroll">
                  <img v-lazy="'img/badaal-design-mob.png'" :alt="item.name" />
                </div>
                <!--  :src="`http://badaelonline.com/backend/public/${item.cover}`" -->
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
  <!-- End Portfolio -->
</template>
<script>
import SwiperCore, { Navigation } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation]);
export default {
  name: "portfolio",
  data() {
    return {
      show: true,
    };
  },
  props: ["portfolio"],
  components: { Swiper, SwiperSlide },
  computed: {},
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
  mounted() {},
};
</script>
