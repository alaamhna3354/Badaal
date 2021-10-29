<template>
  <section id="services-menu">
    <h2 class="services-menu-heading">services Menu</h2>
    <div class="services-menu-container container">
      <div class="services-menu-item" v-for="item in service" :key="item">
        <div class="services-img">
          <img src="../../assets/img/portfolio-2.jpg" alt="" />
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
</template>
<style scoped>
/* .........../services Menu/............ */

.services-menu-heading {
  text-align: center;
  font-size: 3.4rem;
  font-weight: 400;
  color: #666;
}

.services-menu-container {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0px 30px 0px;
}

.services-menu-container img {
  display: block;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.services-menu-item {
  display: flex;
  flex: 1 1 400px;
  justify-content: space-evenly;
  margin-bottom: 3rem;
}

.services-description {
  margin: auto 1.5rem;
}

.font-title {
  font-size: 1.8rem;
  font-weight: 400;
  color: #444;
}

.services-description p {
  font-size: 1.4rem;
  color: #555;
  font-weight: 500;
}

.services-description .services-price {
  color: #117964;
  font-weight: 700;
}

/* ........./ Testimonial /.......... */
/* End services  */
</style>
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
