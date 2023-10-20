import { createApp } from "vue";
import App from "./App.vue";
import LoginForm from "./components/LoginForm.vue";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).component('login-form', LoginForm).mount('#app');
