<template>
  <!-- Start Portfolio -->
    <div class="portfolio">
           <div class="main-heading">
                <h2>Portfolio</h2>
            </div>
        <div class="container">
         
            <ul class="shuffle">
                <li :class="{ active:items[0].item}" @click="activeToggle(0)">All</li>
                <li :class="{ active:items[1].item}" @click="activeToggle(1)">App</li>
                <li :class="{ active:items[2].item}" @click="activeToggle(2)">Photo</li>
                <li :class="{ active:items[3].item}" @click="activeToggle(3)">Web</li>
                <li :class="{ active:items[4].item}" @click="activeToggle(4)">Print</li>
            </ul>
        </div>
        <div class="imgs-container">
            <div class="box" v-for="item in portfolio" :key="item">
                <img v-lazy="'img/shuffle-01.jpg'" alt="" />
                <div class="caption">
                    <h4>{{item.name}}</h4>
                    <p>Photography</p>
                </div>
            </div>
        </div>
    </div>
    <!-- End Portfolio -->
</template>
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
 @import "../../assets/scss/thirdcomponents/portfolio.scss";
</style>
<script>
export default {
  name: "portfolio",
  data() {
    return {
        items: [
            {item: true},
            {item: false},
            {item: false},
            {item: false},
            {item: false},
        ],
    };
  },
  props: ["portfolio"],
  components: {  },
  computed: {},
  methods: {
      activeToggle(id){
         for(var i=0; i< this.items.length; i++){
             this.items[i].item = false;
         }
           this.items[id].item = true;

      }
  },
  mounted() {},
};
</script>
