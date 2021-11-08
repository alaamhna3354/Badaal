<template>
  <div class="about3">
    <div class="container">
      <h2 class="special-heading">من نحن</h2>
      <div class="about3-content">
        <div class="image" data-aos="fade-left" data-aos-duration="1500">
          <img v-lazy="'img/manger.jpg'" alt="" />
        </div>
        <div class="text" data-aos="fade-right" data-aos-duration="1500">
          <h1>{{ title }}</h1>
          <p>
            {{ subject }}
          </p>
          <hr />
          <p v-html="desc"></p>
          <a href="#"
            ><button class="botun">
              من نحن<i class="fa fa-users" aria-hidden="true"></i></button
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- End about3 -->
</template>

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
