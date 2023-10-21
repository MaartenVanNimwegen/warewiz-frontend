<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <form @submit.prevent="searchItem">
          <div class="input-group">
            <label for="searchItem">
              <i class="bi bi-search"></i>
            </label>
            <input
              type="text"
              class="form-control"
              id="searchItem"
              v-model="searchItem"
            />
          </div>
        </form>
        <table class="table table-striped">
          <thead class="table-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in items"
              :key="item.id"
              @click="selectItem(item)"
              :class="{ 'table-info': selectedItem === item }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4 mt-2">
        <div class="row">
          <div class="col-12">
            <div class="picture-container">
              <img
                v-if="selectedItem"
                :src="getPhotoLocation(selectedItem.photoLocation)"
                alt="itemPicture"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4>Details:</h4>
            <p v-if="selectedItem">{{ selectedItem.name }}</p>
            <p v-if="selectedItem">{{ selectedItem.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import { getAllItemsByWarehouseId } from "../services/api.js";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      items: [],
      selectedItem: null,
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      try {
        const result = await getAllItemsByWarehouseId(
          localStorage.getItem("warehouseId")
        );
        this.items = result.data;
      } catch (error) {
        console.error("Error calling API function:", error);
      }
    },
    selectItem(item) {
      this.selectedItem = item;
    },
    getPhotoLocation(photoLocation) {
      return `../assets/uploads/${photoLocation}`;
    },
  },
};
</script>

<style scoped>
.bg-superwhite {
  background-color: #f5f5f5 !important;
}

.input-group {
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
}

.input-group input {
  border-radius: 10px !important;
}

.input-group i {
  position: absolute;
  right: 10px;
  top: 50%;
  z-index: 200;
  transform: translateY(-50%);
}
.picture-container {
  border: 1px solid #4c4c4c !important;
  padding: 10px;
  border-radius: 10px;
}

.picture-container img {
  width: 100%;
  height: auto;
}
</style>