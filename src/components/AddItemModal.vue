<template>
  <div class="modal" v-if="showModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add a new item</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name:</label>
              <input v-model="name" class="form-control" type="text" name="name" id="name" />
            </div>
            <div class="form-group">
              <label for="description">Description:</label>
              <textarea v-model="description" class="form-control" id="description" style="height: 70px"></textarea>
            </div>
            <div class="form-group">
              <label for="serialNumber">Serial number:</label>
              <input v-model="serialNumber" class="form-control" type="text" name="serialNumber" id="serialNumber" />
            </div>
            <div class="form-group">
              <label for="photo" class="form-label">Photo:</label>
              <input class="form-control" type="file" id="photo" accept="image/jpeg, image/png, image/jpg" ref="file"
                @change="uploadFile" />
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// import axios from "axios";
import { addItem } from "../services/api.js";
import { uploadImage } from "../services/api.js";

export default {
  data() {
    return {
      showModal: false,
      name: "",
      description: "",
      serialNumber: "",
      photoLocation: "",
      photo: null,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    uploadFile() {
      this.Photo = this.$refs.file.files[0];
    },
    async submitForm() {
      try {
        const photoLocation = await uploadImage(this.Photo);

        const formData = {
          name: this.name,
          description: this.description,
          serialNumber: this.serialNumber,
          photoLocation: photoLocation,
        };
        const result = await addItem(formData);

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
  },
};
</script>
  
<style scoped>
/* Add your modal styling here */
.modal {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  width: 90%;
  margin: 10% auto;
}

.modal-content {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  margin-top: 15px;
}
</style>
  