<template>
  <div class="blog2">
    <h1>blog</h1>
    <swiper
      class="swiper"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      :speed="1000"
      :breakpoints="breakpoints"
    >
      <swiper-slide v-for="item in blog" :key="item">
        <div class="blog-item">
          <div class="blog-img">
            <img
              v-lazy="'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp'"
              alt=""
            />
          </div>
          <div class="blog-content">
            <h2 class="blog-code">
              26 December 2019 / viewer {{ item.views }} / tag
              {{ item.keyword }}
            </h2>
            <div class="blog-title">{{ item.title }}</div>
            <div class="blog-ext" v-html="item.body"></div>
            <a href="#" class="blog-button">READ MORE</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import SwiperCore, { Pagination } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Pagination]);
export default {
  name: "blog",
  data() {
    return {};
  },
  props: ["blog"],
  components: { Swiper, SwiperSlide },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
