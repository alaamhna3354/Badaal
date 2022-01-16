<template>
  <!-- Start contact3  -->

  <div class="contact3">
   <div class="main-heading" style="margin-top: -20px;">
                <h2>{{$t('Contact')}}</h2>
            </div>
    <div class="container slider-one-active">
      <div class="steps">
        <div class="step step-one">
          <div class="liner"></div>
          <span>{{ $t('hello') }}</span>
        </div>
        <div class="step step-two">
          <div class="liner"></div>
          <span>{{ $t('Evaluation') }}</span>
        </div>
        <div class="step step-three">
          <div class="liner"></div>
          <span>{{ $t('conclusion') }}</span>
        </div>
      </div>
      <div class="line">
        <div class="dot-move"></div>
        <div class="dot zero"></div>
        <div class="dot center"></div>
        <div class="dot full"></div>
      </div>
      <div class="slider-ctr">
        <div class="slider">
          <form class="slider-form slider-one">
            <label class="input">
              <input
                type="text"
                class="name"
                :placeholder="name_place"
                v-model="name"
              />
            </label>
            <label class="input">
              <input
                type="text"
                :placeholder="email_place"
                ref="email"
                v-model="email"
                @keydown="handleEmail()"
              />
              <i
                class="fa fa-check-circle"
                aria-hidden="true"
                ref="success"
                style="display: none; color: rgb(46, 172, 46)"
              ></i>

              <i
                class="fa fa-exclamation-triangle"
                aria-hidden="true"
                ref="wrong"
                style="display: none; color: rgb(198, 62, 62)"
              ></i>
            </label>

            <button class="first next">{{ $t('next') }}</button>
          </form>
          <form class="slider-form slider-two">
            <h2> {{ $t('are_you_happy') }}</h2>
            <div class="label-ctr">
              <label class="input">
                <textarea
                  style="resize: none"
                  type="text"
                  class="name"
                  :placeholder="message_place"
                >
                </textarea>
              </label>
              <label class="radio">
                <input type="radio" value="happy" name="condition" />
                <div class="emot happy">
                  <div class="mouth sad"></div>
                </div>
              </label>
              <label class="radio">
                <input type="radio" value="happy" name="condition" />
                <div class="emot happy">
                  <div class="mouth smile"></div>
                </div>
              </label>
            </div>
            <button class="second next">{{ $t('next') }}</button>
          </form>
          <div class="slider-form slider-three">
            <h2>{{ $t('hello') }}  <span class="yourname"></span></h2>
            <h3>{{ $t('thx') }}</h3>
            <a class="reset"><button class="botun">{{ $t('Send') }}</button></a>
            <!-- target="_blank" -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End contact3 -->
</template>
<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";
@import "../../assets/scss/thirdcomponents/contact.scss";
</style>
<script>
import $ from "jquery";
export default {
  name: "contact3",
  data() {
    return {
      name: "",
      email: "",
      name_place:"what's your name ?",
      email_place:"Type your Email", 
      message_place:"Type your message", 
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
