<template>
  <!-- Start partner -->
  <div class="partner">
    <div class="container">
      <div class="main-heading">
        <h2>{{$t('Partner')}}</h2>
      </div>
      <swiper
        class="swiper"
        :scrollbar="{ draggable: true }"
        :speed="1000"
        :breakpoints="breakpoints"
      >
        <swiper-slide v-for="item in partner" :key="item" style="width:250px">
          <a :href="item.link">
            <img v-lazy="`${GlobalUrl}/storage/${item.cover}`" :alt="item.name" />
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
import { mapState } from 'vuex';
export default {
  name: "partner",
  data() {
    return {
      breakpoints: {
        300: {
          // when window width from 300px to 576px
          slidesPerView: 1,

        },
        576: {
          // when window width from 576px to 767px
          slidesPerView: 2,

        },
        767: {
          // when window width from 767px to 991px
          slidesPerView: 3,

        },

        991: {
          // when window width from 991px to 1200px
          slidesPerView: 4,

        },
        1200: {
          // when window width from 1200px to higher
          slidesPerView: 5,
        },
      },
    };
  },
  props: ["partner"],
  components: { Swiper, SwiperSlide },
  computed: {
    ...mapState([
      'GlobalUrl'
    ])
  },
  methods: {},
  mounted() {
  },
};
</script>
