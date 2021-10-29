<template>
  <!-- Start Services -->
  <div class="services">
    <h2 class="special-heading un-color">خدماتنا</h2>
    <div class="container">
      <div class="has-outline" v-for="item in service" :key="item">
        <i>{{ item.icon }}</i>
        <h2>{{ item.title }}</h2>
      </div>
    </div>
  </div>
  <!-- End Services -->
</template>
<style scoped>
/* Start Services  */
.services {
  padding-bottom: 50px;
  background-color: var(--secondary-color);
}
.services .container {
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
}
.has-outline {
  color: darkcyan;
  background: #b1d9d3;
  border-radius: 50%;
  padding: 5px;
  position: relative;
  width: 250px;
  height: 250px;
  display: grid;
  place-content: center;
  margin: 25px 0;
  cursor: pointer;
  transition: var(--main-duration);
  box-shadow: 1px 1px 26px #00ffd8;
}
.has-outline i {
  display: flex;
  justify-content: center;
}
.has-outline h2 {
  text-shadow: 1px 6px 5px cadetblue;
  display: flex;
  justify-content: center;
}
.has-outline:after {
  border-radius: 50%;
  padding: 5px;
  border: 2px dashed #9dd5cf;
  position: absolute;
  content: "";
  top: -6px;
  left: -6px;
  bottom: -6px;
  right: -6px;
  transition: var(--main-duration);
}
.has-outline:hover {
  scale: 1.1;
}
.has-outline:hover::after {
  border: 6px solid #00d2b2;
}
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
