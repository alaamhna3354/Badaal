<template>
  <!-- Start Our Team -->
  <div class="teams" id="teams">
    <h2 class="special-heading">فريقنا</h2>
    <div class="container">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="../../assets/img/manger.jpg" />
          <!-- https://picsum.photos/130/130?image=856 -->
        </div>
        <div class="team-content">
          <h3 class="name">أدهم عدوان</h3>
          <h4 class="title">المؤسس و المدير التنفيذي</h4>
          <h4 class="title">السويداء</h4>
        </div>
        <ul class="social">
          <li><a href="" class="fab fa-facebook" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-twitter" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="../../assets/img/manger.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">أدهم عدوان</h3>
          <h4 class="title">المؤسس و المدير التنفيذي</h4>
          <h4 class="title">السويداء</h4>
        </div>
        <ul class="social">
          <li><a href="" class="fab fa-facebook" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-twitter" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="../../assets/img/manger.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">أدهم عدوان</h3>
          <h4 class="title">المؤسس و المدير التنفيذي</h4>
          <h4 class="title">السويداء</h4>
        </div>
        <ul class="social">
          <li><a href="" class="fab fa-facebook" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-twitter" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="../../assets/img/manger.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">أدهم عدوان</h3>
          <h4 class="title">المؤسس و المدير التنفيذي</h4>
          <h4 class="title">السويداء</h4>
        </div>
        <ul class="social">
          <li><a href="" class="fab fa-facebook" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-twitter" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- End Our Team -->
</template>
<style scoped>
/* Start teams  */
.teams {
  background-color: var(--white-color);
}
.teams .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
}
.our-team {
  margin-top: 50px;
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #bbecff63;
  text-align: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.our-team .picture {
  display: inline-block;
  height: 130px;
  width: 130px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}

.our-team .picture::before {
  content: "";
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: #1daad2;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 0.9;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}

.our-team:hover .picture::before {
  height: 100%;
}

.our-team .picture::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #1daad2;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.our-team .picture img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
}

.our-team:hover .picture img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}
.our-team .name {
  color: #3e8697;
}
.our-team .title {
  display: block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
}
.our-team .social {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #1daad2;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
}

.our-team:hover .social {
  bottom: 0;
}

.our-team .social li {
  display: inline-block;
}

.our-team .social li a {
  display: block;
  padding: 10px;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;
}

.our-team .social li a:hover {
  color: #1daad2;
  background-color: #f7f5ec;
}
/* End teams  */
</style>
<script>
export default {
  name: "teams",
  data() {
    return {};
  },
  props: [],
  components: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
