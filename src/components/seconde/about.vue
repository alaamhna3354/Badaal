<template>
  <section id="about">
    <div class="about-wrapper container">
      <div class="about-text">
        <p class="small">{{ title }}</p>
        <h2>{{ subject }}</h2>
        <p v-html="desc"></p>
      </div>
      <div class="about-img">
        <img v-lazy="'img/manger.jpg'" alt="manger" />
      </div>
    </div>
  </section>
  <!-- End About -->
</template>
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
 @import "../../assets/scss/secondecomponents/about.scss";
</style>
<script>
export default {
  name: "about",
  data() {
    return {};
  },
  props: ["title", "subject", "desc"],
  components: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
