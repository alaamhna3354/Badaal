<template>
  <section id="services-menu">
     <div class="main-heading">
            <h2>Services</h2>
            <p>
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                tincidunt.
            </p>
        </div>
    <div class="services-menu-container container">
      <div class="services-menu-item" v-for="item in service" :key="item">
        <div class="services-img">
          <img v-lazy="'img/portfolio-2.jpg'" alt="" />
        </div>
        <div class="services-description">
          <h2 class="services-titile">{{ item.icon }}</h2>
          <p>
            {{ item.title }}
          </p>
          <p class="services-price">Price: &#8377; 250</p>
        </div>
      </div>
    </div>
  </section>
</template>>
<script>
export default {
  name: "service",
  data() {
    return {};
  },
  props: ["service"],
  components: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
