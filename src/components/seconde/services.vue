<template>
  <section id="services-menu">
     <div class="main-heading">
            <h2>{{ $t('Services') }}</h2>
        </div>
    <div class="services-menu-container container">
      <div class="services-menu-item" v-for="(item,index) in service" :key="index"
       :data-aos="[index % 2 === 0 ? 'fade-up-right':'fade-up-left']" data-aos-duration="1500">
        <div class="services-img">
         <i :class="`${item.icon }`"></i>
        </div>
        <div class="services-description">
          <h3>
            {{ item.title }}
          </h3>
            <p>{{ item.quote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>>
<style lang="scss" scoped>
 @import "../../assets/scss/_variables.scss";
 @import "../../assets/scss/secondecomponents/services.scss";
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
