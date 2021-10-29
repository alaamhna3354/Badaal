<template>
  <div class="home">
    <div class="setting" id="setting">
      <i class="fa fa-cog fa-2x fa-spin" aria-hidden="true"></i>
    </div>
    <div class="controler" id="controler">
      <swiper
        class="swiper"
        :slides-per-view="1"
        :space-between="50"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :speed="1000"
      >
        <div class="parallax-slider-navigation">
          <div class="nav-indicator prevArrow">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </div>
          <div class="nav-indicator nextArrow">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
        </div>
        <swiper-slide>
          <div class="contain">
            <div>
              <h1>Switch component</h1>
            </div>
            <div>
              <label for="">{{ firstOrSecondfeatuers }} </label>
              <label class="switch">
                <input type="checkbox" @click="switchfeatuers" />
                <div class="slider round"></div>
              </label>
            </div>
            <div>
              <label for="">{{ firstOrSecondabout }}</label>
              <label class="switch">
                <input type="checkbox" @click="switchabout" />
                <div class="slider round"></div>
              </label>
            </div>
            <div>
              <label for="">{{ firstOrSecondblog }} </label>
              <label class="switch">
                <input type="checkbox" @click="switchblog" />
                <div class="slider round"></div>
              </label>
            </div>
            <div>
              <label for=""> {{ firstOrSecondportfolio }} </label>
              <label class="switch">
                <input type="checkbox" @click="switchportfolio" />
                <div class="slider round"></div>
              </label>
            </div>
            <div>
              <label for="">{{ firstOrSecondpartner }} </label>
              <label class="switch">
                <input type="checkbox" @click="switchpartner" />
                <div class="slider round"></div>
              </label>
            </div>
            <div>
              <label for=""> {{ firstOrSecondservices }} </label>
              <label class="switch">
                <input type="checkbox" @click="switchservices" />
                <div class="slider round"></div>
              </label>
            </div>
            <div>
              <label for=""> {{ firstOrSecondtestomonials }} </label>
              <label class="switch">
                <input type="checkbox" @click="switchtestomonials" />
                <div class="slider round"></div>
              </label>
            </div>
            <div>
              <label for="">{{ firstOrSecondteam }} </label>
              <label class="switch">
                <input type="checkbox" @click="switchteam" />
                <div class="slider round"></div>
              </label>
            </div>
            <div>
              <label for="">{{ firstOrSecondfaq }} </label>
              <label class="switch">
                <input type="checkbox" @click="switchfaq" />
                <div class="slider round"></div>
              </label>
            </div>
            <div>
              <label for="">{{ firstOrSecondcontact }} </label>
              <label class="switch">
                <input type="checkbox" @click="switchcontact" />
                <div class="slider round"></div>
              </label>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="contain">
            <div>
              <h1>Sort Sections</h1>
            </div>
            <div>
              <label for="">featuers </label>
              <input type="number" v-model="sorting.featuers" />
            </div>
            <div>
              <label for="">about </label>
              <input type="number" v-model="sorting.about" />
            </div>
            <div>
              <label for="">blog </label>
              <input type="number" v-model="sorting.blog" />
            </div>
            <div>
              <label for="">portfolio </label>
              <input type="number" v-model="sorting.portfolio" />
            </div>
            <div>
              <label for="">partner </label>
              <input type="number" v-model="sorting.partner" />
            </div>
            <div>
              <label for="">service </label>
              <input type="number" v-model="sorting.service" />
            </div>
            <div>
              <label for="">testimonials </label>
              <input type="number" v-model="sorting.testimonials" />
            </div>
            <div>
              <label for="">team </label>
              <input type="number" v-model="sorting.team" />
            </div>
            <div>
              <label for="">faq </label>
              <input type="number" v-model="sorting.faq" />
            </div>
            <div>
              <label for="">contact </label>
              <input type="number" v-model="sorting.contact" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <component
      :is="firstOrSecondfeatuers"
      id="featuers"
      :style="{ order: sorting.featuers }"
    />
    <component
      :is="firstOrSecondabout"
      id="about"
      :title="about.title"
      :subject="about.subject"
      :desc="about.desc"
      :style="{ order: sorting.about }"
    />
    <component
      :is="firstOrSecondblog"
      id="blog"
      :blog="blog"
      :style="{ order: sorting.blog }"
    />
    <component
      :is="firstOrSecondportfolio"
      id="portfolio"
      :portfolio="portfolio"
      :style="{ order: sorting.portfolio }"
    />
    <component
      :is="firstOrSecondpartner"
      id="partner"
      :partner="partner"
      :style="{ order: sorting.partner }"
    />
    <component
      :is="firstOrSecondservices"
      id="service"
      :service="service"
      :style="{ order: sorting.service }"
    />
    <component
      :is="firstOrSecondtestomonials"
      id="testimonials"
      :style="{ order: sorting.testimonials }"
    />
    <component
      :is="firstOrSecondteam"
      id="team"
      :style="{ order: sorting.team }"
    />
    <component
      :is="firstOrSecondfaq"
      id="faq"
      :style="{ order: sorting.faq }"
    />
    <component
      :is="firstOrSecondcontact"
      id="contact"
      :style="{ order: sorting.contact }"
    />
  </div>
