<template>
  <!-- Start FAQ -->
  <section class="faq-section">
    <div class="container">
      <div class="row">
        <!-- ***** FAQ Start ***** -->
        <div class="col-md-6 offset-md-3">
          <div class="faq-title text-center pb-3">
            <h2>{{$t('Faq')}}</h2>
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
