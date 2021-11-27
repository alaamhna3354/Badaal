<template>
  <!-- Start blog -->
    <TitlePage :name="$route.name" :path="$route.name" />
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
      	<transition-group class="blog" name="blog" >

          <div class="blog-item" v-for="item in blog" :key="item.id"
      v-show="currentFilter === item.pcategory_id || currentFilter === 'ALL'">
            <div class="image"><img  v-lazy="`http://badaelonline.com/backend/public/storage/${item.cover}`" alt=""></div>
          <div class="info-content">
            <h3>{{ item.slug }}</h3>
            <div class="title"> {{ item.title }}</div>
            <div v-html="item.body" class="desc"></div>
               <ul class="utility-list">
      <li><span class="licon icon-like"><i class="icofont-eye-alt"></i></span>{{ item.views }} /</li>
      <li><span class="licon icon-dat"><i class="icofont-clock-time"></i></span>03 jun 2017 /</li>
      <li><span class="licon icon-tag"><i class="icofont-label"></i></span>{{item.keyword}}</li>
    </ul>
          </div>
 </div>
<!-- /.blog-card -->
      <!-- <div class="blog-item" v-for="item in blog" :key="item.id"
      v-show="currentFilter === item.pcategory_id || currentFilter === 'ALL'">
        <div class="blog-img">
        <img  v-lazy="`http://badaelonline.com/backend/public/storage/${item.cover}`" alt="">
        </div>
        <div class="blog-content">
          <h2 class="blog-code">
           <span> 26 December 2019</span> / views <span>{{ item.views }}</span> /
            <span>{{ item.keyword }}</span>
          </h2>
          <div class="blog-title">{{ item.title }}</div>
          <div class="blog-text" v-html="item.body"></div>
          <a href="#" class="blog-button">READ MORE</a>
        </div>
      </div> -->
        </transition-group>
    </div>
    <Unavailble :name="'Blog'" v-else />
  </div>

  <!-- End blog -->
</template>
<style lang="scss" scoped>
// Start Blog

// End Blog
</style>
<script>
import TitlePage from "../components/global/title-page.vue";
import Unavailble from "../components/global/unavailble.vue";
import axios from "axios";

export default {
  name: "about",
  data() {
    return {
    blog: [],
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
  components: { TitlePage, Unavailble },
  computed: {},
  methods: {
      setFilter(filter) {
			this.currentFilter = filter;
		},
    async fetch() {
      var self = this;
      await axios
        .get(`http://badaelonline.com/backend/public/blog`)
        .then((res) => {
          self.blog = res.data.data.lpost;
          console.log("blog: ", res.data.data.blog);
        })
        .catch(function (error) {
          console.warn("Error blog ", error.toJSON());
        });
          // pcategories for filter
      await axios
        .get(`http://badaelonline.com/backend/public/`)
        .then((res) => {
          self.pcategories = res.data.data.pcategories;
          console.log("pcategories: ", res.data.data.pcategories);
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
