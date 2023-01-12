import * as VueRouter from "vue-router";
import Home from '../views/HomeView.vue';

const routes = [
    {
        path: "/", name: 'home', component: Home
    },
    {
        path: "/details", name: 'profile', component: () => import(/* webpackChunkName: "CompanyProfile" */ "../views/CompanyProfile.vue")
    },
    {
        path: "/join-us", name: 'join-us', component: () => import(/* webpackChunkName: "JoinUsView" */ "../views/JoinUsView.vue")
    },
];

const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHistory(),
});

export default router