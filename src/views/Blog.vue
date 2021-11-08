<template>
  <!-- Start blog -->
  <div class="blog-view">
    <TitlePage :name="$route.name" :path="$route.name" />
    <div v-if="blog.length > 0">
      <div class="main-heading">
        <h2>Blog</h2>
      </div>
      <div class="blog-item" v-for="item in blog" :key="item.id">
        <div class="blog-img">
          <img v-lazy="item.cover" alt="" />
          <!-- <img
            v-lazy="
              'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp'
            "
            alt=""
          /> -->
        </div>
        <div class="blog-content">
          <h2 class="blog-code">
            26 December 2019 / views {{ item.views }} /
            {{ item.keyword }}
          </h2>
          <div class="blog-title">{{ item.title }}</div>
          <div class="blog-ext" v-html="item.body"></div>
          <a href="#" class="blog-button">READ MORE</a>
        </div>
      </div>
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
    };
  },
  props: [""],
  components: { TitlePage, Unavailble },
  computed: {},
  methods: {
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
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
