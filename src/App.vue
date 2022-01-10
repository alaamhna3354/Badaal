<template>
  <component :is="Headerswitch" />
  <router-view />
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <component :is="Footerswitch" />
</template>
<script>
// @ is an alias to /src
// http://badaelonline.com/backend/public/login
// alaa@mail.test
// 12345678
import { defineAsyncComponent } from "vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Header: defineAsyncComponent(() => import("@/Header/header.vue")),
    Footer: defineAsyncComponent(() => import("@/Footer/footer.vue")),
    Header2: defineAsyncComponent(() => import("@/Header/header2.vue")),
    Footer2: defineAsyncComponent(() => import("@/Footer/footer2.vue")),
  },
  computed: {
    ...mapState(["Headerswitch", "Footerswitch"]),
  },
  mounted() {
var body =  document.getElementById("body");
    if( localStorage.getItem('lang') == 'ar'){
body.style.setProperty("--main-dirction","rtl")
}
else{
body.style.setProperty("--main-dirction","ltr");
}
  },
};
</script>
<style lang="scss">
 @import "./assets/scss/_variables.scss";
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
  direction: var(--main-dirction);
}
ul {
  list-style: none;
  padding: 0;
}
$dirction :rtl;
$left :left;
:root {
  --swiper-navigation-size: 44px;
}
/* import font family */
// @import url("https://fonts.googleapis.com/css2?family=Aref+Ruqaa&display=swap");
// @import url("https://fonts.googleapis.com/css2?family=Amiri&display=swap");
/* Start Variables */

/* End Variables */
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
  &.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
  &:after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    text-transform: none;
    font-variant: initial;
    line-height: 1;
  }
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  &:after {
    content: 'prev';
  }
  left: 10px;
  right: auto;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  &:after {
    content: 'next';
  }
  right: 10px;
  left: auto;
}

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
// Varibles

// global component
.main-heading {
  text-align: center;
  h2 {
    font-weight: normal;
    font-size: 40px;
    position: relative;
    margin-bottom: 70px;
    text-transform: uppercase;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -30px;
      height: 2px;
      width: 120px;
      background-color: #333;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid #333;
      bottom: -38px;
      background-color: white;
    }
  }
  p {
    width: 550px;
    max-width: 100%;
    margin: 0 auto 100px;
    color: $pColor;
    line-height: 2;
  }
}
/* first Components */
.botun {
  border: navajowhite;
  background-color: $secondryColor;
  color: #fff;
  font-size: 25px;
  padding: 10px 25px;
  border-radius: 30px;
  cursor: pointer;
  transition: $mainDuration;
  cursor: pointer;
  position: relative;
  font-family: "MonteCarlo", cursive, "Aref Ruqaa", serif;
  z-index: 100;
}
.botun:hover {
  background-color: $mainColor;
  color: $secondryColor;
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
  border: 6px solid $mainColor;
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
  color: $mainColor;
  font-size: 60px;
  text-align: center;
  font-weight: 800;
  letter-spacing: -3px;
  margin: 20px 0 0 0;
  font-family: "MonteCarlo", cursive, "Aref Ruqaa", serif;
  text-shadow: 1px 8px 7px #2e2f2f;
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
