<template>
    <TitlePage  :path="$route.name" />
  <div class="services-view">
    <!-- Start services -->
    <section id="services-menu" v-if="service.length > 0">
        <div class="services">
        <div class="container">
            <div class="services-container">
                <div class="srv-box box-a" v-for="item in service" :key="item">
                     <i :class="`${item.icon }`"></i>
                    <div class="text-details">
                        <h2>{{ item.title }}</h2>
                        <h4>{{ item.quote }}</h4>
                         <p v-html="item.desc"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <Unavailble :name="'Services'" v-else />
  </div>
  <!-- End services -->
</template>
<style lang="scss" scoped>
 @import "../assets/scss/_variables.scss";
 @import "../assets/scss/services-view.scss";
</style>
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
        .get(`/services?lang=${localStorage.getItem('lang')}`)
        .then((res) => {
          self.service = res.data.data.service;
          // console.log("service: ", res.data.data.service);
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
