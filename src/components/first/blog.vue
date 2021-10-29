<template>
  <div class="blog">
    <h2 class="special-heading un-color">مقالات</h2>
    <swiper class="swiper" :direction="'vertical'" :freeMode="true">
      <swiper-slide>
        <div class="containe">
          <div
            class="card-container auto-heigh"
            v-for="item in blog.slice(0, 1)"
            :key="item"
          >
            <div class="card colum-card">
              <div class="card-body">
                <span class="card-number subtle">
                  Viewer
                  <span class="card-number card-circle subtle">
                    {{ item.views }}</span
                  ></span
                >

                <h2 class="card-title">{{ item.title }}</h2>
                <span class="card-description subtle" v-html="item.body"></span>

                <span class="card-tag tag-circle subtle">{{
                  item.keyword
                }}</span>
              </div>
            </div>
            <div class="card-shadow"></div>
          </div>

          <div
            class="card-container auto-heigh"
            v-for="item in blog.slice(1, 2)"
            :key="item"
          >
            <div class="card colum-card">
              <div class="card-body">
                <span class="card-number subtle">
                  Viewer
                  <span class="card-number card-circle subtle">
                    {{ item.views }}</span
                  ></span
                >

                <h2 class="card-title">{{ item.title }}</h2>
                <span class="card-description subtle" v-html="item.body"></span>

                <span class="card-tag tag-circle subtle">{{
                  item.keyword
                }}</span>
              </div>
            </div>
            <div class="card-shadow"></div>
          </div>
          <div>
            <div class="card-container auto-heigh">
              <div class="card">
                <div class="card-body">
                  <span class="card-number card-circle subtle">02</span>
                  <h2 class="card-title">عنوان المقالة</h2>
                  <span class="card-description subtle"
                    >عنوان المقالة عنوان المقالة عنوان المقالة عنوان المقالة
                    عنوان عنوان المقالة عنوان المقالة عنوان المقالة عنوان
                    المقالة عنوان المقالة.</span
                  >

                  <span class="card-tag card-circle subtle">tag</span>
                </div>
              </div>
              <div class="card-shadow"></div>
            </div>
            <div class="card-container auto-heigh">
              <div class="card">
                <div class="card-body">
                  <span class="card-number card-circle subtle">02</span>
                  <h2 class="card-title">عنوان المقالة</h2>
                  <span class="card-description subtle"
                    >عنوان المقالة عنوان المقالة عنوان المقالة عنوان المقالة
                    عنوان عنوان المقالة عنوان المقالة عنوان المقالة عنوان
                    المقالة عنوان المقالة.</span
                  >

                  <span class="card-tag card-circle subtle">tag</span>
                </div>
              </div>
              <div class="card-shadow"></div>
            </div>
            <div class="card-container auto-heigh">
              <div class="card">
                <div class="card-body">
                  <span class="card-number card-circle subtle">02</span>
                  <h2 class="card-title">عنوان المقالة</h2>
                  <span class="card-description subtle"
                    >عنوان المقالة عنوان المقالة عنوان المقالة عنوان المقالة
                    عنوان عنوان المقالة عنوان المقالة عنوان المقالة عنوان
                    المقالة عنوان المقالة.</span
                  >

                  <span class="card-tag card-circle subtle">tag</span>
                </div>
              </div>
              <div class="card-shadow"></div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide> </swiper-slide>
    </swiper>
  </div>

  <!-- End Blog -->
</template>
<style scoped>
/* Start Blog */
.subtle {
  color: #fff;
}
.blog {
  padding: 0 0 25px 0;
  background-color: var(--main-color);
  height: 400px;
  overflow: scroll;
  scrollbar-width: none;
}
.blog .containe {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 10px;
}
.blog .card-container {
  margin: 25px 0;
  position: relative;
  width: auto;
  height: 310px;
  cursor: pointer;
  transition: var(--main-duration);
}
.blog .card-container:hover {
  scale: 0.9;
}
.auto-heigh {
  height: auto !important;
}
.blog .card {
  background-color: #fff;
  padding: 10px;
  position: relative;
  box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  z-index: 1;
  display: flex;
}
.blog .card-body {
  width: 100%;
  display: grid;
  text-align: center;
  background: url("https://s15.postimg.cc/temvv7u4r/recipe.jpg") no-repeat;
  background-size: cover;
}

.blog .card-number {
  margin-top: 15px;
}

.blog .card-circle {
  border: 1px solid #fff;
  border-radius: 50%;
  display: inline-block;
  line-height: 22px;
  font-size: 13px;
  height: 25px;
  text-align: center;
  width: 25px;
  font-weight: bold;
  color: #fff;
}
.blog .tag-circle {
  border: 2px solid #fff;
  border-radius: 50%;
  display: inline-block;
  line-height: 22px;
  font-size: 13px;
  height: 50px;
  text-align: center;
  width: 60px;
  font-weight: bold;
  color: #fff;
}
.blog .card-author {
  display: block;
  font-size: 12px;
  letter-spacing: 0.5px;
  margin: 15px 0 0;
  text-transform: uppercase;
}

.blog .card-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 50px;
  font-weight: 300;
  line-height: 60px;
  margin: 10px 0;
  color: #fff;
}

.blog .card-description {
  display: inline-block;
  font-weight: 300;
  line-height: 22px;
  margin: 10px 0;
}
.blog .card-read span:hover {
  padding-inline-start: 10px;
  opacity: 0.9;
}
.blog .card-tag {
  float: right;
  margin: 5px 0 0;
  display: grid;
  align-items: center;
}

.blog .card-shadow {
  background-color: #fff;
  box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 1), 0 2px 50px 2px rgba(0, 0, 0, 1),
    0 0 100px 3px rgba(0, 0, 0, 0.25);
  height: 1px;
  margin: -1px auto 0;
  width: 80%;
  z-index: -1;
}
/* colum-card blog*/
.colum-card {
  display: flex;
  flex-direction: column-reverse;
}

/* End Blog */
</style>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

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