</template>
<style scoped>
.parallax-slider-navigation {
  position: absolute;
  top: 95%;
  z-index: 11;
  left: 40%;
  right: 40%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 0;
}
.nav-indicator {
  height: 40px;
  width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #8ca8b796;
  color: #464242;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%);
}

.home {
  display: flex;
  flex-direction: column;
  position: relative;
}
.setting {
  position: fixed;
  padding: 10px;
  background-color: #0000001f;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  z-index: 100;
  cursor: pointer;
  display: grid;
  top: 10%;
}
.setting i {
  color: #2c4755;
}
.controler {
  position: fixed;
  z-index: 99;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(#9ec5e88a, #82828296 70%, #7582a43d);
  background-size: cover;
  color: #282a2b;
  top: 0;
  left: -100%;
  transition: var(--main-duration);
  overflow: hidden;
}
.controler .swiper-pagination {
  bottom: 0px !important;
}
.controler .contain {
  width: 80%;
  margin: auto;
  margin-top: auto;
  border: 1px solid #5b74b0;
  background-color: #f0f8ff42;
  box-shadow: 1px 3px 15px black;
  height: 90%;
  margin-top: 30px;
}
.controler .contain div {
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
}
/* Small devices (landscape phones, 576px and up) */
@media (max-width: 767.98px) {
  .controler {
    width: 70%;
  }
}
.show {
  left: 0;
}

.controler div:not(:last-child, :first-child) {
  border-bottom: 1px solid #fff;
}
input {
  width: 60px;
  height: 25px;
  border: none;
  text-align: center;
  background-image: linear-gradient(#9ec5e8, #828282 70%, #7582a4);
  border-radius: 5px;
  color: #4e5553;
  font-weight: bold;
}
input:focus {
  outline: 0;
}
label {
  font-size: 22px;
  width: 100px;
}
/* switch button */
.controler .switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 38px;
}

.controler .switch input {
  display: none;
}

.controler .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #628bd9;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.controler .slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.controler input:checked + .slider {
  background-color: #50b94d;
}

.controler input:focus + .slider {
  box-shadow: 0 0 1px #50b94d;
}

.controler input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.controler .slider.round {
  border-radius: 34px;
}

