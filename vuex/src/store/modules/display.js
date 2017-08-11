import axios from 'axios';


export default {

  state: {
    displayList : []
  },

  getters: {
    getList: state => {
      return state.displayList;
    }
  },

  mutations: {
    initList: (state, payload) => {
      state.displayList = payload;
    },
    addList: (state, payload) => {
      state.displayList.push(payload);
    }
  },

  actions: {
    initList: ({commit}, path) => {
      // Ajax 비동기 통신 
      axios
        .get(path)
        .then(response => {
          commit('initList', response.data);
        })
        .catch(error => console.log(error.message));
    },
    addList: (store, payload) => {
      let value = {
        done: false,
        content: payload
      };
      window.setTimeout(function() {
        store.commit('addList', value);
      }, 2000);
    }
  }

};