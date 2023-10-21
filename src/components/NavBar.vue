<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../assets/Logo.png" alt="Bootstrap" height="25" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/add-item">Add Item</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/add-warehouse">Add Warehouse</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
  <script>
export default {
  name: "NavBar",
  // You can add component-specific logic here if needed
};
</script>
  
  <style scoped>
/* Add your component-specific styles here */
</style>