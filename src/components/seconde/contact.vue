<template>
  <section id="contact">
    <div class="contact-container container">
      <div class="contact-img">
        <img src="../../assets/img/Logo.png" alt="" />
      </div>

      <div class="form-container">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="E-Mail" />
        <textarea cols="30" rows="6" placeholder="Type Your Message"></textarea>
        <a href="#" class="botun botun-primary">Submit</a>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* ........ Contact Us........... */

#contact {
  padding: 5rem 0;
  background: rgb(226, 226, 226);
}

.contact-container {
  display: flex;
  background: #fff;
  padding: 0;
}

.contact-img {
  width: 50%;
  background-color: #e2e2e2;
}

.contact-img img {
  display: block;
  height: 400px;
  width: 100%;
  object-position: center;
  object-fit: cover;
}

.form-container {
  padding: 1rem;
  width: 50%;
  margin: auto;
  background-color: #e2e2e2;
}

.form-container input {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ddd;
  padding: 1rem 0;
  box-shadow: none;
  outline: none;
  margin-bottom: 1rem;
  color: #444;
  font-weight: 500;
  border-radius: 7px;
}

.form-container textarea {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ddd;
  color: #444;
  outline: none;
  padding: 1rem 0;
  resize: none;
  border-radius: 7px;
  margin-bottom: 20px;
}

.form-container h2 {
  font-size: 2.7rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 1rem;
  margin-top: -1.2rem;
}

.form-container a {
  font-size: 1.3rem;
  text-decoration: none;
}
</style>
<script>
import $ from "jquery";
export default {
  name: "contact",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  props: [],
  components: {},
  computed: {},
  methods: {},
  mounted() {
    this.$store.dispatch("loadHome");
    var $firstButton = $(".first"),
      $secondButton = $(".second"),
      // $input = $("input"),
      $name = $(".name"),
      // $more = $(".more"),
      $yourname = $(".yourname"),
      // $reset = $(".reset"),
      $ctr = $(".container");
    $firstButton.on("click", function (e) {
      $(this)
        .text("Saving...")
        .delay(900)
        .queue(function () {
          $ctr
            .addClass("center slider-two-active")
            .removeClass("full slider-one-active");
        });
      e.preventDefault();
    });

    $secondButton.on("click", function (e) {
      $(this)
        .text("Saving...")
        .delay(900)
        .queue(function () {
          $ctr
            .addClass("full slider-three-active")
            .removeClass("center slider-two-active slider-one-active");
          $name = $name.val();
          if ($name == "") {
            $yourname.html("Anonymous!");
          } else {
            $yourname.html($name + "!");
          }
        });
      e.preventDefault();
    });
  },
};
</script>
