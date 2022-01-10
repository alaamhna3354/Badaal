import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "jquery";
import "animate.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();
import "../src/assets/css/Font_Awesome6.css";
import "../src/assets/css/icofont.css";
import axios from "axios";
import VueLazyLoad from "vue3-lazyload";

// vue-i18n translate
// {{ $t(' ') }}
import { createI18n } from "vue-i18n";
import ar from '../src/assets/i18n/ar.json';
import en from '../src/assets/i18n/en.json';
import sp from '../src/assets/i18n/sp.json';
const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'en',
    silentTranslationWarn: process.env.NODE_ENV === 'production',
    messages: {
        ar: ar,
        en: en,
        sp: sp,
    },
  });
// axios baseURL
axios.defaults.baseURL = 'https://badaelonline.com/backend/public/api/';
createApp(App).use(store).use(router, axios).use(VueLazyLoad).use(i18n).mount("#app");
