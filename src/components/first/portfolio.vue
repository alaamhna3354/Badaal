<template>
  <!-- Start Portfolio -->
  <div class="port">
    <div class="portfolios">
      <div class="main-heading">
      <h2>Portfolios</h2>
      </div>
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
            navigation
            :speed="1000"
          >
            <swiper-slide v-for="item in portfolio" :key="item">
              <a href="">
                <div class="image-scroll">
                  <img v-lazy="`http://badaelonline.com/backend/public/storage/${item.cover}`" :alt="item.name" />
                </div>
                <!-- :src=" 'img/badaal-design.png'" v-lazy="`http://badaelonline.com/backend/public/storage/${item.cover}`" -->
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
            navigation
            :speed="1000"
          >
            <swiper-slide v-for="item in portfolio" :key="item">
              <a href="">
                <div class="image-scroll">
                  <img v-lazy="`http://badaelonline.com/backend/public/storage/${item.cover}`" :alt="item.name" />
                </div>
                <!--  :src="'img/badaal-design-mob.png'" -->
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
<style lang="scss" scoped>
$secondryColor: #286f82;
.main-heading {
  text-align: center;
  h2 {
    color: #1abc9c;
    &::before {
      background-color: #1abc9c;
    }
    &::after {
      border: 2px solid #1abc9c;
      background-color: #2c4755;
    }
  }
}
</style>
