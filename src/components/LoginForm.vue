<template>
  <div class="container login-container">
    <div class="card">
      <div class="card-header">
        <h3 class="text-center">Login</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter your username"
              v-model="username"
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
          <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Handle login logic here
      console.log("Logging in with:", this.username, this.password);
      // You can make an API call or perform any authentication logic here
    },
  },
};
</script>
  
<style scoped>
body {
  background-color: #f8f9fa;
}

.login-container {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>