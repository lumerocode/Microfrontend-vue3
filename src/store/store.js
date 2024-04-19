// store.js
import { createStore } from 'vuex';

export const useStore = createStore({
  state() {
    // define tus estados compartidos aquí
    return{    
      token: "No logueado"
    }
  },
  mutations: {
    // define tus mutaciones aquí
  },
  actions: {
    // define tus acciones aquí
  },
  getters: {
    // define tus getters aquí
    getToken: (state) => state.token,
  }
});