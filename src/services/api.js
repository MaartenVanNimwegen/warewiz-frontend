import axios from "axios";

const baseURL = "/api";
axios.defaults.baseURL = baseURL;

const getToken = () => {
  return localStorage.getItem("jwtToken");
};

const clearStorage = () => {
  localStorage.clear();
};

const api = axios.create({
  baseURL,
});

// Login
export const auth = (emailAddress, password) => {
  const requestData = {
    EmailAddress: emailAddress,
    Password: password,
  };
  return axios.post("/v1/Auth", requestData);
};

// Get all Items by warehouse id
export const getAllItemsByWarehouseId = async (warehouseId) => {
  const token = getToken();

  if (token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await api.get(
        `/v1/Item/warehouse/${warehouseId}`,
        config
      );

      if (response.status === 200) {
        return response;
      } else {
        console.error("Unexpected status code:", response.status);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        clearStorage();
        console.error("Unauthorized. Redirecting to login...");
        return false;
      }
    }
  } else {
    clearStorage();
    console.error("Token not available. Redirecting to login...");
    return false;
  }
};

// Function to borrow an item
export const borrowItem = async (itemId, borrower) => {
  const token = getToken();

  if (token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    
    const body = {
      name: borrower.borrowerName,
      emailAddress: borrower.borrowerEmail,
      phone: borrower.borrowerPhone,
      studentNumber: borrower.borrowerStudentNumber,
      createdDate: new Date().toISOString(),
      lastModifiedDate: new Date().toISOString(),
    };
    
    try {
      const response = await api.post(
        `/v1/Item/borrow?itemId=${itemId}&returnDate=${borrower.borrowerReturnDate}`,
        body,
        config
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.error('Unexpected status code:', response.status);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        clearStorage();
        console.error('Unauthorized. Redirecting to login...');
        return false;
      } else {
        console.error('Error:', error.message);
      }
    }
  } else {
    clearStorage();
    console.error('Token not available. Redirecting to login...');
    return false;
  }
};