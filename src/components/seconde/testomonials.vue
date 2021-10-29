<template>
  <section id="testimonials">
    <h2 class="testimonial-title">What Our Customers Say</h2>
    <div class="testimonial-container container">
      <div class="testimonial-box">
        <div class="customer-detail">
          <div class="customer-photo">
            <img src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg" alt="" />
            <p class="customer-name">Ross Lee</p>
          </div>
        </div>
        <div class="star-rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <p class="testimonial-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          voluptas cupiditate aspernatur odit doloribus non.
        </p>
      </div>
      <div class="testimonial-box">
        <div class="customer-detail">
          <div class="customer-photo">
            <img src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg" alt="" />
            <p class="customer-name">Amelia Watson</p>
          </div>
        </div>
        <div class="star-rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <p class="testimonial-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          voluptas cupiditate aspernatur odit doloribus non.
        </p>
      </div>
      <div class="testimonial-box">
        <div class="customer-detail">
          <div class="customer-photo">
            <img src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg" alt="" />
            <p class="customer-name">Ben Roy</p>
          </div>
        </div>
        <div class="star-rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <p class="testimonial-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          voluptas cupiditate aspernatur odit doloribus non.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
#testimonials {
  padding: 5rem 0;
  background: rgba(243, 243, 243);
}

.testimonial-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  color: #555;
}

.testimonial-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
}

.testimonial-box .checked {
  color: #ff9529;
}

.testimonial-box .testimonial-text {
  margin: 1rem 0;
  color: #444;
}

.testimonial-box {
  text-align: center;
  padding: 1rem;
}

.customer-photo img {
  display: block;
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  margin: auto;
}
</style>
<script>
export default {
  name: "testomonials",
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
