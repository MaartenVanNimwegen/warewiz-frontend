import { createApp } from "vue";
import App from "./App.vue";
import WareWiz from "./components/WareWiz.vue";
import LoginForm from "./components/LoginForm.vue";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: WareWiz, meta: { requiresAuth: true } },
  { path: "/login", component: LoginForm },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
  
    if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
      next('/login');
    } else if (to.path === '/login' && isAuthenticated) {
      next('/');
    } else {
      next();
    }
  });
  
createApp(App).use(router).mount("#app");
