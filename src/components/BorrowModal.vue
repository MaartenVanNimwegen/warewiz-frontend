<template>
    <div class="modal" v-if="showModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Borrow Item</h5>
            <button type="button" class="close" @click="closeModal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="borrowerName">Borrower Name:</label>
                <input type="text" class="form-control" v-model="borrowerName" required />
              </div>
              <div class="form-group">
                <label for="borrowerEmail">Borrower Email:</label>
                <input type="email" class="form-control" v-model="borrowerEmail" required />
              </div>
              <div class="form-group">
                <label for="borrowerPhone">Borrower Phone:</label>
                <input type="tel" class="form-control" v-model="borrowerPhone" required />
              </div>
              <div class="form-group">
                <label for="studentNumber">Student Number:</label>
                <input type="text" class="form-control" v-model="studentNumber" required />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
        borrowerName: "",
        borrowerEmail: "",
        borrowerPhone: "",
        studentNumber: "",
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      },
      submitForm() {
        // Handle form submission here
        console.log("Form submitted:", this.borrowerName, this.borrowerEmail, this.borrowerPhone, this.studentNumber);
  
        // Close the modal after form submission
        this.closeModal();
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
    width: 50%;
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
  