<template>
  <!-- Start about -->
    <TitlePage  :path="$route.name" />
  <div class="portfolio-view">
    <div class="portfolio" >
      <div class="container">
        <ul class="shuffle">
           <li
            :class="{ active: currentFilter === 'ALL' }"
            @click="setFilter('ALL')"
          >
          All
          </li>
          <li
            v-for="(filterItem, index) in pcategories"
            :key="index"
            :class="{ active: currentFilter === filterItem.id }"
            @click="setFilter(filterItem.id)"
          >
            {{ filterItem.name }}
          </li>
        </ul>
      </div>
<div class="contain">
  <div class="container">
	<transition-group class="projects" name="projects" >
		<div class="project" v-show="currentFilter === project.pcategory_id || currentFilter === 'ALL'"  v-for="project in portfolio" :key="project.id">
		
    	<div class="project-image" >
			  
           <a :href="project.client" target="_blank"> <img class="image" :src="`${GlobalUrl}/storage/${project.cover}`">	
          </a>
      </div>
      <div class="details">
        <h2>{{project.name}}</h2>
       
      </div>
       <div v-html="project.desc" class="desc"></div>
       
		</div>
    
	</transition-group>
</div>
</div>

    </div>
 
  </div>
  <!-- End about -->
</template>
<style lang="scss" scoped>
 @import "../assets/scss/_variables.scss";
 @import "../assets/scss/portfolio-view.scss";
</style>
<script>
import axios from "axios";
import TitlePage from "../components/global/title-page.vue";
import { mapState } from 'vuex';
export default {
  name: "about",
  data() {
    return {
      portfolio: [],
      pcategories: [],
      currentFilter: 'ALL',
      items: [
        { item: true },
        { item: false },
        { item: false },
        { item: false },
        { item: false },
		        ]
    };
  },
  props: [""],
  components: { TitlePage,  },
  computed: {
    ...mapState([
      'GlobalUrl'
    ])
  },
  methods: {
  setFilter(filter) {
			this.currentFilter = filter;
		},
    async fetch() {
      var self = this;
      await axios
        .get(`/portfolio`)
        .then((res) => {
          self.portfolio = res.data.data.portfolio;
          // console.log("portfolio: ", res.data.data.portfolio);
        })
        .catch(function (error) {
          console.warn("Error portfolio ", error.toJSON());
        });
      // pcategories for filter
      await axios
        .get(`/home`)
        .then((res) => {
          self.pcategories = res.data.data.pcategories;
          // console.log("pcategories: ", res.data.data.pcategories);
        })
        .catch(function (error) {
          console.warn("Error pcategories ", error.toJSON());
        });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>