<template>
  <div class="home">
    <!-- Start Landing Section  ../assets/img/featuers-services.svg -->
    <swiper
      class="parallax-slider"
      :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
      :speed="1500"
      parallax
      grabCursor
      @swiper="onSwiperInitialized"
    >
      <div class="parallax-slider-navigation">
        <div class="nav-indicator prevArrow">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
        <div class="nav-indicator nextArrow">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
      <swiper-slide
        class="parallax-slide"
        v-for="image in images"
        :key="image.id"
      >
        <div class="intro-text">
          <h2>أبرز خدماتنا</h2>
          <p>شريكك في الخدمات والحلول اللوجستية</p>
          <p class="lorem">
            شريكك في الخدمات والحلول اللوجستية شريكك في <br />الخدمات والحلول
            اللوجستية شريكك في الخدمات والحلول اللوجستية.
          </p>
          <a href="#"
            ><button class="botun">
              أتصل بنا<i class="fab fa-whatsapp" aria-hidden="true"></i></button
          ></a>
          <!-- target="_blank" -->
        </div>
        <div
          class="parallax-slide-image"
          :data-swiper-parallax="parallaxAmount"
          :data-swiper-parallax-opacity="0.5"
        >
          <img :src="image.imageUrl" />
        </div>
      </swiper-slide>
    </swiper>
    <!-- End Landing Section -->
    <!-- Start About -->
    <!--  -->
    <div class="about" id="about">
      <div class="container">
        <h2 class="special-heading">من نحن</h2>
        <div class="about-content">
          <div class="image" data-aos="fade-left" data-aos-duration="1500">
            <img src="../assets/img/about.jpg" alt="" />
          </div>
          <div class="text" data-aos="fade-right" data-aos-duration="1500">
            <div class="img-manger">
              <img src="../assets/img/manger.jpg" alt="" />
            </div>
            <p v-if="about" :key="about">
              {{ about.subject }}
            </p>
            <hr />
            <p v-html="about.desc"></p>
            <a href="#"
              ><button class="botun">
                من نحن<i class="fa fa-users" aria-hidden="true"></i></button
            ></a>
          </div>
        </div>
      </div>
    </div>
    <!-- End About -->
    <!-- Start Blog -->
    <div class="blog" id="blog">
      <h2 class="special-heading un-color">مقالات</h2>
      <swiper
        class="swiper"
        :direction="'vertical'"
        :slidesPerView="auto"
        :freeMode="true"
      >
        <swiper-slide>
          <div class="containe">
            <div
              class="card-container auto-heigh"
              v-for="item in blog.slice(0, 1)"
              :key="item"
            >
              <div class="card colum-card">
                <div class="card-body">
                  <span class="card-number subtle">
                    Viewer
                    <span class="card-number card-circle subtle">
                      {{ item.views }}</span
                    ></span
                  >

                  <h2 class="card-title">{{ item.title }}</h2>
                  <span
                    class="card-description subtle"
                    v-html="item.body"
                  ></span>

                  <div class="card-read"><span>قراءة</span></div>
                  <span class="card-tag tag-circle subtle">{{
                    item.keyword
                  }}</span>
                </div>
                <div class="image">
                  <!--  :src="`http://badaelonline.com/backend/public/${item.cover}`" -->
                  <img
                    src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
                    alt=""
                    class="card-media"
                  />
                </div>
              </div>
              <div class="card-shadow"></div>
            </div>

            <div
              class="card-container auto-heigh"
              v-for="item in blog.slice(1, 2)"
              :key="item"
            >
              <div class="card colum-card">
                <div class="card-body">
                  <span class="card-number subtle">
                    Viewer
                    <span class="card-number card-circle subtle">
                      {{ item.views }}</span
                    ></span
                  >

                  <h2 class="card-title">{{ item.title }}</h2>
                  <span
                    class="card-description subtle"
                    v-html="item.body"
                  ></span>

                  <div class="card-read"><span>قراءة</span></div>
                  <span class="card-tag tag-circle subtle">{{
                    item.keyword
                  }}</span>
                </div>
                <div class="image">
                  <!--  :src="`http://badaelonline.com/backend/public/${item.cover}`" -->
                  <img
                    src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
                    alt=""
                    class="card-media"
                  />
                </div>
              </div>
              <div class="card-shadow"></div>
            </div>
            <div>
              <div class="card-container auto-heigh">
                <div class="card">
                  <div class="card-body">
                    <span class="card-number card-circle subtle">02</span>
                    <h2 class="card-title">عنوان المقالة</h2>
                    <span class="card-description subtle"
                      >عنوان المقالة عنوان المقالة عنوان المقالة عنوان المقالة
                      عنوان عنوان المقالة عنوان المقالة عنوان المقالة عنوان
                      المقالة عنوان المقالة.</span
                    >
                    <div class="card-read"><span>قراءة</span></div>
                    <span class="card-tag card-circle subtle">tag</span>
                  </div>
                  <div class="image">
                    <img
                      src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
                      alt=""
                      class="card-media"
                    />
                  </div>
                </div>
                <div class="card-shadow"></div>
              </div>
              <div class="card-container auto-heigh">
                <div class="card">
                  <div class="card-body">
                    <span class="card-number card-circle subtle">02</span>
                    <h2 class="card-title">عنوان المقالة</h2>
                    <span class="card-description subtle"
                      >عنوان المقالة عنوان المقالة عنوان المقالة عنوان المقالة
                      عنوان عنوان المقالة عنوان المقالة عنوان المقالة عنوان
                      المقالة عنوان المقالة.</span
                    >
                    <div class="card-read"><span>قراءة</span></div>
                    <span class="card-tag card-circle subtle">tag</span>
                  </div>
                  <div class="image">
                    <img
                      src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
                      alt=""
                      class="card-media"
                    />
                  </div>
                </div>
                <div class="card-shadow"></div>
              </div>
              <div class="card-container auto-heigh">
                <div class="card">
                  <div class="card-body">
                    <span class="card-number card-circle subtle">02</span>
                    <h2 class="card-title">عنوان المقالة</h2>
                    <span class="card-description subtle"
                      >عنوان المقالة عنوان المقالة عنوان المقالة عنوان المقالة
                      عنوان عنوان المقالة عنوان المقالة عنوان المقالة عنوان
                      المقالة عنوان المقالة.</span
                    >
                    <div class="card-read"><span>قراءة</span></div>
                    <span class="card-tag card-circle subtle">tag</span>
                  </div>
                  <div class="image">
                    <img
                      src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
                      alt=""
                      class="card-media"
                    />
                  </div>
                </div>
                <div class="card-shadow"></div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide> </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- End Blog -->
  <!-- Start Portfolio -->
  <div class="port">
    <div class="portfolios back-color" id="portfolio">
      <h2 class="special-heading un-color">أعمالنا</h2>
      <div class="image">
        <img
          src="../assets/img/screen-preview.svg"
          alt=""
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <div class="slide-preview">
          <swiper
            class="swiper"
            :slides-per-view="1"
            :space-between="50"
            navigation
            :speed="1000"
          >
            <swiper-slide v-for="item in portfolio" :key="item">
              <a href="">
                <img
                  :src="`http://badaelonline.com/backend/public/${item.cover}`"
                  :alt="item.name"
                />
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
  <!-- End Portfolio -->
  <!-- Start friendly brands -->
  <div class="contacts" id="brand">
    <div class="container">
      <h2 class="special-heading">علامات تجارية صديقة</h2>
      <swiper
        class="swiper"
        :slides-per-view="4"
        :space-between="50"
        :scrollbar="{ draggable: true }"
        :speed="1000"
        :breakpoints="breakpoints1"
      >
        <swiper-slide v-for="item in partner" :key="item">
          <a :href="item.link">
            <img src="../assets/img/brand.png" :alt="item.name" />
          </a>
          <!--  :src="`http://badaelonline.com/backend/public/${item.cover}`" -->
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- End friendly brands -->
  <!-- Start Services -->
  <div class="services back-color" id="service">
    <h2 class="special-heading un-color">خدماتنا</h2>
    <div class="container">
      <div class="has-outline" v-for="item in service" :key="item">
        <i>{{ item.icon }}</i>
        <h2>{{ item.title }}</h2>
      </div>
    </div>
  </div>
  <!-- End Services -->
  <!-- Start Testimonials -->
  <div class="testimonials" id="testimonials">
    <h2 class="special-heading un-color">عملائنا</h2>
    <div class="contain">
      <swiper
        class="swiper"
        :slides-per-view="2"
        :space-between="50"
        :pagination="{ clickable: true }"
        :speed="1000"
        :breakpoints="breakpoints2"
      >
        <swiper-slide>
          <div class="contain-rate">
            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque, magni animi odit quae tenetur blanditiis
                non sit odio reiciendis.
              </p>
            </div>
            <div class="user">
              <div class="image">
                <img src="../assets/img/manger.jpg" alt="" />
              </div>
              <div class="details">
                <h2>عدوان أدهم</h2>
                <h4>المؤسس / المدير التنفيذي</h4>
                <span class="rating"
                  ><span>★</span> <span>★</span><span>★</span><span>★</span>
                  <span>☆</span></span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="contain-rate">
            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque, magni animi odit quae tenetur blanditiis
                non sit odio reiciendis.
              </p>
            </div>
            <div class="user">
              <div class="image">
                <img src="../assets/img/manger.jpg" alt="" />
              </div>
              <div class="details">
                <h2>عدوان أدهم</h2>
                <h4>المؤسس / المدير التنفيذي</h4>
                <span class="rating"
                  ><span>★</span> <span>★</span><span>★</span><span>★</span>
                  <span>☆</span></span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="contain-rate">
            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque, magni animi odit quae tenetur blanditiis
                non sit odio reiciendis.
              </p>
            </div>
            <div class="user">
              <div class="image">
                <img src="../assets/img/manger.jpg" alt="" />
              </div>
              <div class="details">
                <h2>عدوان أدهم</h2>
                <h4>المؤسس / المدير التنفيذي</h4>
                <span class="rating"
                  ><span>★</span> <span>★</span><span>★</span><span>★</span>
                  <span>☆</span></span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="contain-rate">
            <div class="comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate doloremque, magni animi odit quae tenetur blanditiis
                non sit odio reiciendis.
              </p>
            </div>
            <div class="user">
              <div class="image">
                <img src="../assets/img/manger.jpg" alt="" />
              </div>
              <div class="details">
                <h2>عدوان أدهم</h2>
                <h4>المؤسس / المدير التنفيذي</h4>
                <span class="rating"
                  ><span>★</span> <span>★</span><span>★</span><span>★</span>
                  <span>☆</span></span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- End Testimonials -->
  <!-- Start Our Team -->
  <div class="teams" id="teams">
    <h2 class="special-heading">فريقنا</h2>
    <div class="container">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="../assets/img/manger.jpg" />
          <!-- https://picsum.photos/130/130?image=856 -->
        </div>
        <div class="team-content">
          <h3 class="name">أدهم عدوان</h3>
          <h4 class="title">المؤسس و المدير التنفيذي</h4>
          <h4 class="title">السويداء</h4>
        </div>
        <ul class="social">
          <li><a href="" class="fab fa-facebook" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-twitter" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="../assets/img/manger.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">أدهم عدوان</h3>
          <h4 class="title">المؤسس و المدير التنفيذي</h4>
          <h4 class="title">السويداء</h4>
        </div>
        <ul class="social">
          <li><a href="" class="fab fa-facebook" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-twitter" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="../assets/img/manger.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">أدهم عدوان</h3>
          <h4 class="title">المؤسس و المدير التنفيذي</h4>
          <h4 class="title">السويداء</h4>
        </div>
        <ul class="social">
          <li><a href="" class="fab fa-facebook" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-twitter" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="../assets/img/manger.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">أدهم عدوان</h3>
          <h4 class="title">المؤسس و المدير التنفيذي</h4>
          <h4 class="title">السويداء</h4>
        </div>
        <ul class="social">
          <li><a href="" class="fab fa-facebook" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-twitter" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-google-plus" aria-hidden="true"></a></li>
          <li><a href="" class="fab fa-linkedin" aria-hidden="true"></a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- End Our Team -->
  <!-- Start Contact  -->
  <h2 class="special-heading un-color" style="background-color: #c2e7fb">
    أتصل بنا
  </h2>
  <div class="contact" id="contact">
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
/* Start Landing Section */
.parallax-slider {
  position: relative;
}
.parallax-slide {
  height: 500px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.parallax-slider-navigation {
  position: absolute;
  top: 50%;
  z-index: 11;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 0;
}
.parallax-slide-image {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.parallax-slide-image img {
  width: 100%;
}
.nav-indicator {
  height: 40px;
  width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #6b77f6;
  color: #ffffff;
  border-radius: 40px;
  cursor: pointer;
  position: relative;
  transform: translateY(-50%);
}

.intro-text {
  position: absolute;
  z-index: 10;
  display: grid;
  place-content: center;
  width: 100%;
}
.intro-text h2 {
  color: #272b31;
  font-size: 30px;
}
.intro-text p {
  color: #010f11;
  font-size: 20px;
}
.intro-text .lorem {
  color: #242828;
  font-size: 15px;
}
/* End Landing Section */
/* Start About */
.about {
  padding-top: var(--section-padding);
  padding-bottom: 20px;
}
.about .about-content {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.about .about-content .image {
  position: relative;
  width: 500px;
  height: 400px;
}
@media (max-width: 991px) {
  .about .about-content {
    margin-top: 50px;
    flex-direction: column;
    text-align: center;
  }
  .about .about-content .image {
    margin: 0 auto 60px;
    width: 300px;
    height: 200px;
  }
}
.about .about-content .image img {
  max-width: 100%;
}
.about .about-content .text {
  flex-basis: calc(90% - 500px);
  position: relative;
}
.about .about-content .text .img-manger {
  position: absolute;
  z-index: -1;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}
.about .about-content .text .img-manger img {
  width: 100%;
  border-radius: 50%;
  height: 100%;
}
.about .about-content .text p:first-of-type {
  font-weight: bold;
  line-height: 2;
  margin-bottom: 50px;
  color: #575757;
}
.about .about-content .text hr {
  width: 50%;
  display: inline-block;
  border-color: var(--main-color);
}
.about .about-content .text p:last-of-type {
  line-height: 2;
  color: #777;
}
/* End About */
/* Start Blog */
.subtle {
  color: #aaa;
}
.blog {
  padding: 0 0 25px 0;
  background-color: #cdfd;
  height: 600px;
  overflow: scroll;
  scrollbar-width: none;
}
.blog .containe {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 10px;
}
.blog .card-container {
  margin: 25px 0;
  position: relative;
  width: auto;
  height: 310px;
  cursor: pointer;
  transition: var(--main-duration);
}
.blog .card-container:hover {
  scale: 0.9;
}
.auto-heigh {
  height: auto !important;
}
.blog .image img {
  width: 100%;
  height: 100%;
}
.blog .card {
  background-color: #fff;
  padding: 10px;
  position: relative;
  box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  z-index: 1;
  display: flex;
}
.blog .card-body {
  display: inline-block;
  width: 60%;
}
.blog .image {
  width: 40%;
}
.blog .card-number {
  margin-top: 15px;
}

.blog .card-circle {
  border: 1px solid #164b59;
  border-radius: 50%;
  display: inline-block;
  line-height: 22px;
  font-size: 13px;
  height: 25px;
  text-align: center;
  width: 25px;
  font-weight: bold;
  color: #164b59;
}
.blog .tag-circle {
  border: 2px solid #164b59;
  border-radius: 50%;
  display: inline-block;
  line-height: 22px;
  font-size: 13px;
  height: 50px;
  text-align: center;
  width: 60px;
  font-weight: bold;
  color: #164b59;
}
.blog .card-author {
  display: block;
  font-size: 12px;
  letter-spacing: 0.5px;
  margin: 15px 0 0;
  text-transform: uppercase;
}

.blog .card-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 50px;
  font-weight: 300;
  line-height: 60px;
  margin: 10px 0;
  color: #164b59;
}

.blog .card-description {
  display: inline-block;
  font-weight: 300;
  line-height: 22px;
  margin: 10px 0;
}

.blog .card-read {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 5px 0 20px;
  text-align: right;
  text-transform: uppercase;
}
.blog .card-read span {
  background-color: #164b59;
  color: #fff;
  padding: 5px;
  border-radius: 7px;
  cursor: pointer;
  transition: var(--main-duration);
}
.blog .card-read span:hover {
  padding-inline-start: 10px;
  opacity: 0.9;
}
.blog .card-tag {
  float: right;
  margin: 5px 0 0;
  display: grid;
  align-items: center;
}

.blog .card-media {
  float: right;
}

.blog .card-shadow {
  background-color: #fff;
  box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 1), 0 2px 50px 2px rgba(0, 0, 0, 1),
    0 0 100px 3px rgba(0, 0, 0, 0.25);
  height: 1px;
  margin: -1px auto 0;
  width: 80%;
  z-index: -1;
}
/* colum-card blog*/
.colum-card {
  display: flex;
  flex-direction: column-reverse;
}
.colum-card .card-body {
  width: 100%;
  display: grid;
}
.colum-card .image {
  width: 100%;
  height: 400px;
}
/* row-card blog*/
.row-card .card-body {
  width: 65%;
}
.row-card .image {
  width: 50%;
}

/* End Blog */
/* Start Portfolio */
.port {
  background-color: #cfdefc;
}
.portfolios {
  border-top-left-radius: 200px;
}
.portfolios,
.contacts {
  overflow: hidden;
}
.portfolios .image {
  width: 70%;
  margin: 0 auto;
  position: relative;
}
@media (max-width: 767.98px) {
  .portfolios .image {
    width: 100%;
  }
}
.portfolios .image img {
  max-width: 100%;
}
.portfolios .slide-preview {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -64%);
  width: 82%;
  height: 76%;
}
.portfolios .slide-preview img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
/* End Portfolio */
/* Start Services  */
.services {
  padding-bottom: 50px;
}
.services .container {
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
}
.has-outline {
  color: darkcyan;
  background: #b1d9d3;
  border-radius: 50%;
  padding: 5px;
  position: relative;
  width: 250px;
  height: 250px;
  display: grid;
  place-content: center;
  margin: 25px 0;
  cursor: pointer;
  transition: var(--main-duration);
  box-shadow: 1px 1px 26px #00ffd8;
}
.has-outline i {
  display: flex;
  justify-content: center;
}
.has-outline h2 {
  text-shadow: 1px 6px 5px cadetblue;
}
.has-outline:after {
  border-radius: 50%;
  padding: 5px;
  border: 2px dashed #9dd5cf;
  position: absolute;
  content: "";
  top: -6px;
  left: -6px;
  bottom: -6px;
  right: -6px;
  transition: var(--main-duration);
}
.has-outline:hover {
  scale: 1.1;
}
.has-outline:hover::after {
  border: 6px solid #00d2b2;
}
/* End services  */
/* Start testimonials */
.testimonials {
  background-color: #c2e7fb;
  overflow: hidden;
}
.testimonials .contain {
  padding-inline-start: 60px;
  padding-bottom: 50px;
}

