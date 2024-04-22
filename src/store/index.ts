import type { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import * as Cookie from 'js-cookie';

// Define el estado y los tipos de la tienda
interface State {
  token: string | null;
}

interface RootState {
  token: string | null;
}

// Crea una clave de inyección para la tienda
export const key: InjectionKey<Store<State>> = Symbol();

// Crea y exporta la tienda Vuex
export const store = createStore<State>({
  state() {
    return {
      token: null
    };
  },
  mutations: {
    SET_TOKEN(state, token: string) {
      state.token = token;
    }
  },
  actions: {
    initSession({ commit }, { token }: { token: string }) {
      Cookie.default.set('jwt_main', token);
      commit('SET_TOKEN', token);
    }
  },
  getters: {
    getToken: (state: State) => state.token
  }
});
