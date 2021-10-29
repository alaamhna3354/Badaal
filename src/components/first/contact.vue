<template>
  <!-- Start Contact  -->

  <div class="contact" id="contact">
    <h2 class="special-heading un-color">أتصل بنا</h2>
    <div class="container slider-one-active">
      <div class="steps">
        <div class="step step-one">
          <div class="liner"></div>
          <span>! مرحبا </span>
        </div>
        <div class="step step-two">
          <div class="liner"></div>
          <span>التقييم</span>
        </div>
        <div class="step step-three">
          <div class="liner"></div>
          <span>استنتاج</span>
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
                placeholder="What's your name?"
                v-model="name"
              />
            </label>
            <label class="input">
              <input
                type="text"
                placeholder="Type your Email"
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

            <button class="first next">التالي</button>
          </form>
          <form class="slider-form slider-two">
            <h2>هل أنت سعيد بخدماتنا؟</h2>
            <div class="label-ctr">
              <label class="input">
                <textarea
                  style="resize: none"
                  type="text"
                  class="name"
                  placeholder="Type your message"
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
            <button class="second next">التالي</button>
          </form>
          <div class="slider-form slider-three">
            <h2>مرحبا, <span class="yourname"></span></h2>
            <h3>شكرا لك على تواصلك معنا!</h3>
            <a class="reset"><button class="botun">ارسال</button></a>
            <!-- target="_blank" -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Contact -->
</template>
<style scoped>
/* Start Contact */
.contact {
  position: relative;
  height: 600px;
  direction: ltr;
  background-color: var(--white-color);
  padding: 0;
}
.contact input:focus,
.contact button:focus {
  outline: none;
}

.contact button:hover,
.contact .reset:hover {
  opacity: 0.8;
}

.contact button:active,
.contact .reset:active {
  opacity: 0.5;
}

.contact .container {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -20%);
  -ms-transform: translate(-50%, -20%);
  transform: translate(-50%, -20%);
}

.contact .steps {
  margin-bottom: 10px;
  position: relative;
  height: 25px;
}

.contact .steps > div {
  position: absolute;
  top: 0;
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  transform: translate(-50%);
  height: 25px;
  padding: 0 5px;
  display: inline-block;
  width: 80px;
  text-align: center;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
}

.contact .steps > div > span {
  line-height: 15px;
  height: 25px;
  margin: 0;
  color: #777;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: 600;
}

.contact .steps > div > .liner {
  position: absolute;
  height: 2px;
  width: 0%;
  left: 0;
  top: 50%;
  margin-top: -1px;
  background: #999;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
}

.contact .step-one {
  left: 0;
}

.contact .step-two {
  left: 50%;
  clip: rect(0, 0px, 25px, 0px);
}

.contact .step-three {
  left: 100%;
  clip: rect(0, 0px, 25px, 0px);
}

.contact .line {
  width: 100%;
  margin: 0 auto;
  height: 5px;
  background: #cac8c8;
  position: relative;
  border-radius: 10px;
  overflow: visible;
  margin-bottom: 50px;
}
@media (max-width: 767px) {
  .contact .line {
    width: 50%;
  }
  .contact .step-one {
    left: 50px;
  }
  .contact .step-three {
    left: 80%;
    clip: rect(0, 0px, 25px, 0px);
  }
}
.contact .line .dot-move {
  position: absolute;
  top: 50%;
  left: 0%;
  width: 15px;
  height: 15px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: #ddd;
  border-radius: 50%;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
}

.contact .line .dot {
  position: absolute;
  top: 50%;
  width: 15px;
  height: 15px;
  left: 0;
  background: #ddd;
  border-radius: 50%;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
  -webkit-transform: translate(-50%, -50%) scale(0.5);
  -ms-transform: translate(-50%, -50%) scale(0.5);
  transform: translate(-50%, -50%) scale(0.5);
}

.contact .line .dot.zero {
  left: 0%;
  background: #bbb;
}

.contact .container.slider-one-active .dot.zero {
  background: #5892fc;
}

.contact .line .dot.center {
  left: 50%;
  background: #bbb;
}

.contact .line .dot.full {
  left: 100%;
  background: #bbb;
}

.contact .slider-ctr {
  width: 100%;
  overflow: hidden;
  height: 410px;
}

