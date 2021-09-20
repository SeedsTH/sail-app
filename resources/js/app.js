import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import firebase from "firebase";
import store from "../js/store/index.js";
import router from "../js/router/index.js";

Vue.use(ElementUI);

const app = new Vue({
    el: "#app",
    router,
    store,
    components: { App }
});
