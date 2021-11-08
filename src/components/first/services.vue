<template>
  <!-- Start services3 -->
  <div class="services3" v-if="service.length > 0">
    <div class="main-heading">
      <h2>Services</h2>
      <p>
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris
        blandit aliquet elit, eget tincidunt.
      </p>
    </div>
    <div class="container">
      <div class="has-outline" v-for="item in service" :key="item">
        <h4>{{ item.title }}</h4>
        <h3>{{ item.quote }}</h3>
      </div>
    </div>
  </div>
  <Unavailble :name="'About'" v-else />
  <!-- End services3 -->
</template>
<style lang="scss" scoped>
$secondryColor: #286f82;
.main-heading {
  text-align: center;
  h2 {
    color: #fff;
    &::before {
      background-color: #fff;
    }
    &::after {
      border: 2px solid #fff;
      background-color: #2c4755;
    }
  }
  p {
    color: #fff;
  }
}
</style>
<script>
import Unavailble from "../global/unavailble.vue";
export default {
  name: "service",
  data() {
    return {};
  },
  props: ["service"],
  components: { Unavailble },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
