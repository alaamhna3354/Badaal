import { createStore } from "vuex";
import axios from 'axios';
export default createStore({
  state: {
    Headerswitch: 'Header2',
    Footerswitch: 'Footer',
    general: [],
    banner: [],
    about: [],
    blog: [],
    portfolio: [],
    partner: [],
    service: [],
    GlobalUrl : 'https://badaelonline.com/backend/public/api',

  },
  mutations: {
    SET_Header(state, Headerswitch) {
      state.Headerswitch = Headerswitch;
    },
    SET_Footer(state, Footerswitch) {
      state.Footerswitch = Footerswitch;
    },
    SET_general(state, general) {
      state.general = general;
  },
    SET_banner(state, banner) {
      state.banner = banner;
    },
    SET_about(state, about) {
      state.about = about;
    },
    SET_blog(state, blog) {
      state.blog = blog;
    },
    SET_portfolio(state, portfolio) {
      state.portfolio = portfolio;
    },
    SET_partner(state, partner) {
      state.partner = partner;
    },
    SET_service(state, service) {
      state.service = service;
    },
  },
  actions: {
    loadHome({ commit }) {
      axios
          .get(`/home`)
          .then((res) => {
              // console.log('Home :', res.data.data);
              let general = res.data.data.general;
              let banner = res.data.data.banner;
              let about = res.data.data.about;
              let blog = res.data.data.post;
              let portfolio = res.data.data.portfolio;
              let partner = res.data.data.partner;
              let service = res.data.data.service;

              commit('SET_general', general);
              commit('SET_banner', banner);
              commit('SET_about', about);
              commit('SET_blog', blog);
              commit('SET_portfolio', portfolio);
              commit('SET_partner', partner);
              commit('SET_service', service);
          })
          .catch(function (error) {
              console.log('Error Home: ', error);
          });
  },
  },
  modules: {},
});
