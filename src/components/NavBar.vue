<template>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col-12">
        <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
          <div class="card-body">
            <nav class="navbar navbar-expand-lg">
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
                    <a class="nav-link" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <button class="nav-link" @click="addItem()">
                      Add Item
                    </button>
                  </li>
                  <li class="nav-item">
                    <button class="btn btn-danger" @click="logout()">
                      Logout
                    </button>
                  </li>
                  <!-- TODO
                  <li class="nav-item">
                    <a class="nav-link active" href="/add-warehouse">Add Warehouse</a>
                  </li> -->
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AddItemModal ref="addItemModal" />
</template>
  
  <script>
import AddItemModal from "./AddItemModal.vue";
import { logout } from "../services/api.js";

export default {
  name: "NavBar",
  components: {
    AddItemModal,
  },
  methods: {
    addItem() {
      this.$refs.addItemModal.openModal();
    },
    logout() {
      logout();
    }
  },
};
</script>
  
<style scoped>
</style>