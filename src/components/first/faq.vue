<template>
  <!-- Start FAQ -->
  <section class="faq-section">
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
                    >{{ item.title }}
                  </h5>
                </div>
              </div>
              <div class="collapse" v-show="item.open">
                <div class="card-body">
                  <p>
                    {{ item.replay }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End FAQ -->
</template>
<style scoped>
/* Start FAQ */

.faq-section {
  background-color: var(--main-color);
  min-height: 100vh;
  padding: 10vh 0;
}
.faq-title h2 {
  position: relative;
  margin-bottom: 45px;
  display: inline-block;
  font-weight: 600;
  line-height: 1;
}
.faq-title h2::before {
  content: "";
  position: absolute;
  left: 50%;
  width: 60px;
  height: 2px;
  background: #6263d5;
  bottom: -25px;
  margin-left: -30px;
}
.faq-title p {
  padding: 0 190px;
  margin-bottom: 10px;
}
.faq {
  background: #ffffff;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
  border-radius: 4px;
}

.faq .card {
  border: none;
  background: none;
  border-bottom: 1px dashed #cee1f8;
}

.faq .card .card-header {
  padding: 0px;
  border: none;
  background: none;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.faq .card .card-header:hover {
  background: rgba(30, 100, 233, 0.25);
  padding-left: 10px;
}
.faq .card .active {
  background: rgba(30, 100, 233, 0.25);
  padding-left: 10px;
}
.faq .card .card-header .faq-title {
  width: 100%;
  text-align: left;
  padding: 0px;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 1px;
  color: #3b566e;
  text-decoration: none !important;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 20px;
}

.faq .card .card-header .faq-title .badge {
  width: 25px;
  height: 25px;
  line-height: 14px;
  float: left;
  border-radius: 100px;
  text-align: center;
  background: #7274f2;
  color: #fff;
  font-size: 17px;
  margin-right: 20px;
  padding: 7px;
}

.faq .card .card-body {
  padding: 30px;
  padding-left: 35px;
  padding-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  color: #6f8ba4;
  line-height: 28px;
  letter-spacing: 1px;
  border-top: 1px solid #f3f8ff;
}

.faq .card .card-body p {
  margin-bottom: 14px;
}

@media (max-width: 991px) {
  .faq {
    margin-bottom: 30px;
  }
  .faq .card .card-header .faq-title {
    line-height: 26px;
    margin-top: 10px;
  }
}
/* End FAQ */
</style>
<script>
export default {
  name: "faq",
  data() {
    return {
      faq: {
        question1: {
          id: 1,
          open: true,
          title: "What is Lorem Ipsum?",
          replay: ` Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.`,
        },
        question2: {
          id: 2,
          open: false,
          title: " Where does it come from?",
          replay: `  Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.`,
        },
        question3: {
          id: 3,
          open: false,
          title: "Where can I get some?",
          replay: `There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.`,
        },
        question4: {
          id: 4,
          open: false,
          title: "                    What is Lorem Ipsum?",
          replay: `It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing`,
        },
        question5: {
          id: 5,
          open: false,
          title: "   Where does it come from?",
          replay: `  The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.`,
        },
      },
    };
  },
  props: [],
  components: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>
