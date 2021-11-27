<template>
  <!-- Start About -->
  <div class="about1" v-if="about">
    <div class="main-heading">
      <h2>About Us</h2>
    </div>
    <div class="container">
      <div class="info">
        <h1>{{ about.title }}</h1>
        <p>{{ about.subject }}</p>
          <div><router-link to="/about"><button class="botun">Learn More</button></router-link></div>
      </div>
      <div class="bubble-wrapper">
    <div class="contain-bub">
    <div class="bubble bub1">
     <i class="icofont-file-html5"></i>
    </div>
     <h3>Html</h3>
     </div>
    <div class="contain-bub">
     <div class="bubble bub2">
    <i class="icofont-file-css"></i>
    </div>
     <h3>Css</h3>
     </div>
    <div class="contain-bub">
    <div class="bubble bub3">
      <i class="icofont-file-javascript"></i>
    </div>
     <h3>Js</h3>
     </div>
    <div class="contain-bub">
     <div class="bubble bub4">
       <i class="icofont-brand-louis-vuitton"></i>
    </div>
      <h3>Larvel & Vue.js</h3>
     </div>



  </div>
    </div>
  </div>
  <Unavailble :name="'About'" v-else />
  <!-- End About -->
</template>
<script>
import Unavailble from "../global/unavailble.vue";
export default {
  name: "about",
  data() {
    return {
      
    };
  },

  props: ["about"],
  components: { Unavailble },
  computed: {},
  methods: {},
   mounted() {
 
  }
};
</script>
