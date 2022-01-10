<template>
  <!-- Start blog -->
    <TitlePage  :path="$route.name" />
  <div class="blog-view">
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

    <div v-if="blog.length > 0" class="content-blog">
      	<transition-group class="blogs" name="blog">
          <div class="blog-item" v-for="item in filterTeam" :key="item.id"
          :style="[readMore != null ? {'width': '90%'}: '']"
      v-show="currentFilter === item.pcategory_id || currentFilter === 'ALL'">
            <div class="image"><img  v-lazy="`${GlobalUrl}/storage/${item.cover}`" alt=""></div>
          <div class="info-content">
            <h3>{{ item.slug }}</h3> 
            <div class="title"> {{ item.title }}</div>
            <div v-if="readMore != null" v-html="item.body" class="desc"></div>
               <ul class="utility-list">
      <li><span class="licon icon-like"><i class="icofont-eye-alt"></i></span>{{ item.views }} /</li>
      <li><span class="licon icon-dat"><i class="icofont-clock-time"></i></span>03 jun 2017 /</li>
      <li><span class="licon icon-tag"><i class="icofont-label"></i></span>{{item.keyword}}</li>
    </ul>
      <div v-if="readMore == null" class="read" @click="readMore = item.id"><button>{{$t('more')}}</button></div>
      <div v-else class="read" @click="readMore = null"><button>
        <i v-if="lang == 'ar'" class="icofont-arrow-right"></i>
        <i v-else class="icofont-arrow-left"></i>
      
        </button></div>
          </div>
 </div>
        </transition-group>
    </div>
    <Unavailble :name="'Blog'" v-else />
  </div>

  <!-- End blog -->
</template>
<style lang="scss" scoped>
 @import "../assets/scss/_variables.scss";
 @import "../assets/scss/blog-view.scss";
</style>
<script>
import TitlePage from "../components/global/title-page.vue";
import Unavailble from "../components/global/unavailble.vue";
import axios from "axios";
import { mapState } from 'vuex';
export default {
  name: "blog",
  data() {
    return {
    lang: localStorage.getItem('lang')  ||'en',
    blog: [],
    pcategories: [],
    readMore: null,
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
  components: { TitlePage, Unavailble },
  computed: {
      ...mapState([
        'GlobalUrl'
    ]),
        filterTeam() {
          if(this.readMore != null){
          return this.blog.filter((el) => {
          return el.id ==  this.readMore;
        });
          }
        else{
          return this.blog;
        }

    },
  },
  methods: {
      setFilter(filter) {
			this.currentFilter = filter;
		},
    async fetch() {
      var self = this;
      await axios
        .get(`/blog`)
        .then((res) => {
          self.blog = res.data.data.post;
          // console.log("blog: ", res.data.data.blog);
        })
        .catch(function (error) {
          console.warn("Error blog ", error.toJSON());
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
