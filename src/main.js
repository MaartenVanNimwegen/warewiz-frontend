import { createApp } from "vue";
import App from "./App.vue";
import LoginForm from "./components/LoginForm.vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: App, meta: { requiresAuth: true } },
  { path: "/login", component: LoginForm },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
createApp(App).use(router).mount("#app");
