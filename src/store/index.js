import { createStore } from "vuex";
import { api } from "@/services";

export default createStore({
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      cep: "",
      address: "",
      number: "",
      quarter: "",
      city: "",
      state: "",
    },
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },

    UPDATE_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    getUser(context, payload) {
      api.get(`/usuario/${payload}`).then((r) => {
        context.commit("UPDATE_USER", r.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
  },
  modules: {},
});