.testimonials .contain-rate {
  width: 90%;
}
.testimonials .comment {
  background-color: #4f93ae;
  padding: 5px 10px;
  border-radius: 20px;
  color: #fff;
  position: relative;
}
.testimonials .comment::before {
  content: "";
  border-style: solid;
  border-width: 10px;
  border-color: #4f93ae transparent transparent transparent;
  position: absolute;
  bottom: -20px;
  left: 40px;
}
.testimonials .user {
  display: flex;
  gap: 50px;
  margin-top: 25px;
}
.testimonials .user .image {
  width: 100px;
  height: 100px;
}
.testimonials .user .image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.details h2 {
  color: #1abc9c;
}
.details h4 {
  color: #728a85;
}
.details .rating {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.details .rating span {
  color: #ffdc12;
  font-size: 25px;
}
/* End testimonials  */
/* Start teams  */
.teams .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
}
.our-team {
  margin-top: 50px;
  padding: 30px 0 40px;
  margin-bottom: 30px;
  background-color: #bbecff63;
  text-align: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.our-team .picture {
  display: inline-block;
  height: 130px;
  width: 130px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}

.our-team .picture::before {
  content: "";
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: #1daad2;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 0.9;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}

.our-team:hover .picture::before {
  height: 100%;
}

.our-team .picture::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #1daad2;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.our-team .picture img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
}

.our-team:hover .picture img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}
.our-team .name {
  color: #3e8697;
}
.our-team .title {
  display: block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
}
.our-team .social {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #1daad2;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
}

