import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "jquery";
import "animate.css";
import "../src/assets/css/Font_Awesome6.css";
import "../src/assets/css/icofont.css";
import "../src/assets/scss/main.scss";
import axios from "axios";
import VueLazyLoad from "vue3-lazyload";
import "../src/assets/scss/main.scss";


createApp(App).use(store).use(router, axios).use(VueLazyLoad).mount("#app");
