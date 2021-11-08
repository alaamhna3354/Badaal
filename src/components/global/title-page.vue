<template>
  <!-- Start about -->
  <div class="animate__animated animate__bounce">
    <div class="route-name">
      <span class="left-name">{{ name }}</span>
      <span>Home / {{ path }}</span>
    </div>
  </div>
  <!-- End about -->
</template>
<style lang="scss" scoped>
.route-name {
  background: url(../../../public/img/stats.png) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 10px auto 70px;
  box-shadow: 1px 1px 25px #2c4755;
  padding: 20px 10px;
  background-color: #2c4755;
  font-weight: bold;
  font-size: 20px;

  text-shadow: 0 0 7px #04a7f8, 0 0 10px #04a7f8, 0 0 21px #04a7f8,
    0 0 42px #04a7f8, 0 0 82px #04a7f8, 0 0 92px #04a7f8, 0 0 102px #04a7f8,
    0 0 151px #04a7f8;
  letter-spacing: 0.1em;
  color: #04a7f8;
  position: relative;
  @media (max-width: 568px) {
    justify-content: space-around;
    span {
      padding-top: 60px;
    }
  }
  &::after {
    content: "";
    width: 5px;
    height: 32px;
    position: absolute;
    top: -22px;
    left: 4px;
    z-index: 99;
    background: url(../../../public/img/chain.png) no-repeat center center;
  }
  &::before {
    content: "";
    width: 5px;
    height: 32px;
    position: absolute;
    top: -22px;
    right: 4px;
    z-index: 99;
    background: url(../../../public/img/chain.png) no-repeat center center;
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
