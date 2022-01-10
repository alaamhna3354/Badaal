<template>
    <TitlePage :path="$route.name" />
  <div class="team-view">
    <!-- Start services -->
    <div class="cover"  v-for="item in filterTeam" :key="item">
      <img v-lazy="`${GlobalUrl}/storage/${item.photo}`" >
      </div>
    <div class="cover-overlay"></div>
    <section >
        <div class="container " v-for="item in filterTeam" :key="item">
   <div class="image"><img v-lazy="`${GlobalUrl}/storage/${item.photo}`" alt=""></div>
   <div class="details">
       <h1>{{ item.name }}</h1>
       <h3>{{ item.position }}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid asperiores ea a cupiditate aspernatur obcaecati in, libero quos sed corporis quod saepe necessitatibus est laborum, fugit, consectetur vitae perspiciatis sit.</p>
       <div class="social">
        <a href=""><i class="icofont-facebook"></i><span>facebook@facebook</span></a>
        <a href=""><i class="icofont-twitter"></i><span>twitter@twitter</span></a>
        <a href=""><i class="icofont-linkedin"></i><span>linkedin@linkedin</span></a>
        <a href=""><i class="icofont-whatsapp"></i><span>+963 933 080 648</span></a>

       </div>
   </div>
   </div>
    </section>
  <div class="Other-teams">
     <div class="main-heading">
      <h2>Other Team</h2>
      </div>
      <div class="container">
        <div class="Other-team" v-for="item in filterOtherTeam" :key="item">
            <router-link
          :to="{ path: `/team/${item.id}`, params: { id: item.id } }"
        >
          <div class="picture">
            <img class="img-fluid" v-lazy="`${GlobalUrl}/storage/${item.photo}`" />
            <!-- v-lazy="'img/manger.jpg'" -->
          </div>
          <div class="team-content">
            <h3 class="name">{{ item.name }}</h3>
            <h4 class="title">{{ item.position }}</h4>
          </div>
            </router-link>
          <ul class="social animate__animated animate__pulse">
             <i @click="gototop(item.id)" class="redic icofont-circled-right"></i>
           
         <ul class="icon">
                <li>
              <a
                :href="item.facebook"
                class="fab fa-facebook"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                :href="item.twitter"
                class="fab fa-twitter"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                :href="item.instagram"
                class="fab fa-google-plus"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                :href="item.linkedin"
                class="fab fa-linkedin"
                aria-hidden="true"
              ></a>
            </li>
         </ul>
         
          </ul>
          
        </div>
      </div>
    </div>
    <!-- <Unavailble :name="'Services'" v-else /> -->
  </div>
  <!-- End services -->
</template>
<style lang="scss" scoped>
 @import "../assets/scss/_variables.scss";
 @import "../assets/scss/team-view.scss";
</style>
<script>
import axios from "axios";
import { mapState } from 'vuex';
import TitlePage from "../components/global/title-page.vue";
// import Unavailble from "../components/global/unavailble.vue";
export default {
  name: "about",
  data() {
    return {
       team:[]
    };
  },
  props: [""],
  components: { TitlePage }, //Unavailble
  computed: {
      ...mapState([
        'GlobalUrl', 
    ]),
    filterTeam() {
        return this.team.filter((el) => {
          return el.id ==  this.$route.params.id;
        });
    },
       filterOtherTeam() {
        return this.team.filter((el) => {
          return el.id !=  this.$route.params.id;
        });
    },
  },
    methods: {
   gototop(i){
        this.$router.push({ name: 'Team', params: { id: i }});
        window.scrollTo(0, 0);
   },
        async fetch() {
      var self = this;
      await axios
        .get(`/about-us`)
        .then((res) => {
          self.team = res.data.data.team;

          // console.log("team: ", res.data.data.team);
        })
        .catch(function (error) {
          console.warn("Error fetch team ", error.toJSON());
        });
    },
  },
  mounted() {
     this.fetch();
  },
};
</script>
