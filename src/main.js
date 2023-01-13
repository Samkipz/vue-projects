// src/index.js
import * as Vue from "vue";
import Vuex from "vuex";
import * as VueRouter from "vue-router";
import App from "./App.vue";

// const routes = [{ path: "/", component: App }];

const router = VueRouter.createRouter({
    routes: [{ path: "/", component: App }],
    history: VueRouter.createWebHistory(),
});

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
});

const app = Vue.createApp(App);

app.use(Vuex);
app.use(router);
app.use(router);
app.mount("#root");