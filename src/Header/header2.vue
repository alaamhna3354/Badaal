<template>
  <div class="header">
    <div class="top">
    <div class="container ">
      <div class="conta" >
     {{$t('call')}} <a  v-if="general.phone"
     :href="`https://wa.me/${general.phone}`" target="_blank">
     {{general.phone.replace(' ','').replace(' ','').replace(' ','')}}</a> -
     <a :href="general.email">{{general.email}}</a> 
 </div>
      <div class="social-top">
         <a :href="general.linkedin"><i class="fab fa-linkedin"></i></a>
         <a :href="general.facebook"><i class="fab fa-facebook-f"></i></a>
         <a :href="general.twitter"><i class="fab fa-twitter"></i></a>
         <a :href="general.instagram"><i class="fab fa-instagram"></i></a>
     
          <div class="lang">
                <span v-if="lang == 'ar'">Ar</span>
                <span v-if="lang == 'sp'">Es</span>
                <span v-if="lang == 'en'">En</span>
               <i class="fas fa-globe"></i>
            <ul class="animate__animated animate__fadeIn">
              <li @click="SetLangEn()"><img src="../../public/img/usa.png" alt="" style="width:27px;margin: 0 2px;"> En</li>
              <li @click="SetLangAr()"> <img src="../../public/img/syria.png" alt="" style="width:25px;margin: 0 2px;">Ar</li>
              <li @click="SetLangSp()"><img src="../../public/img/spain.png" alt="" style="width:25px;margin: 0 2px;">Es</li>
            </ul>
      </div>
    </div>
    </div>
    </div>
    <div class="container">
      <div class="logo" id="logo">
        <router-link to="/">
        <img v-if="general.logo" :src="`${GlobalUrl}/storage/${general.logo}`" alt="" />
        </router-link>
        </div>

      <div class="nav"><router-link to="/"><i class="icofont-home"></i><span>{{ $t('Home') }}</span> </router-link></div>
      <div class="nav"><router-link to="/about"><i class="icofont-group"></i>  <span>{{ $t('About') }}</span> </router-link></div>
      <div class="nav"><router-link to="/portfolio"><i class="icofont-archive"></i><span>{{ $t('Portfolio') }}</span></router-link></div>
      <div class="nav"><router-link to="/blog"><i class="icofont-blogger"></i><span>{{ $t('Blog') }}</span></router-link></div>
      <!-- <div class="nav"><router-link to="/services">{{ $t('Services') }}</router-link></div> -->
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
              <li><router-link to="/">{{ $t('Home') }}</router-link></li>
              <li><router-link to="/about">{{ $t('About') }}</router-link></li>
              <li><router-link to="/portfolio">{{ $t('Portfolio') }}</router-link></li>
              <li><router-link to="/blog">{{ $t('Blog') }}</router-link></li>
              <!-- <li><router-link to="/services">{{ $t('Services') }}</router-link></li> -->
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
<style lang="scss" scoped>
/* Start Header */
.header {
  padding: 0;
  background: #295667;;
  width: 100%;
}

.header .top{
  background-color: var(--titleSection-color);
}
.header .top .container:first-child{
  min-height: 35px !important;
  position: relative;
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
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width:568px){
.header .top .social-top{
  justify-content: end;
}
  .header .top .social-top a{
    display: none;
  }
}
.header .top .lang {
  color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 40px;
  transition: .5s;
  padding-inline-start: 10px;
  border-inline-start: 1px solid #fff;
  cursor: pointer;
}

.header .top .lang ul{
  position: absolute;
  display: none;
  background-color: #0082a2;
  padding: 8px;
  border-radius: 3px;
  margin-inline-start: -15px;
  margin-top: 15px;
  z-index: 100;
}
.header .top .lang:hover ul{
  display: flex;
  flex-direction: column;
  }
.header .top .lang ul li{
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s;
  &:hover{
    scale: 1.1;
  }
}
.header .top .lang i{
  margin: 0px 5px;
  display: grid;
  align-items: center;
}
@media (max-width:568px) {
.header .top .lang {
  display: flex;
  width: 50px;
  text-align: end;
  border: none;
  padding:0;
}
}
.header .top a{
  color: #fff;
  font-size: 14px;
  transition: var(--main-duration);
}
.header .top a:hover{
  color: var(--secondary-color);
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
  bottom: -25px;
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
.header .nav a i{
  margin:0 5px;
  font-size: 20px;
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
  margin-inline-start: 50px;
  top: -20px;
}
.header .menu ul {
  background: #ddd;
  height: 0;
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
  overflow: hidden;
}
.block {
  width: 150px !important;
  height: auto !important;
  opacity: 1 !important;
  transform: translateY(0) !important;
  overflow: visible !important;
  margin-inline-start: -120px;
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
    data() {   
        return {
          lang: localStorage.getItem('lang')  ||'en',
        };
    },
  components: {},
    computed: {
    ...mapState([
        'general',
        'GlobalUrl'
    ]),
    },
    methods: {  
      SetLangAr() {
        this.lang == "ar"
        localStorage.setItem('lang', "ar");
        window.location.reload(); 
      },
      SetLangEn() {
        this.lang == "en"
        localStorage.setItem('lang', "en");
        window.location.reload();
      },
      SetLangSp() {
        this.lang == "sp"
        localStorage.setItem('lang', "sp");
        window.location.reload();
      },
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
