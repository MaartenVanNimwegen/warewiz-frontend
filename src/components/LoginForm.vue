<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4"></div>
      <div class="col-md-4 d-flex align-items-center justify-content-center">
        <img class="img-fluid" src="../assets/LogoSlogan.png" />
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row mt-5">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h1 class="text-center mb-3">Sign in</h1>
        <div v-if="hasError" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <form @submit.prevent="login">
          <div class="input-group form-group">
            <label for="email">
              <i class="bi bi-at"></i>
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="emailAddress"
              placeholder="Your Email"
              required
            />
          </div>
          <div class="input-group form-group">
            <label for="password">
              <i class="bi bi-lock"></i>
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Password"
              required
            />
            <i class="bi bi-eye" @click="togglePasswordVisibility"></i>
          </div>
          <!-- TODO
          <p class="text-end">
            <a class="text-decoration-none text-dark" href="/password-reset"
              >Forgot password?
            </a>
          </p> -->
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
        <!-- TODO 
        <p class="mt-2">
          New to WareWiz?
          <a href="/register">Register</a>
        </p> -->
      </div>
      <div class="col-md-4"></div>
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
          const user = {
            id: response.data.id,
            name: response.data.name,
            emailAddress: response.data.emailAddress,
            phone: response.data.phone,
            createdDate: response.data.createdDate,
            lastModifiedDate: response.data.lastModifiedDate,
          };
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("jwtToken", response.data.jwtToken);
          localStorage.setItem("isAuthenticated", true);
          localStorage.setItem("locationId", 1);
          localStorage.setItem("warehouseId", 1);
          this.$router.push("/");
        }
      } catch (error) {
        this.hasError = true;
        this.errorMessage = "Invalid email or password.";
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      const passwordInput = document.getElementById("password");

      if (this.showPassword) {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    },
  },
};
</script>

<style scoped>
.input-group {
  position: relative;
  margin-bottom: 15px;
}

.input-group label {
  position: absolute;
  left: 30px;
  z-index: 6;
  top: 50%;
  transform: translateY(-50%);
  color: #555;
}
.input-group input {
  padding-left: 30px;
}

.input-group i {
  position: absolute;
  right: 10px;
  top: 50%;
  z-index: 5;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
