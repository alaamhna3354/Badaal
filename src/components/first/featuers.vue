<template>
  <!-- Start Landing -->
  <div class="landing" v-if="banner.length > 0">
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
         <i v-if="lang == 'ar'" class="fa fa-arrow-right" aria-hidden="true"></i>
           <i v-else class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
        <div class="nav-indicator nextArrow">
         <i v-if="lang == 'ar'" class="fa fa-arrow-left" aria-hidden="true"></i>
          <i v-else  class="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
      <swiper-slide
        class="parallax-slide"
        v-for="item in banner"
        :key="item.id"
      >
        <a :href="item.link">
          <div class="text">
            <div class="content">
              <h2>
              {{ about.title }}
              </h2>
              <p>
                {{ about.subject }}
              </p>
            </div>
          </div>
          <div
            class="parallax-slide-image"
            :data-swiper-parallax="parallaxAmount"
            :data-swiper-parallax-opacity="0.5"
          >
            <img v-lazy="`${GlobalUrl}/storage/${item.cover}`" />
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </div>
  <Unavailble :name="'banner'" v-else />

  <!-- End Landing -->
</template>
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
 @import "../../assets/scss/firstcomponents/featuers.scss";
</style>
<script>
import SwiperCore, { Navigation, Parallax } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation, Parallax]);
import Unavailble from "../global/unavailble.vue";
import { mapState } from 'vuex';
export default {
  name: "featuers",
  data() {
    return {
      parallaxSwiperWidth: 0,
      lang: localStorage.getItem('lang')  ||'en',
      // images: [
      //   { id: 1, imageUrl: "img/stats.png" },
      //   { id: 2, imageUrl: "img/featuers-services.jpg" },
      //   { id: 3, imageUrl: "img/stats.png" },
      // ],
    };
  },
  props: ["banner","about"],
  components: {
    Swiper,
    SwiperSlide,
    Unavailble,
  },
  computed: {
    parallaxAmount() {
      return this.parallaxSwiperWidth * 0.5;
    },
    ...mapState([
      'GlobalUrl'
    ])
  },
  methods: {
    onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
  },
  mounted() {},
};
</script>
