import axios from 'axios';


export default {

  state: {
    omegaList : []
  },

  getters: {
    getOmegeList: state => {
      return state.omegaList;
    }
  },

  mutations: {
    initOmegaList: (state, payload) => {
      state.omegaList = payload;
    },
    addOmegaList: (state, payload) => {
      state.omegaList.push(payload);
    }
  },

  actions: {
    initOmegaList: ({commit}) => {
      // Ajax 비동기 통신 
      axios
        .get('https://plot-b2239.firebaseio.com/display.json')
        .then(response => {
          commit('initOmegaList', response.data);
        })
        .catch(error => console.log(error.message));
    },
    addOmegaList: (store, payload) => {
      let value = {
        done: false,
        content: payload
      };
      window.setTimeout(function() {
        store.commit('addOmegaList', value);
      }, 2000);
    }
  }

};