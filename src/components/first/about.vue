<template>
  <!-- Start About -->
  <div class="about1" v-if="about">
    <div class="main-heading">
      <h2>About Us</h2>
    </div>
    <div class="container">
      <div>
        <h1>{{ about.title }}</h1>
        <p>{{ about.subject }}</p>
      </div>
      <p class="right" v-html="about.desc"></p>
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
    return {};
  },

  props: ["about"],
  components: { Unavailble },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
