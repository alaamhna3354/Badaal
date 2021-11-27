<template>
  <div class="unavailble">
    <!-- Sorry!! {{ name }} Section Unavailble Now We will Fix It Soon -->
  </div>
</template>
<style scoped>
.unavailble {
  padding: 30px;
  display: flex;
  justify-content: center;
  font-size: 30px;
  line-height: 2;
  font-weight: bold;
  opacity: 0.7;
  width: 100%;
  height: 200px;
}
</style>
<script>
export default {
  name: "about",
  data() {
    return {
      about: [],
      team: [],
      faq: [],
    };
  },
  props: {
    name: String,
  },
  components: {},
  computed: {},
  methods: {},
};
</script>
