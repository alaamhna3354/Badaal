<template>
  <!-- Start Contact -->
    <div class="contact">
      <img class="img" v-lazy="'img/subscribe.jpg'" alt="">
        <div class="container">
            <div class="main-heading">
                <h2 style="color:#fff">Contact Us</h2>
                <p  style="color:#fff">
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                    tincidunt.
                </p>
            </div>
            <div class="conten">
                <div >
        <img v-lazy="'img/Logo.svg'" alt="" />
      </div>
                <form action="">
                    <input class="main-input" type="text" name="name" placeholder="Your Name" >
                    <input class="main-input" type="email" name="mail" placeholder="Your Email" >
                    <textarea class="main-input" name="message" placeholder="Your Message"></textarea>
                       <button class="submit">Send Message</button>
                     
                </form>
                <div class="info">
                    <h4>Get In Touch</h4>
                    <span class="phone">+963 933.080.648</span>
                    <span class="phone">+963 933.080.648</span>
                    <h4>Where We Are</h4>
                    <address>Awesome Address 17<br />Syria, Swidaa<br />933.080.648</address>
                </div>
            </div>
        </div>
    </div>
    <!-- End Contact -->
</template>
<script>
export default {
  name: "contact",
  data() {
    return {
    
    };
  },
  props: [],
  components: {},
  computed: {},
  methods: {},
  mounted() {
   
  },
};
</script>
