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
                <img  v-lazy="`${GlobalUrl}/storage/${item.cover}`" alt="">
                <span class="card-number subtle">
                  Viewer
                  <span class="card-number card-circle subtle">
                    {{ item.views }}</span
                  ></span
                >

                <h2 class="card-title">{{ item.title }}</h2>
                <span class="card-description subtle" v-html="item.body"></span>
                <!-- <div style="text-align: justify;"><span style="font-family: Poppins; font-size: 1rem; background-color: rgb(255, 255, 255);"><font color="#000000">Why do we use it?
</font></span></div><div style="text-align: justify;"><span style="color: rgb(17, 17, 17); font-family: &quot;Open Sans&quot;, sans-serif; text-align: left;">Sample text.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien lorem, finibus sed maximus dictum, sodales eget dui. Nullam aliquam diam ut est eleifend, et molestie erat rutrum. Mauris et erat condimentum, iaculis nunc id, lacinia dolor. Integer consequat nisi interdum libero.&nbsp;</span><br></div> -->
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
                <img v-lazy="'https://s15.postimg.cc/temvv7u4r/recipe.jpg'" alt="">

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
                <img v-lazy="'https://s15.postimg.cc/temvv7u4r/recipe.jpg'" alt="">          
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
                <img v-lazy="'https://s15.postimg.cc/temvv7u4r/recipe.jpg'" alt="">
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
                <img v-lazy="'https://s15.postimg.cc/temvv7u4r/recipe.jpg'" alt="">
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
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { mapState } from 'vuex';
export default {
  name: "blog",
  data() {
    return {};
  },
  props: ["blog"],
  components: { Swiper, SwiperSlide },
  computed: {
    ...mapState([
      'GlobalUrl'
    ])
  },
  methods: {},
  mounted() {},
};
</script>
