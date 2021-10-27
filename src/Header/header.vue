<template>
  <div class="header" id="header">
    <div class="container">
      <div class="logo"><img src="../assets/img/Logo.svg" alt="" /></div>
      <div class="nav"><a href="#about">من نحن</a></div>
      <div class="nav"><a href="#blog">مقالات</a></div>
      <div class="nav"><a href="#portfolio">أعمالنا</a></div>
      <div class="nav"><a href="#brand">علامات تجارية</a></div>
      <div class="nav"><a href="#service">خدماتنا</a></div>
      <div class="nav"><a href="#testimonials">عملائنا</a></div>
      <div class="nav"><a href="#teams">فريقنا</a></div>
      <div class="nav"><a href="#contact">اتصل بنا</a></div>
      <div class="links" id="links">
        <ul class="menu">
          <li>
            <span class="icon">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <ul id="ul_links">
              <li><a href="#about">من نحن</a></li>
              <li><a href="#blog">مقالات</a></li>
              <li><a href="#portfolio">أعمالنا</a></li>
              <li><a href="#brand">علامات تجارية</a></li>
              <li><a href="#service">خدماتنا</a></li>
              <li><a href="#testimonials">عملائنا</a></li>
              <li><a href="#teams">فريقنا</a></li>
              <li><a href="#contact">اتصل بنا</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Start Header */
.header {
  padding: 10px;
  background: var(--secondary-color);
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .logo {
  width: 100px;
  cursor: pointer;
  display: grid;
}
.header .logo img {
  width: 100%;
}
.header .links {
  position: relative;
  display: none;
}
.header .nav {
  transition: var(--main-duration);
  position: relative;
  font-size: 17px;
}
.header .nav::before {
  content: "";
  width: 0%;
  height: 3px;
  background-color: #3b97b1;
  position: absolute;
  bottom: -5px;
  transition: var(--main-duration);
}
.header .nav a {
  text-decoration: none;
  font-weight: 800;
  color: #fff;
}
.header .nav:hover::before {
  width: 100%;
}
.header .nav:hover a {
  color: #1daad2;
}
.header .links:hover span:nth-child(2) {
  width: 100%;
}
.header .icon {
  width: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  cursor: pointer;
}
.header .icon span {
  background-color: #1daad2;
  height: 2px;
  margin-bottom: 5px;
}
.header .icon span:first-child,
.header .icon span:last-child {
  width: 100%;
}
.header .icon span:nth-child(2) {
  width: 60%;
  transition: var(--main-duration);
}
.header .menu {
  display: block;
  margin: 0 auto;
  position: relative;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: end;
}
.header .menu ul::before {
  content: "";
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #3b9ab1cf transparent;
  position: absolute;
  right: 0;
  top: -20px;
}
.header .menu ul {
  background: #ddd;
  height: 0;
  right: 10px;
  opacity: 0;
  position: absolute;
  transition: var(--main-duration);
  top: 35px;
  width: 100%;
  z-index: 10;
  list-style: none;
  padding: 0;
  background-color: #3b9ab1cf;
  text-align: center;
  padding: 5px 0;
}
.block {
  width: 150px !important;
  height: auto !important;
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.header .menu ul li {
  line-height: 1.5;
  transition: var(--main-duration);
  position: relative;
}
.header .menu ul li:hover {
  padding-inline-start: 10px;
}
.header .menu ul a {
  color: #000;
  display: block;
  padding: 5px 20px;
  text-decoration: none;
  color: #fff;
  font-weight: 400;
}
.header .menu ul li:not(:last-child)::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #22859b;
  position: absolute;
  bottom: 0;
  transition: var(--main-duration);
  right: 0;
}
.header .menu ul li:not(:last-child):hover::before {
  height: 2px;
  background-color: #fff;
}
/* Small devices (landscape phones, 576px and up) */
@media (max-width: 767.98px) {
  .header .links {
    display: block;
  }
  .header .nav {
    display: none;
  }
}
/* End Header */
</style>
<script>
export default {
  name: "header",
  components: {},
  mounted() {
    window.addEventListener("click", function (e) {
      if (document.getElementById("links").contains(e.target)) {
        document.getElementById("ul_links").classList.toggle("block");
      } else {
        document.getElementById("ul_links").classList.remove("block");
      }
    });
  },
};
</script>
