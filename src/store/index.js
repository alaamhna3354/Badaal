import { createStore } from "vuex";
import axios from 'axios';
export default createStore({
  state: {
    Home: null,
 
  },
  mutations: {
    SET_Home(state, Home) {
      state.Home = Home;
  },
 
  },
  actions: {
    async  loadHome({ commit }) {
      await   axios
             .get(`http://badaelonline.com/backend/public/`)
             .then((res) => {
                 let Home = res.data.data;
                 commit('SET_Home', Home); 
                 console.log('Home :', Home);
             })
             .catch(function (error) {
                 console.log('Error: ', error);
             });
     },
  },
  modules: {},
});
