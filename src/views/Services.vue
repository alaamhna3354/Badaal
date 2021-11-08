<template>
  <div class="services-view">
    <TitlePage :name="$route.name" :path="$route.name" />
    <!-- Start services -->
    <section id="services-menu" v-if="service.length > 0">
      <div class="main-heading">
        <h2>Services</h2>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Mauris blandit aliquet elit, eget tincidunt.
        </p>
      </div>
      <div class="services-menu-container container">
        <div class="services-menu-item" v-for="item in service" :key="item">
          <div class="services-img">
            <img v-lazy="item.icon" alt="" />
            <!-- <img v-lazy="'img/portfolio-2.jpg'" alt="" /> -->
          </div>
          <div class="services-description">
            <h2 class="services-titile">{{ item.title }}</h2>
            <p v-html="item.desc"></p>
            <p class="services-price">Price: &#8377; 250</p>
          </div>
        </div>
      </div>
    </section>
    <Unavailble :name="'Services'" v-else />
  </div>
  <!-- End services -->
</template>
<script>
import axios from "axios";
import TitlePage from "../components/global/title-page.vue";
import Unavailble from "../components/global/unavailble.vue";
export default {
  name: "about",
  data() {
    return {
      service: [],
    };
  },
  props: [""],
  components: { TitlePage, Unavailble },
  computed: {},
  methods: {
    async fetch() {
      var self = this;
      await axios
        .get(`http://badaelonline.com/backend/public/services`)
        .then((res) => {
          self.service = res.data.data.service;
          console.log("service: ", res.data.data.service);
        })
        .catch(function (error) {
          console.warn("Error service ", error.toJSON());
        });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
