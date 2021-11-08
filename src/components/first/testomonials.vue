<template>
  <!-- Start Testimonials -->
    <div class="testimonials">
        <div class="container">
            <div class="main-heading">
                <h2>Testimonials</h2>
                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                    tincidunt.</p>
            </div>
            <div class="contain">
                <div class="image"><img  v-lazy="'img/skills-01.jpg'" alt=""></div>
                <div class="text">
                    <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
                        eget tincidunt. </p>
                    <span>John Doe, CEO</span>
                </div>

            </div>
            <hr>
            <div class="contain">
                <div class="image"><img v-lazy="'img/skills-02.jpg'" alt=""></div>
                <div class="text">
                    <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
                        eget tincidunt. </p>
                    <span>John Doe, CEO</span>
                </div>

            </div>
        </div>
        <div class="stats" id="stats">
          <img v-lazy="'img/stats.png'" alt="">
        <div class="container">
            <div class="box">
                <i class="fas fa-mug-hot"></i>
                <div class="number">{{Years}}</div>
                <p>Years Experience</p>
            </div>
            <div class="box">
                <i class="far fa-folder"></i>
                <div class="number">{{Projects}}</div>
                <p>Completed Projects</p>
            </div>
            <div class="box">
                <i class="far fa-envelope"></i>
                <div class="number">{{Mail}}</div>
                <p>Mail Sent</p>
            </div>
            <div class="box">
                <i class="fas fa-trophy"></i>
                <div class="number">{{Awards}}</div>
                <p>Awards Received</p>
            </div>
        </div>
    </div>
    </div>
        
    <!-- End Testimonials -->
</template>
<script>

export default {
  name: "testomonials",
  data() {
    return {
      Years:5,
      Projects:257,
      Mail:1571,
      Awards:120,
      
    };
  },
  props: [],
  components: {  },
  computed: {},
  methods: {},
  mounted() {
  },
};
</script>
