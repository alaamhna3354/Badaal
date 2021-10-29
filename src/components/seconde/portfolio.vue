<template>
  <!-- Start Portfolio -->
  <section class="Portfolio" id="Portfolio">
    <h2 class="head">أعمالنا</h2>
    <div class="Portfolio-container container">
      <div class="Portfolio-type fruite" v-for="item in portfolio" :key="item">
        <div class="img-container">
          <img src="../../assets/img/portfolio-1.jpg" alt="error" />
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
<style scoped>
/* ..........////Portfolio category///........... */

#Portfolio {
  padding: 5rem 0 10rem 0;
}

.Portfolio h2 {
  display: flex;
  justify-content: center;
  font-size: 50px;
  text-shadow: 2px 4px 10px;
  color: #5b5757;
}

.Portfolio .Portfolio-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
}

.Portfolio .Portfolio-container img {
  display: block;
  width: 100%;
  margin: auto;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
}

.Portfolio .img-container {
  margin: 0 1rem;
  position: relative;
}

.img-content {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: 2;
  text-align: center;
  transition: all 0.3s ease-in-out 0.1s;
}

.Portfolio .img-content h3 {
  color: #fff;
  font-size: 23px;
}

.Portfolio .img-content a {
  font-size: 1.2rem;
  text-decoration: none;
}

.Portfolio .img-container::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.871);
  opacity: 0;
  z-index: 1;

  transform: scaleY(0);
  transform-origin: 100% 100%;
  transition: all 0.3s ease-in-out;
}

.Portfolio .img-container:hover::after {
  opacity: 1;
  transform: scaleY(1);
}

.Portfolio .img-container:hover .img-content {
  opacity: 1;
  top: 40%;
}
</style>
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
