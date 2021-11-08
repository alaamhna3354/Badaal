<template>
  <div class="home">
    <div class="setting" id="setting">
      <i class="fa fa-cog fa-2x fa-spin" aria-hidden="true"></i>
    </div>
    <div class="over-lay" id="over-lay" @click="toggleOverLay"></div>
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
              <h1>Header and Footer</h1>
            </div>
            <div style="padding: 25px 0">
              <label for="">{{ Headerswitch }} </label>
              <select v-model="Headerswitch">
                <option value="Header">Template 1</option>
                <option value="Header2">Template 2</option>
              </select>
            </div>
            <div style="padding: 25px 0">
              <label for="">{{ Footerswitch }}</label>
              <select v-model="Footerswitch">
                <option value="Footer">Template 1</option>
                <option value="Footer2">Template 2</option>
              </select>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="contain">
            <div>
              <h1>Switch component</h1>
            </div>
            <div>
              <label for="">{{ list[0].name }} </label>
              <select v-model="list[0].name">
                <option value="First_Featuers">Template 1</option>
                <option value="Seconde_Featuers">Template 2</option>
                <option value="Third_Featuers">Template 3</option>
              </select>
            </div>
            <div>
              <label for="">{{ list[1].name }}</label>
              <select v-model="list[1].name">
                <option value="First_About">Template 1</option>
                <option value="Seconde_About">Template 2</option>
                <option value="Third_About">Template 3</option>
              </select>
            </div>
            <div>
              <label for="">{{ list[5].name }} </label>
              <select v-model="list[5].name">
                <option value="First_Blog">Template 1</option>
                <option value="Seconde_Blog">Template 2</option>
                <!-- <option value="Third_Blog">Template 3</option> -->
              </select>
            </div>
            <div>
              <label for=""> {{ list[2].name }} </label>
              <select v-model="list[2].name">
                <option value="First_Portfolio">Template 1</option>
                <option value="Seconde_Portfolio">Template 2</option>
                <option value="Third_Portfolio">Template 3</option>
              </select>
            </div>
            <div>
              <label for="">{{ list[4].name }} </label>
              <select v-model="list[4].name">
                <option value="First_Partner">Template 1</option>
                <!-- <option value="Seconde_Partner">Template 2</option>
                 <option value="Third_Partner">Template 3</option> -->
              </select>
            </div>
            <div>
              <label for=""> {{ list[3].name }} </label>
              <select v-model="list[3].name">
                <option value="First_Services">Template 1</option>
                <option value="Seconde_Services">Template 2</option>
                <option value="Third_Services">Template 3</option>
              </select>
            </div>
            <div>
              <label for=""> {{ list[6].name }} </label>
              <select v-model="list[6].name">
                <option value="First_Testomonials">Template 1</option>
                <option value="Seconde_Testomonials">Template 2</option>
                <option value="Third_Testomonials">Template 3</option>
              </select>
            </div>
            <div>
              <label for="">{{ list[7].name }} </label>
              <select v-model="list[7].name">
                <option value="First_Team">Template 1</option>
                <option value="Seconde_Team">Template 2</option>
                <!-- <option value="Third_Team">Template 3</option> -->
              </select>
            </div>
            <div>
              <label for="">{{ list[8].name }} </label>
              <select v-model="list[8].name">
                <option value="First_Faq">Template 1</option>
                <!-- <option value="Seconde_Faq">Template 2</option>
                 <option value="Third_Faq">Template 3</option> -->
              </select>
            </div>
            <div>
              <label for="">{{ list[9].name }} </label>
              <select v-model="list[9].name">
                <option value="First_Contact">Template 1</option>
                <option value="Seconde_Contact">Template 2</option>
                <option value="Third_Contact">Template 3</option>
              </select>
            </div>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
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
        </swiper-slide> -->
        <swiper-slide>
          <div class="contain">
            <div>
              <h1>Choose Color</h1>
            </div>
            <div>
              <label for="">Main Color</label>
              <input
                type="text"
                v-model="main"
                placeholder="Example #fff"
                style="background: var(--main-color)"
              />
            </div>
            <div>
              <label for="">Secondary Color</label>
              <input
                type="text"
                v-model="secondary"
                placeholder="Example #fff"
                style="background: var(--secondary-color)"
              />
            </div>
            <div>
              <label for="">Title Section text</label>
              <input
                type="text"
                v-model="titleSection"
                placeholder="Example #fff"
                style="color: var(--titleSection-color)"
              />
            </div>
            <div>
              <button class="botun" @click="setnewvalue">set new value</button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <draggable
      class="dragArea list-group w-full"
      :list="list"
      @change="log"
      :sort="false"
    >
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        handle=".handle"
        v-for="item in list.slice(0, 5)"
        :key="item"
      >
        <component
          :is="item.name"
          :banner="banner"
          :portfolio="portfolio"
          :partner="partner"
          :service="service"
          :about="about"
        />
      </div>

      <!-- <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center">
    <component
      :is="firstOrSecondblog"
      id="blog"
      :blog="blog"
      :style="{ order: sorting.blog }"
    />
    </div> -->
      <!-- <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center">
   <component
      :is="firstOrSecondtestomonials"
      id="testimonials"
      :style="{ order: sorting.testimonials }"
    />
    </div> -->
      <!-- <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center">
  
    <component
      :is="firstOrSecondteam"
      id="team"
      :style="{ order: sorting.team }"
    />
    </div> -->
      <!-- <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center">
  <component
      :is="firstOrSecondfaq"
      id="faq"
      :style="{ order: sorting.faq }"
    />
    </div> -->
      <!-- <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center">
   <component
      :is="firstOrSecondcontact"
      id="contact"
      :style="{ order: sorting.contact }"
    />
    </div> -->
    </draggable>
  </div>
