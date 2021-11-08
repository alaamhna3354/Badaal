<template>
  <!-- Start Footer -->
  <div class="footer">
    <div class="over-lay"></div>
      <div class="top-footer">
                <div class="left-social">
        <div class="logo">
          <a href="#header"> <img v-lazy="'img/Logo.svg'" alt="" /></a>
        </div>
        <div class="social">
          <i class="fab fa-youtube"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
      </div>
    <div class="center-footer">
      <ul>
        <h3>الشركة</h3>
        <ul>
          <li><a href="#about"> من نحن</a></li>
          <li><a href="#service"> الخدمات </a></li>
          <li><a href="#">الاسئلة الشائعة</a></li>
          <li><a href="#">التوظيف</a></li>
        </ul>
      </ul>
      <ul>
        <h3>تواصل معنا</h3>
        <ul>
          <li><a href="#">انضم لنا</a></li>
          <li><a href="#contact">تواصل معنا</a></li>
        </ul>
      </ul>
      <ul>
        <h3>الأنظمة</h3>
        <ul>
          <li>الشروط والأحكام</li>
          <li>سياسة الخصوصية</li>
        </ul>
      </ul>

    </div>
    <div class="bottom-footer">
      <div>الحقوق محفوظة © 2021 البدائل. جميع الحقوق محفوظة.</div>
    </div>
  </div>
  <!-- End Footer -->
</template>
<style scoped>
/* Start Footer */
.footer {
  background-color: var(--secondary-color);
  color: var(--white-color);
  padding: 30px 10px;
  text-align: center;
  font-size: 18px;
  background-image: url(../../public/img/stats.png);
  background-size: cover;
  position: relative;
}
.footer .over-lay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #0000006b;
  top: 100%;
  left: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
.footer .top-footer,.footer .center-footer,.footer .bottom-footer{
  position: relative;
  z-index: 2;
}
.footer .center-footer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
}
.footer .center-footer h3 {
  margin: 0;
}
.footer .center-footer ul {
  list-style: none;
  padding: 0;
}
.footer .center-footer ul li {
  line-height: 1.8;
  cursor: pointer;
  transition: var(--main-duration);
  position: relative;
}
@media (max-width:576px) {
.footer .center-footer ul li {
  line-height:2;
}
}
.footer .center-footer ul li a {
  text-decoration: none;
  color: inherit;
}
.footer .center-footer ul li::after {
  content: "";
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 38%;
  position: absolute;
  transition: var(--main-duration);
  background-color: var(--titleSection-color);
}
.footer .center-footer ul li:hover {
   text-shadow:
      0 0 7px  var(--titleSection-color),
      0 0 10px  var(--titleSection-color),
      0 0 21px  var(--titleSection-color),
      0 0 42px  var(--titleSection-color),
      0 0 82px  var(--titleSection-color);
  padding-inline-end: 10px;
}
.footer .center-footer ul li:hover::after {
  width: 23%;
  box-shadow:
      0 0 7px  var(--titleSection-color),
      0 0 10px  var(--titleSection-color),
      0 0 21px  var(--titleSection-color),
      0 0 42px  var(--titleSection-color),
      0 0 82px  var(--titleSection-color);
}

.left-social i:hover {
  font-size: 25px;
  color: var(--titleSection-color);
  border: 2px solid var(--titleSection-color);
  border-radius: 3px;
}

.left-social {
    display: grid;
    place-content: center;
    width: 90%;
    margin: 0 auto;
    border-bottom: 2px solid #fff;
    padding: 25px 0;
}
.left-social i {
  transition: var(--main-duration);
  cursor: pointer;
  padding: 5px;
}
.footer .top-footer .logo {
  width: 150px;
  cursor: pointer;
}
.footer .top-footer .logo img {
  width: 100%;
}
.footer span {
  font-weight: bold;
  color: var(--main-color);
}
.footer .bottom-footer {
  display: flex;
  justify-content: flex-end;
  padding-inline-end: 50px;
  font-size: 14px;
  margin: 10px 0;
}
/* End Footer */
</style>
<script>
export default {
  name: "footer",
  components: {},
  mounted() {},
};
</script>