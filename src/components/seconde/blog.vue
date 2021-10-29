<template>
  <div class="blog">
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
              src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
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
<style scoped>
.blog {
  padding: 50px 0;
  background-color: var(--main-color);
  overflow: hidden;
}
.blog h1 {
  text-align: center;
  text-shadow: 2px 2px 5px #ddd;
  font-size: 40px;
}
.blog-item {
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  padding: 20px;
  box-shadow: 3px 3px 25px #888;
}
.blog-img {
  width: 300px;
  height: 300px;
}
.blog-img img {
  max-width: 100%;
}
.blog-content {
  display: grid;
  width: 60%;
}
@media (max-width: 767px) {
  .blog-item {
    display: grid;
    margin: 0 auto;
  }
  .blog-content {
    width: 100%;
    padding: 5px;
  }
}
</style>
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
