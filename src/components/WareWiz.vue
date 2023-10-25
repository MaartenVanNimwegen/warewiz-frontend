<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8 mt-2">
        <div class="card">
          <div class="card-body">
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
                  <td>{{ item.status === 0 ? "Available" : "Borrowed" }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-2">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <h4 v-if="!selectedItem">
                  {{ "Please select an item to see details" }}
                </h4>
                <div class="picture-container">
                  <img
                    v-if="selectedItem"
                    :src="getPhotoLocation(selectedItem.photoLocation)"
                    alt="itemPicture"
                  />
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <h4 v-if="selectedItem">{{ "Details:" }}</h4>
                <p v-if="selectedItem">{{ "Name: " + selectedItem.name }}</p>
                <p v-if="selectedItem">
                  {{ "Description: " + selectedItem.description }}
                </p>
                <p v-if="selectedItem">
                  {{
                    "SN: " +
                    (selectedItem.serialNumber != null
                      ? selectedItem.serialNumber
                      : "No serial number found")
                  }}
                </p>
                <button
                  v-if="selectedItem"
                  @click="borrowItem(selectedItem.id)"
                >
                  Borrow
                </button>
              </div>
            </div>
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
        const result = await getAllItemsByWarehouseId(localStorage.getItem("warehouseId"));
        if (result === false) {
          this.$router.push("/login");
        }
        this.items = result.data;
        if (this.items.length > 0) {
          this.selectItem(this.items[0]);
        }
      } catch (error) {
        this.$router.push("/login");
      }
    },
    selectItem(item) {
      this.selectedItem = item;
    },
    getPhotoLocation(photoLocation) {
      return `uploads/${photoLocation}`;
    },
    borrowItem(id) {
      console.log(`Item with id: ${id} is borrowed`);
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
  border-radius: 10px;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.picture-container img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}
</style>