.our-team:hover .social {
  bottom: 0;
}

.our-team .social li {
  display: inline-block;
}

.our-team .social li a {
  display: block;
  padding: 10px;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;
}

.our-team .social li a:hover {
  color: #1daad2;
  background-color: #f7f5ec;
}
/* End teams  */
/* Start Contact */
.contact {
  position: relative;
  height: 500px;
  direction: ltr;
  background-color: #c2e7fb;
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
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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
// @ is an alias to /src
import $ from "jquery";
import axios from "axios";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Parallax,
} from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, Parallax]);
export default {
  name: "Home",
  data() {
    return {
      about: [],
      blog: [],
      portfolio: [],
      partner: [],
      service: [],
      parallaxSwiperWidth: 0,
      images: [
        { id: 1, imageUrl: require("../assets/img/featuers-services.svg") },
        { id: 2, imageUrl: require("../assets/img/featuers-services.jpg") },
        { id: 3, imageUrl: require("../assets/img/featuers-services.webp") },
      ],
      breakpoints1: {
        300: {
          // when window width from 300px to 576px
          slidesPerView: 2,
          spaceBetween: 50,
        },
        576: {
          // when window width from 576px to 767px
          slidesPerView: 2,
          spaceBetween: 50,
        },
        767: {
          // when window width from 767px to 991px
          slidesPerView: 3,
          spaceBetween: 50,
        },

        991: {
          // when window width from 991px to 1200px
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1200: {
          // when window width from 1200px to higher
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
      breakpoints2: {
        300: {
          // when window width from 300px to 576px
          slidesPerView: 1,
          spaceBetween: 50,
        },
        576: {
          // when window width from 576px to 767px
          slidesPerView: 1,
          spaceBetween: 50,
        },
        767: {
          // when window width from 767px to 991px
          slidesPerView: 2,
          spaceBetween: 50,
        },

        991: {
          // when window width from 991px to 1200px
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1200: {
          // when window width from 1200px to higher
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    };
  },
  computed: {
    parallaxAmount() {
      return this.parallaxSwiperWidth * 0.5;
    },
  },
  methods: {
    async fetch() {
      var self = this;

      // sections
      await axios
        .get(`http://badaelonline.com/backend/public/`)
        .then((res) => {
          self.about = res.data.data.about;
          self.blog = res.data.data.lpost;
          self.portfolio = res.data.data.portfolio;
          self.partner = res.data.data.partner;
          self.service = res.data.data.service;
          console.log("service: ", res.data.data.service);
        })
        .catch(function (error) {
          console.warn("Error blog ", error.toJSON());
        });
    },
    onSwiperInitialized(swiper) {
      this.parallaxSwiperWidth = swiper.width;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    this.fetch();
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
