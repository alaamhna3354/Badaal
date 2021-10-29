<template>
  <div class="about">
    <div class="container">
      <h2 class="special-heading">من نحن</h2>
      <div class="about-content">
        <div class="image" data-aos="fade-left" data-aos-duration="1500">
          <img src="../../assets/img/manger.jpg" alt="" />
        </div>
        <div class="text" data-aos="fade-right" data-aos-duration="1500">
          <h1>{{ title }}</h1>
          <p>
            {{ subject }}
          </p>
          <hr />
          <p v-html="desc"></p>
          <a href="#"
            ><button class="botun">
              من نحن<i class="fa fa-users" aria-hidden="true"></i></button
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- End About -->
</template>
<style scoped>
/* Start About */
.about {
  background-color: var(--white-color);
  padding-top: var(--section-padding);
  padding-bottom: 20px;
}
.about .about-content {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.about .about-content .image {
  position: relative;
  width: 500px;
  height: 400px;
}
@media (max-width: 991px) {
  .about .about-content {
    margin-top: 50px;
    flex-direction: column;
    text-align: center;
  }
  .about .about-content .image {
    margin: 0 auto 60px;
    width: 300px;
    height: 200px;
  }
}
.about .about-content .image img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 2px 5px 15px #0d645b;
}
.about .about-content .text {
  flex-basis: calc(90% - 500px);
}
.about .about-content .text h1 {
  color: #35697b;
  text-shadow: 2px 2px 5px #064f69;
}
.about .about-content .text p:first-of-type {
  font-weight: bold;
  line-height: 2;
  margin-bottom: 50px;
  color: #575757;
}
.about .about-content .text hr {
  width: 50%;
  display: inline-block;
  border-color: var(--main-color);
}
.about .about-content .text p:last-of-type {
  line-height: 2;
  color: #777;
}
/* End About */
</style>
<script>
export default {
  name: "about",
  data() {
    return {};
  },
  props: ["title", "subject", "desc"],
  components: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
