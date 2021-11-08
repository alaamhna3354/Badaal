<template>
  <!-- Start about -->
  <div class="portfolio-view">
    <TitlePage :name="$route.name" :path="$route.name" />

    <div class="portfolio" v-if="portfolio.length > 0">
      <div class="main-heading">
        <h2>Portfolio</h2>
      </div>
      <div class="container">
        <ul class="shuffle">
          <li
            v-for="(filterItem, index) in pcategories"
            :key="index"
            :class="{ active: items[index].item }"
            @click="activeToggle(index)"
          >
            {{ filterItem.name }}
          </li>
        </ul>
      </div>
      <div class="imgs-container">
        <div class="box" v-for="item in portfolio" :key="item">
          <img v-lazy="item.cover" alt="" />
          <!-- <img v-lazy="'img/shuffle-01.jpg'" alt="" /> -->
          <div class="caption">
            <h4>{{ item.name }}</h4>
            <p v-html="item.desc"></p>
          </div>
        </div>
      </div>
    </div>
    <Unavailble :name="'Portfolio'" v-else />
  </div>
  <!-- End about -->
</template>
<script>
import axios from "axios";
import TitlePage from "../components/global/title-page.vue";
import Unavailble from "../components/global/unavailble.vue";
export default {
  name: "about",
  data() {
    return {
      portfolio: [],
      pcategories: [],
      items: [
        { item: true },
        { item: false },
        { item: false },
        { item: false },
        { item: false },
      ],
    };
  },
  props: [""],
  components: { TitlePage, Unavailble },
  computed: {},
  methods: {
    async fetch() {
      var self = this;
      await axios
        .get(`http://badaelonline.com/backend/public/portfolio`)
        .then((res) => {
          self.portfolio = res.data.data.portfolio;
          console.log("portfolio: ", res.data.data.portfolio);
        })
        .catch(function (error) {
          console.warn("Error portfolio ", error.toJSON());
        });
      // pcategories for filter
      await axios
        .get(`http://badaelonline.com/backend/public/`)
        .then((res) => {
          self.pcategories = res.data.data.pcategories;
          console.log("pcategories: ", res.data.data.pcategories);
        })
        .catch(function (error) {
          console.warn("Error pcategories ", error.toJSON());
        });
    },
    activeToggle(id) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].item = false;
      }
      this.items[id].item = true;
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
