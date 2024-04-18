// store.js
import { createStore } from 'vuex';

export const useStore = createStore({
  state() {
    // define tus estados compartidos aquí
    return{    
      contador: 1,
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
  }
});