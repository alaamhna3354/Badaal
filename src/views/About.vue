<template>
  <!-- Start about -->
     <TitlePage  :path="$route.name" />
  <div class="about-view" :about="about">
       <FirstFeatuers :banner="banner" :about="about"
       style="margin-top: -143px;" />
   
    <!--  <div class="container">
     <div class="text">
        <h1>{{ about.title }}</h1>
        <p>{{ about.subject }}</p>
      </div>
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
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
        <div class="nav-indicator nextArrow">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
      <swiper-slide class="parallax-slide">
          <div style="width: 250px;"
            class="parallax-slide-image"
            :data-swiper-parallax="parallaxAmount"
            :data-swiper-parallax-opacity="0.5"
          >
            <img  style="max-width: 100%;" v-lazy="`img/manger.jpg`" />
          </div>
      </swiper-slide>
            <swiper-slide class="parallax-slide">
         <div style="width: 250px;"
            class="parallax-slide-image"
            :data-swiper-parallax="parallaxAmount"
            :data-swiper-parallax-opacity="0.5"
          >
            <img style="max-width: 100%;" v-lazy="`img/manger.jpg`" />
          </div>
      </swiper-slide>
            <swiper-slide class="parallax-slide">
         <div style="width: 250px;"
            class="parallax-slide-image"
            :data-swiper-parallax="parallaxAmount"
            :data-swiper-parallax-opacity="0.5"
          >
            <img style="max-width: 100%;" v-lazy="`img/manger.jpg`" />
          </div>
      </swiper-slide>
    </swiper>
    </div> -->
    <!-- Our Skills -->
<!--    <div class="main-heading">
                <h2>Our Skills</h2>
            </div> -->
       <div class="skills" id="skills">
        <div class="container">
          <p class="right" v-html="about.desc"></p>
            <!-- <div class="contain">
         
                <div class="prog-holer">
                    <h4>Html</h4>
                    <div class="prog">
                        <span style=" width: 0%;" data-progress="90%"></span>
                    </div>
                </div>
                <div class="prog-holer">
                    <h4>Css</h4>
                    <div class="prog">
                        <span style=" width: 0%;" data-progress="95%"></span>
                    </div>
                </div>
                <div class="prog-holer">
                    <h4>JavaScript</h4>
                    <div class="prog">
                        <span style=" width: 0%;" data-progress="85%"></span>
                    </div>
                </div>
                <div class="prog-holer">
                    <h4>Vue.Js</h4>
                    <div class="prog">
                        <span style=" width: 0%;" data-progress="80%"></span>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
    <!-- End about -->
    <!-- Start partner -->
    <FirstPartner :partner="partner" />
    <!-- End partner -->
    <!-- Starr Faq -->
    <!-- <section class="faq-section">
      <div class="container">
        <div class="row" style="width:90%">
          <div class="col-md-6 offset-md-3">
            <div class="faq-title text-center pb-3">
              <h2>{{$t('Faq')}}</h2>
            </div>
          </div>
          <div class="col-md-6 offset-md-3">
            <div class="faq">
              <div class="card" v-for="item in faq" :key="item">
                <div
                  class="card-header"
                  :class="{ active: item.open }"
                  @click="item.open = !item.open"
                >
                  <div class="mb-0">
                    <h5
                      class="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-1"
                      data-aria-expanded="true"
                      data-aria-controls="faqCollapse-1"
                    >
                      <span class="badge">{{ item.id }}</span
                      >{{ item.question }}
                    </h5>
                  </div>
                </div>
                <div class="collapse" v-show="item.open">
                  <div class="card-body">
                    <p>
                      {{ item.answer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- End Faq -->
  </div>
  <!-- End about -->
</template>
<style lang="scss" scoped>
 @import "../assets/scss/_variables.scss";
 @import "../assets/scss/about-view.scss";
//  @import "../assets/scss/firstcomponents/faq.scss";
</style>
<script>
import axios from "axios";
// import SwiperCore, { Navigation, Parallax } from "swiper";
// // Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// SwiperCore.use([Navigation, Parallax]);
import { defineAsyncComponent } from "vue";
import { mapState } from 'vuex';
export default {
  name: "about",
  data() {
    return {
      about: [],
      faq: [],
    };
  },
  props: [""],
  components: { 
    // Swiper,SwiperSlide,
    FirstFeatuers: defineAsyncComponent(() =>
      import("../components/first/featuers.vue")
    ),
      FirstPartner: defineAsyncComponent(() =>
      import("../components/first/partner.vue")
    ),
          TitlePage: defineAsyncComponent(() =>
      import("../components/global/title-page.vue")
    ),
},
  computed: {
    parallaxAmount() {
      return this.parallaxSwiperWidth * 0.5;
    },
    ...mapState([
      'partner','banner'
    ]),
  },
  methods: {
     onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
    async fetch() {
      var self = this;
      await axios
        .get(`/about-us`) //about-us
        .then((res) => {
          self.about = res.data.data.about;
          self.faq = res.data.data.faq;

          // console.log("team: ", res.data.data.team);
        })
        .catch(function (error) {
          console.warn("Error fetch about ", error.toJSON());
        });
    },
  },
  mounted() {
    this.fetch();
    // animation width of skills
let sectionSlills = document.getElementById('skills');
let spans = document.querySelectorAll('.prog span');
window.onscroll = function () {
    if ((window.scrollY +200) >= sectionSlills.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.progress;
            span.classList.remove('zero')
        });
    }
};
  },
};
</script>
