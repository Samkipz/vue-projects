// src/index.js
import * as Vue from "vue";
import * as VueRouter from "vue-router";
import App from "./App.vue";
import store from "@/store";


const routes = [{ path: "/", component: App }];
const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHistory(),
});

const app = Vue.createApp(App);
app.use(store);
app.use(router);
app.mount("#root");