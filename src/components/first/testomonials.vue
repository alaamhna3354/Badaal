<template>
  <!-- Start Testimonials -->
  <div class="testimonials">
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
                <img src="../../assets/img/manger.jpg" alt="" />
              </div>
              <div class="details">
                <h2>عدوان أدهم</h2>
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
                <img src="../../assets/img/manger.jpg" alt="" />
              </div>
              <div class="details">
                <h2>عدوان أدهم</h2>
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
                <img src="../../assets/img/manger.jpg" alt="" />
              </div>
              <div class="details">
                <h2>عدوان أدهم</h2>
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
                <img src="../../assets/img/manger.jpg" alt="" />
              </div>
              <div class="details">
                <h2>عدوان أدهم</h2>
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
  <!-- End Testimonials -->
</template>
<style scoped>
/* Start testimonials */
.testimonials {
  background-color: var(--main-color);
  overflow: hidden;
}
.testimonials .contain {
  padding-inline-start: 60px;
  padding-bottom: 50px;
}

.testimonials .contain-rate {
  width: 90%;
}
.testimonials .comment {
  background-color: #4f93ae;
  padding: 5px 10px;
  border-radius: 20px;
  color: #fff;
  position: relative;
}
.testimonials .comment::before {
  content: "";
  border-style: solid;
  border-width: 10px;
  border-color: #4f93ae transparent transparent transparent;
  position: absolute;
  bottom: -20px;
  left: 40px;
}
.testimonials .user {
  display: flex;
  gap: 50px;
  margin-top: 25px;
}
.testimonials .user .image {
  width: 100px;
  height: 100px;
}
.testimonials .user .image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.details h2 {
  color: #1abc9c;
}
.details h4 {
  color: #728a85;
}
.details .rating {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.details .rating span {
  color: #ffdc12;
  font-size: 25px;
}
/* End testimonials  */
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
