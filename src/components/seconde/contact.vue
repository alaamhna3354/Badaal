<template>
  <section class="contact2" id="contact">
    <div class="contact-container container">
      <div class="contact-img">
        <img v-lazy="'img/Logo.svg'" alt="" />
      </div>

      <div class="form-container">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="E-Mail" />
        <textarea cols="30" rows="6" placeholder="Type Your Message"></textarea>
        <a
          href="#"
          class="botun"
          style="background: var(--main-color); color: var(--secondary-color)"
          >Submit</a
        >
      </div>
    </div>
  </section>
</template>
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
