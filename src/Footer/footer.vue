<template>
  <!-- Start Footer -->
  <div class="footer">
    <div class="top-footer">
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
      <div class="left-social">
        <div class="logo">
          <a href="#header"> <img src="../assets/img/Logo.png" alt="" /></a>
        </div>
        <div class="social">
          <i class="fab fa-youtube"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
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
  color: white;
  padding: 30px 10px;
  text-align: center;
  font-size: 18px;
}
.footer .top-footer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
}
.footer .top-footer h3 {
  margin: 0;
}
.footer .top-footer ul {
  list-style: none;
  padding: 0;
}
.footer .top-footer ul li {
  line-height: 1.8;
  cursor: pointer;
  transition: var(--main-duration);
  position: relative;
}
.footer .top-footer ul li a {
  text-decoration: none;
  color: inherit;
}
.footer .top-footer ul li::after {
  content: "";
  width: 0%;
  height: 2px;
  bottom: 0;
  left: 38%;
  position: absolute;
  transition: var(--main-duration);
  background-color: #53d9cb;
}
.footer .top-footer ul li:hover {
  color: #53d9cb;
  padding-inline-end: 10px;
}
.footer .top-footer ul li:hover::after {
  width: 23%;
}
.left-social {
  display: grid;
  place-content: center;
}
.left-social i {
  transition: var(--main-duration);
  cursor: pointer;
  padding: 5px;
}
.left-social i:hover {
  font-size: 25px;
  color: #53d9cb;
  border: 2px solid #53d9cb;
  border-radius: 3px;
}
.footer .top-footer .logo {
  width: 100px;
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
  name: "header",
  components: {},
  mounted() {},
};
</script>