</template>
<script>
import SwiperCore, { Navigation, Parallax } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Navigation, Parallax]);
import axios from "axios";
import { defineAsyncComponent } from "vue";
import { defineComponent } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
// const baseURL = "http://localhost:3001/data"; // https://developer.school/tutorials/how-to-use-vue-js-json-server-and-axios
export default defineComponent({
  name: "Home",
  components: {
    draggable: VueDraggableNext,
    First_Featuers: defineAsyncComponent(() =>
      import("../components/first/featuers.vue")
    ),
    First_About: defineAsyncComponent(() =>
      import("../components/first/about.vue")
    ),
    First_Blog: defineAsyncComponent(() =>
      import("../components/first/blog.vue")
    ),
    First_Portfolio: defineAsyncComponent(() =>
      import("../components/first/portfolio.vue")
    ),
    First_Partner: defineAsyncComponent(() =>
      import("../components/first/partner.vue")
    ),
    First_Services: defineAsyncComponent(() =>
      import("../components/first/services.vue")
    ),
    First_Testomonials: defineAsyncComponent(() =>
      import("../components/first/testomonials.vue")
    ),
    First_Team: defineAsyncComponent(() =>
      import("../components/first/team.vue")
    ),
    First_Faq: defineAsyncComponent(() =>
      import("../components/first/faq.vue")
    ),
    First_Contact: defineAsyncComponent(() =>
      import("../components/first/contact.vue")
    ),
    // //  Seconde component
    Seconde_Featuers: defineAsyncComponent(() =>
      import("../components/seconde/featuers.vue")
    ),
    Seconde_About: defineAsyncComponent(() =>
      import("../components/seconde/about.vue")
    ),
    Seconde_Blog: defineAsyncComponent(() =>
      import("../components/seconde/blog.vue")
    ),
    Seconde_Portfolio: defineAsyncComponent(() =>
      import("../components/seconde/portfolio.vue")
    ),
    Seconde_Partner: defineAsyncComponent(() =>
      import("../components/seconde/partner.vue")
    ),
    Seconde_Services: defineAsyncComponent(() =>
      import("../components/seconde/services.vue")
    ),
    Seconde_Testomonials: defineAsyncComponent(() =>
      import("../components/seconde/testomonials.vue")
    ),
    Seconde_Team: defineAsyncComponent(() =>
      import("../components/seconde/team.vue")
    ),
    Seconde_Faq: defineAsyncComponent(() =>
      import("../components/seconde/faq.vue")
    ),
    Seconde_Contact: defineAsyncComponent(() =>
      import("../components/seconde/contact.vue")
    ),
    // //  Third component
    Third_Featuers: defineAsyncComponent(() =>
      import("../components/third/featuers.vue")
    ),
    Third_About: defineAsyncComponent(() =>
      import("../components/third/about.vue")
    ),
    Third_Blog: defineAsyncComponent(() =>
      import("../components/third/blog.vue")
    ),
    Third_Portfolio: defineAsyncComponent(() =>
      import("../components/third/portfolio.vue")
    ),
    Third_Partner: defineAsyncComponent(() =>
      import("../components/third/partner.vue")
    ),
    Third_Services: defineAsyncComponent(() =>
      import("../components/third/services.vue")
    ),
    Third_Testomonials: defineAsyncComponent(() =>
      import("../components/third/testomonials.vue")
    ),
    Third_Team: defineAsyncComponent(() =>
      import("../components/third/team.vue")
    ),
    Third_Faq: defineAsyncComponent(() =>
      import("../components/third/faq.vue")
    ),
    Third_Contact: defineAsyncComponent(() =>
      import("../components/third/contact.vue")
    ),
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      list: [
        { name: "First_Featuers", id: 1 },
        { name: "First_About", id: 2 },
        { name: "First_Portfolio", id: 3 },
        { name: "First_Services", id: 4 },
        { name: "First_Partner", id: 5 },
        { name: "First_Blog", id: 6 },
        { name: "First_Testomonials", id: 7 },
        { name: "First_Team", id: 8 },
        { name: "First_Faq", id: 9 },
        { name: "First_Contact", id: 10 },
      ],
      general: [],
      banner: [],
      about: [],
      blog: [],
      portfolio: [],
      partner: [],
      service: [],
      main: "",
      secondary: "",
      titleSection: "",
      roots: {
        white_color: "#fff",
        main_color: "#e1f0f9",
        secondary_color: "#2c4755",
        titleSection_color: "#1daad2",
        section_padding: "50px",
        main_duration: "0.5s",
      },
    };
  },
  methods: {
    log() {
      console.log(this.list);
    },
    toggleOverLay() {
      document.getElementById("controler").classList.toggle("show");
      document.getElementById("over-lay").classList.toggle("show");
    },
    setnewvalue() {
      this.roots.main_color = this.main;
      this.roots.secondary_color = this.secondary;
      this.roots.titleSection_color = this.titleSection;

      document.documentElement.style.setProperty(
        "--main-color",
        this.roots.main_color
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        this.roots.secondary_color
      );
      document.documentElement.style.setProperty(
        "--titleSection-color",
        this.roots.titleSection_color
      );
    },
    async fetch() {
      var self = this;
      await axios
        .get(`http://badaelonline.com/backend/public/`)
        .then((res) => {
          self.general = res.data.data.general;
          self.banner = res.data.data.banner;
          self.about = res.data.data.about;
          self.blog = res.data.data.lpost;
          self.portfolio = res.data.data.portfolio;
          self.partner = res.data.data.partner;
          self.service = res.data.data.service;
          console.log("general: ", res.data.data.general);
        })
        .catch(function (error) {
          console.warn("Error fetch home ", error.toJSON());
        });
    },
  },
  computed: {
    Headerswitch: {
      get() {
        return this.$store.state.Headerswitch;
      },
      set(Headerswitch) {
        this.$store.commit("SET_Header", Headerswitch);
      },
    },
    Footerswitch: {
      get() {
        return this.$store.state.Footerswitch;
      },
      set(Footerswitch) {
        this.$store.commit("SET_Footer", Footerswitch);
      },
    },
  },
  mounted() {
    // this.getJson();
    document.documentElement.style.setProperty(
      "--white-color",
      this.roots.white_color
    );
    document.documentElement.style.setProperty(
      "--main-color",
      this.roots.main_color
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      this.roots.secondary_color
    );
    document.documentElement.style.setProperty(
      "--titleSection-color",
      this.roots.titleSection_color
    );
    document.documentElement.style.setProperty(
      "--section-padding",
      this.roots.section_padding
    );
    document.documentElement.style.setProperty(
      "--main-duration",
      this.roots.main_duration
    );
    // reqeust api
    this.fetch();
    // open and close setting
    window.addEventListener("click", function (e) {
      if (document.getElementById("setting").contains(e.target)) {
        document.getElementById("controler").classList.toggle("show");
        document.getElementById("over-lay").classList.toggle("show");
      }
    });
  },
});
</script>
