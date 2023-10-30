<template>
  <div class="modal" v-if="showModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Are you sure?</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Cancel
            </button>
            <button type="submit" class="mx-2 btn btn-primary">Yes</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { returnItem } from "../services/api.js";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal(itemId) {
      this.showModal = true;
      this.itemId = itemId;
    },
    closeModal() {
      this.showModal = false;
    },
    async submitForm() {
      try {
        const result = await returnItem(this.itemId);

        if (result === true) {
          this.closeModal();
        } else {
          this.$router.push("/login");
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