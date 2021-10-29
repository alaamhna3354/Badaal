<template>
  <!-- Start Portfolio -->
  <div class="port">
    <div class="portfolios">
      <h2 class="special-heading un-color">أعمالنا</h2>
      <div class="image">
        <img
          src="../../assets/img/screen-preview.svg"
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
                <img src="../../assets/img/portfolio-2.jpg" :alt="item.name" />
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
<style scoped>
/* Start Portfolio */
.port {
  background-color: var(--main-color);
}
.portfolios {
  border-top-left-radius: 200px;
  background-color: var(--secondary-color);
}
.portfolios,
.contacts {
  overflow: hidden;
}
.portfolios .image {
  width: 70%;
  margin: 0 auto;
  position: relative;
}
@media (max-width: 767.98px) {
  .portfolios .image {
    width: 100%;
  }
}
.portfolios .image img {
  max-width: 100%;
}
.portfolios .slide-preview {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -64%);
  width: 82%;
  height: 76%;
}
.portfolios .slide-preview img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
/* End Portfolio */
</style>
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
    return {};
  },
  props: ["portfolio"],
  components: { Swiper, SwiperSlide },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
