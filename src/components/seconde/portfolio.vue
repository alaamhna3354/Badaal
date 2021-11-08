<template>
  <!-- Start Portfolio -->
  <section class="Portfolio" id="Portfolio">
    <h2 class="head">أعمالنا</h2>
    <div class="Portfolio-container container">
      <div class="Portfolio-type " v-for="item in portfolio" :key="item">
        <div class="img-container">
          <img v-lazy="'img/portfolio-1.jpg'" alt="error" />
          <div class="img-content">
            <h3>{{ item.name }}</h3>
            <a href="#" class="botun botun-primary" target="blank">زبارة</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Portfolio -->
</template>
<script>
export default {
  name: "portfolio",
  data() {
    return {};
  },
  props: ["portfolio"],
  components: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
