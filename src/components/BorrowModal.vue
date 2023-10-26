<template>
  <div class="modal" v-if="showModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Loan a product</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="borrowerName">Borrower Name:</label>
              <input
                type="text"
                class="form-control"
                v-model="borrowerName"
                required
              />
            </div>
            <div class="form-group">
              <label for="borrowerEmail">Borrower Email:</label>
              <input
                type="email"
                class="form-control"
                v-model="borrowerEmail"
                required
              />
            </div>
            <div class="form-group">
              <label for="borrowerPhone">Borrower Phone:</label>
              <input
                type="tel"
                class="form-control"
                v-model="borrowerPhone"
                required
              />
            </div>
            <div class="form-group">
              <label for="studentNumber">Student Number:</label>
              <input
                type="text"
                class="form-control"
                v-model="studentNumber"
                required
              />
            </div>
            <div class="form-group">
              <label for="returnDate">Return date:</label>
              <input
                type="text"
                class="form-control"
                v-model="returnDate"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { borrowItem } from "../services/api.js";

export default {
  data() {
    return {
      showModal: false,
      borrowerName: "",
      borrowerEmail: "",
      borrowerPhone: "",
      studentNumber: "",
      returnDate: "",
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
        const formData = {
          borrowerName: this.borrowerName,
          borrowerEmail: this.borrowerEmail,
          borrowerPhone: this.borrowerPhone,
          borrowerStudentNumber: this.studentNumber,
          borrowerReturnDate: this.returnDate,
        };

        const result = await borrowItem(this.itemId, formData);

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
  