<template>
  <!-- Start about -->
  <div class="about-view">
    <TitlePage :name="$route.name" :path="$route.name" />
    <div class="container" :about="about" v-if="about.length > 0">
      <div class="text">
        <h1>{{ about.title }}</h1>
        <p>{{ about.subject }}</p>
      </div>
      <p class="right" v-html="about.desc"></p>
    </div>
    <Unavailble :name="'About'" v-else />
    <!-- End about -->
    <!-- Start Team -->
    <div class="teams" v-if="team.length > 0">
      <h2 class="special-heading">Our Team</h2>
      <div class="container">
        <div class="our-team" v-for="item in team" :key="item">
          <div class="picture">
            <img class="img-fluid" v-lazy="item.photo" />
            <!-- v-lazy="'img/manger.jpg'" -->
          </div>
          <div class="team-content">
            <h3 class="name">{{ item.name }}</h3>
            <h4 class="title">{{ item.position }}</h4>
          </div>
          <ul class="social">
            <li>
              <a
                :href="item.facebook"
                class="fab fa-facebook"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                :href="item.twitter"
                class="fab fa-twitter"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                :href="item.instagram"
                class="fab fa-google-plus"
                aria-hidden="true"
              ></a>
            </li>
            <li>
              <a
                :href="item.linkedin"
                class="fab fa-linkedin"
                aria-hidden="true"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Unavailble :name="'Team'" v-else />
    <!-- End Team -->
    <!-- Starr Faq -->
    <section class="faq-section" v-if="faq.length > 0">
      <div class="container">
        <div class="row">
          <!-- ***** FAQ Start ***** -->
          <div class="col-md-6 offset-md-3">
            <div class="faq-title text-center pb-3">
              <h2>FAQ</h2>
            </div>
          </div>
          <div class="col-md-6 offset-md-3">
            <div class="faq">
              <div class="card" v-for="item in faq" :key="item">
                <div
                  class="card-header"
                  :class="{ active: item.open }"
                  @click="item.open = !item.open"
                >
                  <div class="mb-0">
                    <h5
                      class="faq-title"
                      data-toggle="collapse"
                      data-target="#faqCollapse-1"
                      data-aria-expanded="true"
                      data-aria-controls="faqCollapse-1"
                    >
                      <span class="badge">{{ item.id }}</span
                      >{{ item.question }}
                    </h5>
                  </div>
                </div>
                <div class="collapse" v-show="item.open">
                  <div class="card-body">
                    <p>
                      {{ item.answer }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Unavailble :name="'Faq'" v-else />
    <!-- End Faq -->
  </div>
  <!-- End about -->
</template>
<script>
import axios from "axios";
import TitlePage from "../components/global/title-page.vue";
import Unavailble from "../components/global/unavailble.vue";
export default {
  name: "about",
  data() {
    return {
      about: [],
      team: [],
      faq: [],
    };
  },
  props: [""],
  components: { TitlePage, Unavailble },
  computed: {},
  methods: {
    async fetch() {
      var self = this;
      await axios
        .get(`http://badaelonline.com/backend/public/about-us`) //about-us
        .then((res) => {
          self.about = res.data.data.about;
          self.team = res.data.data.team;
          self.faq = res.data.data.faq;

          // console.log("team: ", res.data.data.team);
        })
        .catch(function (error) {
          console.warn("Error fetch about ", error.toJSON());
        });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
