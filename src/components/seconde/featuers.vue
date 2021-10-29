<template>
  <div class="featuers">
    <section class="showcase-area" id="showcase">
      <div class="showcase-container">
        <h1 class="main-title" id="home">أبرز خدماتنا</h1>
        <p>شريكك في الخدمات والحلول اللوجستية.</p>
        <button class="botun">أتصل بنا</button>
      </div>
    </section>
  </div>
</template>
<style scoped>
.featuers {
  font-size: 62.5%;
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.showcase-area {
  height: 75vh;
  background: linear-gradient(
      rgba(240, 240, 240, 0.144),
      rgba(255, 255, 255, 0.336)
    ),
    url("../../assets/img/portfolio-1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.showcase-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1.6rem;
}

.main-title {
  text-transform: uppercase;
  margin-top: 1.5em;
}
</style>
<script>
export default {
  name: "featuers",
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
