<template>
  <!-- Start Footer -->
  <div class="footer">
     <div class="back-top">
<i @click="gototop" class="icofont-arrow-up"></i>
   <a :href="`https://wa.me/${general.phone}`" target="_blank"><button class="botun"><i class="fab fa-whatsapp -f"></i></button></a>
    </div>

    <div class="over-lay"></div>
      <div class="top-footer">
                <div class="left-social">
        <div class="logo">
          <a href="#header"> <img v-if="general.logo" :src="`${GlobalUrl}/storage/${general.logo}`" alt="" /></a>
        </div>
        <div class="social">
         <a :href="general.linkedin"><i class="fab fa-linkedin"></i></a>
         <a :href="general.facebook"><i class="fab fa-facebook-f"></i></a>
         <a :href="general.twitter"><i class="fab fa-twitter"></i></a>
         <a :href="general.instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      </div>
    <div class="center-footer">
      <ul>
        <h3>{{$t('Company')}}</h3>
        <ul>
          <li><a href="#about">{{$t('About')}}</a></li>
          <li><a href="#">{{$t('recruitment')}}</a></li>
          <li>{{general.address1}}</li>
          <li>{{general.address2}}</li>
        </ul>
      </ul>
      <ul>
        <h3>{{$t('Contact')}}</h3>
        <ul>
          <li><a href="#">{{$t('Join')}}</a></li>
          <li><a href="#contact">{{$t('Contact')}}</a></li>
          <li v-if="general.phone">   <a :href="`https://wa.me/${general.phone}`" target="_blank">
           {{general.phone.replace(' ','').replace(' ','').replace(' ','')}}
            </a></li>
          <li><a :href="general.email">{{general.email}}</a> </li>
          <!-- <span>{{general.address1}} - {{general.address2}}</span> -->
        </ul>
      </ul>
      <ul>
        <h3>{{$t('Systems')}}</h3>
        <ul>
          <li>{{$t('Rule')}}</li>
          <li>{{$t('policy')}}</li>
        </ul>
      </ul>
  <ul>
        <ul>
          <img src="https://namaa-solutions.com/frontend/images/Footer/footer-map.png" alt="">
        </ul>
      </ul>
    </div>
    <div class="bottom-footer">
 
      <div> {{$t('Copyright')}} </div>
    </div>
  </div>
  <!-- End Footer -->
</template>
<style lang="scss" scoped>
 @import "../assets/scss/_variables.scss";
.back-top {
    display: grid;
    place-content: center;
    position: fixed;
    z-index: 100;
    height: 50px;
    width: 50px;
    transition: .5s;
    background-color: $mainColor;
    bottom: 25px;
    right: 25px;
    border-radius: 50%;
    display: grid;
    align-items: center;
  }
  .back-top i{
    cursor: pointer;
    color: #fff;
    font-size: 30px;
  }
.back-top button{
  background-color: $mainColor;
  opacity: 0;
  position: absolute;
  left: -60px;
  border-radius: 50%;
  padding: 9px 4px;
  top: -40px;
  transition: .5s;
}
.back-top button::after{
  border: 6px solid $mainColor;
}
.back-top:hover button{
 opacity: 1;
}
/* Start Footer */
.footer {
  background-color: $secondryColor;
  color: #FFF;
  padding: 0 10px 30px;
  text-align: center;
  font-size: 18px;
  // background-image: url(../../public/img/stats.png);
  background-size: cover;
  position: relative;
}
.footer .over-lay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000006b;
  top: 100%;
  left: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
.footer .top-footer,.footer .center-footer,.footer .bottom-footer{
  position: relative;
  z-index: 2;
}
.footer .center-footer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
}
@media (max-width:576px) {
.footer .center-footer {
  display: block;
}
}
.footer .center-footer h3 {
  margin: 0;
}
.footer .center-footer ul {
  list-style: none;
  padding: 0;
}
.footer .center-footer ul li {
  line-height: 1.8;
  cursor: pointer;
  transition: $mainDuration;
  position: relative;
}
@media (max-width:576px) {
.footer .center-footer ul li {
  line-height:2;
}
}
.footer .center-footer ul li a {
  text-decoration: none;
  color: inherit;
}
.footer .center-footer ul li::after {
  content: "";
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 38%;
  position: absolute;
  transition: $mainDuration;
  background-color: $mainColor;
}
.footer .center-footer ul li:hover {
   text-shadow:
      0 0 7px  $mainColor,
      0 0 10px  $mainColor,
      0 0 21px  $mainColor,
      0 0 42px  $mainColor,
      0 0 82px  $mainColor;
  padding-inline-end: 10px;
}
.footer .center-footer ul li:hover::after {
  width: 23%;
  box-shadow:
      0 0 7px  $mainColor,
      0 0 10px  $mainColor,
      0 0 21px  $mainColor,
      0 0 42px  $mainColor,
      0 0 82px  $mainColor;
}

.left-social i:hover {
  font-size: 25px;
  color: $mainColor;
  border: 2px solid $mainColor;
  border-radius: 3px;
}

.left-social {
    display: flex;
    width: 90%;
    margin: 0 auto;
    border-bottom: 2px solid #fff;
}
.left-social a{
  text-decoration: none;
  color: #fff;
}
.left-social i {
  transition: $mainDuration;
  cursor: pointer;
  padding: 5px;
}
.footer .top-footer .logo {
  width: 115px;
  cursor: pointer;
  margin: 0 50px;
}

.footer .top-footer .logo img {
  width: 100%;
  height: 100%;
}
.footer .top-footer .social{
  display: flex;
  align-items: center;
}
.footer span {
  font-weight: bold;
  color: $mainColor;
}
.footer .address{
  padding: 15px 0;
  color: #fff;
  position: relative;
  z-index: 1;
  line-height: 1.8;
  font-size: 14px;
}
.footer .address a{
  /* text-decoration: none; */
  color: #fff;
}
.footer .bottom-footer {
  display: flex;
  justify-content: flex-start;
  padding-inline-start: 80px;
  font-size: 14px;
  margin: 10px 0;
}
@media (max-width:568px) {
.footer .bottom-footer {
  padding: 0px;
}
}
/* End Footer */
</style>
<script>
import { mapState } from 'vuex';
export default {
  name: "footer",
  components: {},
      computed: {
    ...mapState([
        'general',
        'GlobalUrl'
    ]),
    },
    methods:{
         gototop(){
        window.scrollTo(0, 0);
   },
    },
  mounted() {
      this.$store.dispatch('loadHome');

  },
};
</script>