<template>
  <div class="blog">
      <div class="main-heading">
      <h2> {{$t('Blog')}} </h2>
    </div>
          <div
            class="Blog-container">
            <div class="Blog-item" :class="[`item${index}`]"
            v-for="(item,index) in blog"
            :key="index"
            @click="gototop()">
            <div class="blog-img">  
              <img  v-lazy="`${GlobalUrl}/storage/${item.cover}`" alt="">
              <div class="over-lay animate__animated animate__fadeIn"><i class="icofont-swoosh-right"></i></div>
              </div>
              <div class="Blog-body">
                <h2 class="Blog-title">{{ item.title }}</h2>
                             <ul class="utility-list">
      <li><span class="licon icon-like"><i class="icofont-eye-alt"></i></span>{{ item.views }} /</li>
      <li><span class="licon icon-dat"><i class="icofont-clock-time"></i></span>03 jun 2017 /</li>
      <li><span class="licon icon-tag"><i class="icofont-label"></i></span>{{item.keyword}}</li>
    </ul>
              </div>
            </div>
          </div>
  </div>

  <!-- End Blog -->
</template>
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
 @import "../../assets/scss/firstcomponents/blog.scss";
</style>
<script>
import { mapState } from 'vuex';
export default {
  name: "blog",
  data() {
    return {};
  },
  props: ["blog"],
  components: { },
  computed: {
    ...mapState([
      'GlobalUrl'
    ])
  },
  methods: {
       gototop(){
        this.$router.push({ name: 'Blog'});
   },
  },
  mounted() {},
};
</script>
