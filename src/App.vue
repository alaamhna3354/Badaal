<template>
  <top />
  <div id="nav">
    <router-view />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <Footer />
</template>
<script>
// @ is an alias to /src
//http://badaelonline.com/backend/public/admin
//alaa@mail.test
//12345678
import top from "@/Header/header.vue";
import Footer from "@/Footer/footer.vue";
export default {
  name: "Home",
  components: {
    top,
    Footer,
  },
};
</script>
<style lang="scss">
:root {
  --white-color: #fff;
  --main-color: #e1f0f9;
  --secondary-color: #2c4755;
  --section-padding: 50px;
  --main-duration: 0.5s;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Amiri", serif;
  margin: 0;
}

/* import font family */
@import url("https://fonts.googleapis.com/css2?family=Aref+Ruqaa&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amiri&display=swap");
/* Start Variables */

/* End Variables */
/* Start Global Rules */
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
/* Small */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
/* Medium */
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
/* Large */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
/* End Global Rules */
/* Start Components */

/* first Components */
.botun {
  border: navajowhite;
  background-color: var(--secondary-color);
  color: #fff;
  font-size: 25px;
  padding: 10px 25px;
  border-radius: 30px;
  cursor: pointer;
  transition: var(--main-duration);
  cursor: pointer;
  position: relative;
  font-family: "MonteCarlo", cursive, "Aref Ruqaa", serif;
  z-index: 100;
}
.botun:hover {
  background-color: var(--main-color);
  color: var(--secondary-color);
}
.botun:hover::after {
  display: block;
}
.botun::after {
  display: none;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 6px solid var(--main-color);
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
.botun i {
  margin: 0 10px;
}
/* seconde Components */
.special-heading {
  color: #1daad2;
  font-size: 100px;
  text-align: center;
  font-weight: 800;
  letter-spacing: -3px;
  margin: 20px 0 0 0;
  font-family: "MonteCarlo", cursive, "Aref Ruqaa", serif;
  text-shadow: 1px 8px 7px #6084a8;
}
.un-color {
  color: #6c98e6;
  text-shadow: 1px 8px 7px #6084a8;
}
@media (max-width: 767px) {
  .special-heading {
    font-size: 60px;
  }
  .special-heading + p {
    margin-top: -20px;
  }
}
.swiper {
  width: 100%;
  height: 100%;
  overflow: visible !important;
}

.swiper-slide-active {
  cursor: pointer;
}
.swiper2 {
  position: relative;
  cursor: pointer;
  padding: 50px 0;
}
.swiper2 .swiper-scrollbar {
  background: rgba(47, 167, 215, 0.1);
}
.swiper2 .swiper-scrollbar-drag {
  background: rgba(34, 86, 185, 0.5);
}
.swiper3 {
  width: 100%;
  height: 100%;
}
.swiper4 {
  width: 100%;
  height: 100%;
  position: relative;
}
.swiper4 .swiper-pagination {
  bottom: -30px !important;
}
/* End Components */
</style>
