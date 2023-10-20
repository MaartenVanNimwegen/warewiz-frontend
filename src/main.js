import { createApp } from "vue";
import App from "./App.vue";
import LoginForm from "./components/LoginForm.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Register the LoginForm component globally
createApp(App).component('login-form', LoginForm).mount('#app');