.controler .slider.round:before {
  border-radius: 50%;
}
</style>
<script>
import SwiperCore, { Navigation, Parallax } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation, Parallax]);
import axios from "axios";
// import First component
import First_Featuers from "../components/first/featuers.vue";
import First_About from "../components/first/about.vue";
import First_Blog from "../components/first/blog.vue";
import First_Portfolio from "../components/first/portfolio.vue";
import First_Partner from "../components/first/partner.vue";
import First_Services from "../components/first/services.vue";
import First_Testomonials from "../components/first/testomonials.vue";
import First_Team from "../components/first/team.vue";
import First_Faq from "../components/first/faq.vue";
import First_Contact from "../components/first/contact.vue";
// import Seconde component
import Seconde_Featuers from "../components/seconde/featuers.vue";
import Seconde_About from "../components/seconde/about.vue";
import Seconde_Blog from "../components/seconde/blog.vue";
import Seconde_Portfolio from "../components/seconde/portfolio.vue";
import Seconde_Partner from "../components/seconde/partner.vue";
import Seconde_Services from "../components/seconde/services.vue";
import Seconde_Testomonials from "../components/seconde/testomonials.vue";
import Seconde_Team from "../components/seconde/team.vue";
import Seconde_Faq from "../components/seconde/faq.vue";
import Seconde_Contact from "../components/seconde/contact.vue";
export default {
  name: "Home",
  components: {
    // First component
    First_Featuers,
    First_About,
    First_Blog,
    First_Portfolio,
    First_Partner,
    First_Services,
    First_Testomonials,
    First_Team,
    First_Faq,
    First_Contact,
    //  SecondeSeconde component
    Seconde_Featuers,
    Seconde_About,
    Seconde_Blog,
    Seconde_Portfolio,
    Seconde_Partner,
    Seconde_Services,
    Seconde_Testomonials,
    Seconde_Team,
    Seconde_Faq,
    Seconde_Contact,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      firstOrSecondfeatuers: "First_Featuers",
      firstOrSecondabout: "First_About",
      firstOrSecondblog: "First_Blog",
      firstOrSecondportfolio: "First_Portfolio",
      firstOrSecondpartner: "First_Partner",
      firstOrSecondservices: "First_Services",
      firstOrSecondtestomonials: "First_Testomonials",
      firstOrSecondteam: "First_Team",
      firstOrSecondfaq: "First_Faq",
      firstOrSecondcontact: "First_Contact",
      sorting: {
        featuers: 1,
        about: 2,
        blog: 3,
        portfolio: 4,
        partner: 5,
        service: 6,
        testimonials: 7,
        team: 8,
        faq: 9,
        contact: 10,
      },
      about: [],
      blog: [],
      portfolio: [],
      partner: [],
      service: [],
    };
  },
  computed: {},
  methods: {
    switchfeatuers() {
      if (this.firstOrSecondfeatuers === "First_Featuers") {
        this.firstOrSecondfeatuers = "Seconde_Featuers";
      } else {
        this.firstOrSecondfeatuers = "First_Featuers";
      }
    },
    switchabout() {
      if (this.firstOrSecondabout === "First_About") {
        this.firstOrSecondabout = "Seconde_About";
      } else {
        this.firstOrSecondabout = "First_About";
      }
    },
    switchportfolio() {
      if (this.firstOrSecondportfolio === "First_Portfolio") {
        this.firstOrSecondportfolio = "Seconde_Portfolio";
      } else {
        this.firstOrSecondportfolio = "First_Portfolio";
      }
    },
    switchservices() {
      if (this.firstOrSecondservices === "First_Services") {
        this.firstOrSecondservices = "Seconde_Services";
      } else {
        this.firstOrSecondservices = "First_Services";
      }
    },
    switchtestomonials() {
      if (this.firstOrSecondtestomonials === "First_Testomonials") {
        this.firstOrSecondtestomonials = "Seconde_Testomonials";
      } else {
        this.firstOrSecondtestomonials = "First_Testomonials";
      }
    },
    switchcontact() {
      if (this.firstOrSecondcontact === "First_Contact") {
        this.firstOrSecondcontact = "Seconde_Contact";
      } else {
        this.firstOrSecondcontact = "First_Contact";
      }
    },
    switchteam() {
      if (this.firstOrSecondteam === "First_Team") {
        this.firstOrSecondteam = "Seconde_Team";
      } else {
        this.firstOrSecondteam = "First_Team";
      }
    },
    switchblog() {
      if (this.firstOrSecondblog === "First_Blog") {
        this.firstOrSecondblog = "Seconde_Blog";
      } else {
        this.firstOrSecondblog = "First_Blog";
      }
    },
    switchpartner() {
      if (this.firstOrSecondpartner === "First_Partner") {
        this.firstOrSecondpartner = "Seconde_Partner";
      } else {
        this.firstOrSecondpartner = "First_Partner";
      }
    },
    switchfaq() {
      if (this.firstOrSecondfaq === "First_Faq") {
        this.firstOrSecondfaq = "Seconde_Faq";
      } else {
        this.firstOrSecondfaq = "First_Faq";
      }
    },
    async fetch() {
      var self = this;
      await axios
        .get(`http://badaelonline.com/backend/public/`)
        .then((res) => {
          self.about = res.data.data.about;
          self.blog = res.data.data.lpost;
          self.portfolio = res.data.data.portfolio;
          self.partner = res.data.data.partner;
          self.service = res.data.data.service;
          console.log("service: ", res.data.data.service);
        })
        .catch(function (error) {
          console.warn("Error blog ", error.toJSON());
        });
    },
  },
  mounted() {
    this.fetch();

    window.addEventListener("click", function (e) {
      if (document.getElementById("setting").contains(e.target)) {
        document.getElementById("controler").classList.toggle("show");
      }
    });
  },
};
</script>
