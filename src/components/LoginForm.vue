<template>
  <div class="container">
    <div class="card shadow p-3 m-5 rounded-4 align-middle">
      <div class="card-body">
        <div class="row">
          <div class="col-12 col-md-6">
            <h1>Welcome to WareWiz</h1>
            <div v-if="hasError" class="alert alert-danger" role="alert">
              {{ errorMessage }}
            </div>
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="username">Username:</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailAddress"
                  placeholder="Enter your email address"
                  v-model="emailAddress"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter your password"
                  v-model="password"
                  required
                />
              </div>
              <br />
              <button type="submit" class="btn btn-primary btn-block">
                Login
              </button>
            </form>
          </div>
          <div
            class="col-12 col-md-6 mt-3 mt-md-0 d-flex align-items-center justify-content-center"
          >
            <img class="img-fluid" src="../assets/LogoSlogan.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../services/api.js";

export default {
  data() {
    return {
      emailAddress: "",
      password: "",
      hasError: false,
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      this.hasError = false;

      try {
        const response = await auth(this.emailAddress, this.password);

        if (response.status === 200) {
          const token = response.data;
          localStorage.setItem("jwtToken", token);
        }
      } catch (error) {
        this.hasError = true;
        this.errorMessage = "Invalid email or password.";
      }
    },
  },
};
</script>

<style scoped>
</style>
