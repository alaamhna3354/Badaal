<template>
  <!-- Start Portfolio -->
  <div class="port">
    <div class="portfolios">
      <div class="main-heading">
      <h2>{{ $t('Portfolio') }}</h2>
      </div>
      <div class="change-view">
        <span @click="toggle">Show {{ show ? "Mobile" : "Disktop" }} View</span>
      </div>
      <div class="image animate__animated animate__bounceInUp" v-if="show">
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
            <router-link :to="{ path: `/portfolio` }">
                <div class="image-scroll">
                  <img v-lazy="`${GlobalUrl}storage/${item.cover}`" :alt="item.name" />
                </div>
                <!-- :src=" 'img/badaal-design.png'" v-lazy="`http://badaelonline.com/backend/public/storage/${item.cover}`" -->
             </router-link>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="image mobile image animate__animated animate__bounceInDown" v-else>
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
              <a :href="item.client">
                <div class="image-scroll">
                  <img v-lazy="`${GlobalUrl}/storage/${item.mobileImage}`" :alt="item.name" />
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
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
 @import "../../assets/scss/firstcomponents/portfolio.scss";
</style>
<script>
import SwiperCore, { Navigation } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation]);
import { mapState } from 'vuex';
export default {
  name: "portfolio",
  data() {
    return {
      show: true,
    };
  },
  props: ["portfolio"],
  components: { Swiper, SwiperSlide },
  computed: {
    ...mapState([
      'GlobalUrl'
    ])
  },
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
$mainColor: #1daad2;
.main-heading {
  text-align: center;
  h2 {
    color: $mainColor;
    &::before {
      background-color: $mainColor;
    }
    &::after {
      border: 2px solid $mainColor;
      background-color: #2c4755;
    }
  }
}
</style>
