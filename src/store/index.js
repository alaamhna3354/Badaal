import { createStore } from "vuex";
// import axios from 'axios';
export default createStore({
  state: {
    Headerswitch: 'Header',
    Footerswitch: 'Footer'

  },
  mutations: {
    SET_Header(state, Headerswitch) {
      state.Headerswitch = Headerswitch;
    },
    SET_Footer(state, Footerswitch) {
      state.Footerswitch = Footerswitch;
    },
  },
  actions: {

  },
  modules: {},
});
