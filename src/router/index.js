import Vue from "vue";
import VueRouter from "vue-router";
import CategoryList from "@/views/CategoryList.vue";
//import CategoryView from "@/components/CategoryView.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "category-list",
    component: CategoryList
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;