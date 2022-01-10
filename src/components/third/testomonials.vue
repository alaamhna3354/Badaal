<template>
  <!-- Start testimonials3 -->
  <div class="testimonials3">
    <h2 class="special-heading un-color">عملائنا</h2>
    <div class="contain">
      <swiper
        class="swiper"
        :slides-per-view="2"
        :space-between="50"
        :pagination="{ clickable: true }"
        :speed="1000"
        :breakpoints="breakpoints"
      >
        <swiper-slide>
          <div class="contain-rate">
            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque, magni animi odit quae tenetur blanditiis
                non sit odio reiciendis.
              </p>
            </div>
            <div class="user">
              <div class="image">
                <img v-lazy="'img/manger.jpg'" alt="" />
              </div>
              <div class="details">
                 <h2>أدهم عدوان </h2>
                <h4>المؤسس / المدير التنفيذي</h4>
                <span class="rating"
                  ><span>★</span> <span>★</span><span>★</span><span>★</span>
                  <span>☆</span></span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="contain-rate">
            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque, magni animi odit quae tenetur blanditiis
                non sit odio reiciendis.
              </p>
            </div>
            <div class="user">
              <div class="image">
                <img v-lazy="'img/manger.jpg'" alt="" />
              </div>
              <div class="details">
                <h2>أدهم عدوان </h2>
                <h4>المؤسس / المدير التنفيذي</h4>
                <span class="rating"
                  ><span>★</span> <span>★</span><span>★</span><span>★</span>
                  <span>☆</span></span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="contain-rate">
            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque, magni animi odit quae tenetur blanditiis
                non sit odio reiciendis.
              </p>
            </div>
            <div class="user">
              <div class="image">
                <img v-lazy="'img/manger.jpg'" alt="" />
              </div>
              <div class="details">
                <h2>أدهم عدوان </h2>
                <h4>المؤسس / المدير التنفيذي</h4>
                <span class="rating"
                  ><span>★</span> <span>★</span><span>★</span><span>★</span>
                  <span>☆</span></span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="contain-rate">
            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque, magni animi odit quae tenetur blanditiis
                non sit odio reiciendis.
              </p>
            </div>
            <div class="user">
              <div class="image">
                <img v-lazy="'img/manger.jpg'" alt="" />
              </div>
              <div class="details">
                <h2>أدهم عدوان </h2>
                <h4>المؤسس / المدير التنفيذي</h4>
                <span class="rating"
                  ><span>★</span> <span>★</span><span>★</span><span>★</span>
                  <span>☆</span></span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- End testimonials3 -->
</template>
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
 @import "../../assets/scss/thirdcomponents/testomonials.scss";
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
  name: "testomonials",
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
          slidesPerView: 1,
          spaceBetween: 50,
        },
        767: {
          // when window width from 767px to 991px
          slidesPerView: 2,
          spaceBetween: 50,
        },

        991: {
          // when window width from 991px to 1200px
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1200: {
          // when window width from 1200px to higher
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    };
  },
  props: [],
  components: { Swiper, SwiperSlide },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
