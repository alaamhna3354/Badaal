<template>
  <div class="header">
    <div class="container top">
      <div class="conta">
     call us:  <a :href="`https://wa.me/${general.phone}`" target="_blank">{{general.phone}}</a> -
     <a :href="general.email">{{general.email}}</a> 
      </div>
      <div class="social-top">
         <a :href="general.linkedin"><i class="fab fa-linkedin"></i></a>
         <a :href="general.facebook"><i class="fab fa-facebook-f"></i></a>
         <a :href="general.twitter"><i class="fab fa-twitter"></i></a>
         <a :href="general.instagram"><i class="fab fa-instagram"></i></a>
    </div>
    </div>
    <div class="container">
      <div class="logo" id="logo">
        <router-link to="/">
        <img :src="`http://badaelonline.com/backend/public/storage/${general.logo}`" alt="" />
        </router-link>
        </div>
      <div class="nav"><router-link to="/">Home</router-link></div>
      <div class="nav"><router-link to="/about">About</router-link></div>
      <div class="nav"><router-link to="/services">Services</router-link></div>
      <div class="nav"><router-link to="/portfolio">Portfolio</router-link></div>
      <div class="nav"><router-link to="/blog">Blog</router-link></div>
      <!-- <div class="nav"><router-link to="/testimonials">testimonials</router-link></div>
      <div class="nav"><router-link to="/team">team</router-link></div>
      <div class="nav"><router-link to="/contact">contact</router-link></div> -->
      <div class="links" id="links">
        <ul class="menu">
          <li>
            <span class="icon">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <ul id="ul_links">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/Srvices">Services</router-link></li>
              <li><router-link to="/Portfolio">Portfolio</router-link></li>
              <li><router-link to="/Blog">Blog</router-link></li>
              <!-- <li><router-link to="/testimonials">testimonials</router-link></li>
              <li><router-link to="/team">team</router-link></li>
              <li><router-link to="/contact">contact</router-link></li> -->
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Start Header */
.header {
  padding: 0;
  background: var(--secondary-color);
  width: 100%;
}
@media (max-width:568px) {
.header {
  padding: 15px;
}
}
.header .top{
  min-height: 35px !important;
  position: relative;
}
.header .top::before{
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: 0;
  background: #ffffff2e;
}
.header .conta{
  color: #fff;
  font-size: 12px;
}
.header .conta a{
  text-decoration: none;
  color: #fff;
  font-size: 12px !important;
}
.header .top .social-top{
  width: 110px;
  display: flex;
  justify-content: space-between;
}
.header .top a{
  color: #fff;
  font-size: 14px;
  transition: var(--main-duration);
}
.header .top a:hover{
  color: var(--titleSection-color);
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
}
.header .logo {
  width: 150px;
  cursor: pointer;
  display: grid;
  height: 70px;
  align-content: center;
  max-height: 75px;
}
.header .logo img {
  height: 100%;
  width: 100%;
}
.header .links {
  position: relative;
  display: none;
}
.header .nav {
  transition: var(--main-duration);
  position: relative;
  font-size: 17px;
}
.header .nav::before {
  content: "";
  width: 0;
  height: 0;
  background-color:var(--titleSection-color);
  position: absolute;
  bottom: -26px;
  transition: var(--main-duration);
  left: 50%;
  transform: translateX(-50%);
}
.header .nav::after {
  content: '';
  position: absolute;
  border-width: 0;
  border-style: solid;
  border-color:  transparent transparent var(--titleSection-color) transparent;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  transition: var(--main-duration);
}
.header .nav a {
  text-decoration: none;
  color: #fff;
  
}
.header .nav:hover::before {
   width: 90px;
  height: 3px;
}
.header .nav:hover::after {
  border-width: 8px;
}
.header .nav:hover a {
   text-shadow: 0 0 7px var(--titleSection-color), 0 0 10px var(--titleSection-color), 0 0 21px var(--titleSection-color),
    0 0 42px var(--titleSection-color), 0 0 82px var(--titleSection-color), 0 0 92px var(--titleSection-color), 0 0 102px var(--titleSection-color),
    0 0 151px var(--titleSection-color);
}
.header .links:hover span:nth-child(2) {
  width: 100%;
}
.header .icon {
  width: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  cursor: pointer;
}
.header .icon span {
  background-color: var(--titleSection-color);
  height: 2px;
  margin-bottom: 5px;
}
.header .icon span:first-child,
.header .icon span:last-child {
  width: 100%;
}
.header .icon span:nth-child(2) {
  width: 60%;
  transition: var(--main-duration);
}
.header .menu {
  display: block;
  margin: 0 auto;
  position: relative;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: end;
}
.header .menu ul::before {
  content: "";
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent var(--titleSection-color) transparent;
  position: absolute;
  right: 0;
  top: -20px;
}
.header .menu ul {
  background: #ddd;
  height: 0;
  right: 35px;
  opacity: 0;
  position: absolute;
  transition: var(--main-duration);
  top: 35px;
  width: 100%;
  z-index: 10;
  list-style: none;
  padding: 0;
  background-color: var(--titleSection-color);
  text-align: center;
  padding: 5px 0;
}
.block {
  width: 150px !important;
  height: auto !important;
  opacity: 1 !important;
  transform: translateY(0) !important;
  right: 10px !important;
}
.header .menu ul li {
  line-height: 1.5;
  transition: var(--main-duration);
  position: relative;
}
.header .menu ul li:hover {
  padding-inline-start: 10px;
}
.header .menu ul a {
  color: #000;
  display: block;
  padding: 5px 20px;
  text-decoration: none;
  color: var(--white-color);
  font-weight: 400;
}
.header .menu ul li:not(:last-child)::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #22859b;
  position: absolute;
  bottom: 0;
  transition: var(--main-duration);
  right: 0;
}
.header .menu ul li:not(:last-child):hover::before {
  height: 2px;
  background-color: var(--white-color);
}
/* Small devices (landscape phones, 576px and up) */
@media (max-width: 767.98px) {
  .header .links {
    display: block;
  }
  .header .nav {
    display: none;
  }
}
/* End Header */
</style>
<script>
import { mapState } from 'vuex';
export default {
  name: "top",
  components: {},
    computed: {
    ...mapState([
        'general',
    ]),
    },
  mounted() {
     this.$store.dispatch('loadHome');
    window.addEventListener("click", function (e) {
      if (document.getElementById("links").contains(e.target)) {
        document.getElementById("ul_links").classList.toggle("block");
      } else {
        document.getElementById("ul_links").classList.remove("block");
      }
    });
  },
};
</script>
