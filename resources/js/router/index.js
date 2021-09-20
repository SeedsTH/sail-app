import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Upload from "../components/Upload.vue";
import Posts from "../components/Posts.vue";
import Dashboard from "../components/Dashboard.vue";
import AppleMain from "../components/AppleClone/AppleMain.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home"
        }
    },
    {
        path: "/upload",
        name: "Upload",
        component: Upload,
        meta: {
            title: "Upload"
        }
    },
    {
        path: "/posts",
        name: "Posts",
        component: Posts,
        meta: {
            title: "Posts"
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            title: "Dashboard"
        }
    },
    {
        path: "/apple-main",
        name: "AppleMain",
        component: AppleMain,
        meta: {
            title: "AppleMain"
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: `/${window._locale}/`,
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Technoji`;
    next();
});

export default router;
