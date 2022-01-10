<template>
  <!-- Start about -->
  <div class="contain">
    <div class="route-name">
      <span>Home / {{ path }}</span>
    </div>
  </div>
  <!-- End about -->
</template>
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
.contain{ 
  position: relative; 
  z-index: 100;
}
.route-name {
  width: 210px;
  margin: 10px 0 70px 10px;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  // text-shadow: 0 0 7px $mainColor, 0 0 10px $mainColor, 0 0 21px $mainColor,
  //   0 0 42px $mainColor, 0 0 82px $mainColor, 0 0 92px $mainColor, 0 0 102px $mainColor,
  //   0 0 151px $mainColor;
    border: 2px solid $mainColor;
    border-radius: 2px;
  letter-spacing: 0.1em;
  color:  $mainColor;
  position: relative;
  @media (max-width: 568px) {
    justify-content: space-around;
    span {
      padding-top: 60px;
    }
  }
  .left-name {
    @media (max-width: 568px) {
      display: none;
    }
  }
}
</style>
<script>
export default {
  name: "about",
  data() {
    return {};
  },
  props: {
    name: String,
    path: String,
  },
  components: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