.contact .slider {
  display: flex;
  overflow: hidden;
  width: 1200px;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
  -webkit-transform: translate(0px) scale(1);
  -ms-transform: translate(0px) scale(1);
  transform: translate(0px) scale(1);
}

.contact .container.slider-one-active .slider-two,
.contact .container.slider-one-active .slider-three {
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
}

.contact .container.slider-two-active .slider-one,
.contact .container.slider-two-active .slider-three {
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
}

.contact .container.slider-three-active .slider-one,
.contact .container.slider-three-active .slider-two {
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
}

.contact .slider-one,
.contact .slider-two,
.contact .slider-three {
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
}

.contact .slider-form {
  float: left;
  width: 32%;
  text-align: center;
}

.contact .slider-form h2 {
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin-bottom: 50px;
  color: #999;
  position: relative;
}

.contact .slider-form h2 .yourname {
  font-weight: 400;
}

.contact .slider-form h3 {
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin-bottom: 50px;
  line-height: 1.5;
  color: #999;
  position: relative;
}

.contact .slider-form h3 .balapa {
  font-family: "Pacifico", sans-serif;
  display: inline-block;
  color: #5892fc;
  text-decoration: none;
}

.contact .slider-form [type="text"] {
  width: 82%;
  box-sizing: border-box;
  padding: 15px 20px;
  background: #fafafa;
  border: 2px solid #ddd;
  color: #777;
  border-radius: 50px;
  margin-bottom: 50px;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  position: relative;
  z-index: 99;
}

.contact .slider-form [type="text"]:focus {
  background: #fcfcfc;
  border: 2px solid #5892fc;
}

.contact .slider-form button,
.contact .reset {
  display: inline-block;
  text-decoration: none;
  background: #5892fc;
  border: none;
  color: white;
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  position: relative;
}

/*  emot */

.contact .label-ctr {
  margin-bottom: 50px;
}

.contact label.radio {
  height: 55px;
  width: 55px;
  display: inline-block;
  margin: 0 10px;
  background: transparent;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
}

.contact label.radio input {
  visibility: hidden;
}

.contact label.radio input:checked + .emot {
  -webkit-transform: scale(1.25);
  -ms-transform: scale(1.25);
  transform: scale(1.25);
}

.contact label.radio input:checked + .emot,
.contact label.radio input:checked + .emot .mouth {
  border-color: #5892fc;
}

.contact label.radio input:checked + .emot:before,
.contact label.radio input:checked + .emot:after {
  background: #5892fc;
}

.contact label.radio .emot {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fafafa;
  border-radius: 50%;
  border: 2px solid #ddd;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
}

.contact label.radio .emot:before {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  width: 5px;
  height: 10px;
  background: #ddd;
}

.contact label.radio .emot:after {
  content: "";
  position: absolute;
  top: 15px;
  right: 15px;
  width: 5px;
  height: 10px;
  background: #ddd;
}

.contact label.radio .emot .mouth {
  position: absolute;
  bottom: 10px;
  right: 15px;
  left: 15px;
  height: 15px;
  border-radius: 50%;
  border: 3px solid #ddd;
  background: transparent;
  clip: rect(0, 35px, 10px, 0);
}

.contact label.radio .emot .mouth.smile {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.contact label.radio .emot .mouth.sad {
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
}

/*	center */

.contact .container.center .line .dot-move {
  left: 50%;
  -webkit-animation: 0.3s anim 1;
}

.contact .container.center .line .dot.center {
  background: #5892fc;
}

.contact .container.center .slider {
  -webkit-transform: translate(-400px);
  -ms-transform: translate(-400px);
  transform: translate(-400px);
}

.contact .container.center .step-two {
  clip: rect(0, 100px, 25px, 0px);
}

.contact .container.center .step-one .liner {
  width: 100%;
}

/*	full */

.contact .container.full .line .dot-move {
  left: 100%;
  -webkit-animation: 0.3s anim 1;
}

.contact .container.full .line .dot.full {
  background: #5892fc;
}

.contact .container.full .slider {
  -webkit-transform: translate(-800px);
  -ms-transform: translate(-800px);
  transform: translate(-800px);
}

.contact .container.full .step-two,
.contact .container.full .step-three {
  clip: rect(0, 100px, 25px, 0px);
}

.contact .container.full .step-one .liner,
.contact .container.full .step-two .liner {
  width: 100%;
}
/* End Contact */
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
