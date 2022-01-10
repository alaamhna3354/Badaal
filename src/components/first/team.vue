<template>
  <!-- Start Our Team -->
   <div class="teams" v-if="team.length > 0">
     <div class="main-heading">
      <h2>{{ $t('Team') }}</h2>
      </div>
      <div class="container">
        <div class="our-team" data-aos="fade-up" data-aos-duration="1500"
        v-for="item in team" :key="item">
            <router-link style="text-decoration: none;"
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
          <ul class="social">
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
           
        </div>
      </div>
    </div>
  <!-- End Our Team -->
</template>
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
 @import "../../assets/scss/firstcomponents/team.scss";

</style>
<script>
import axios from "axios";
import { mapState } from 'vuex';
export default {
  name: "teams",
  data() {
    return {
      team:[]
    };
  },
  props: ['id'],
  components: {},
  computed: {
      ...mapState([
        'GlobalUrl', 
    ]),
  },
  methods: {
   
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
