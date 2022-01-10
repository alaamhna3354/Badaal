<template>
  <!-- Start Services -->
    <div class="services">
        <div class="container">
            <div class="main-heading">
                <h2>Services</h2>
                <p>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                    tincidunt.
                </p>
            </div>
            <div class="services-container">
                <div class="srv-box box-a" v-for="item in service" :key="item">
                    <i class="fas fa-desktop fa-3x"></i>
                    <div class="text">
                        <h3>{{ item.title }}</h3>
                        <p>
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
                            elit, eget
                            tincidunt nibh pulvinar a. Curabitur aliquet quam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Services -->
</template>
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
 @import "../../assets/scss/thirdcomponents/services.scss";
</style>
<script>
export default {
  name: "service",
  data() {
    return {};
  },
  props: ["service"],
  components: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>

