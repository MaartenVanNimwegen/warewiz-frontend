import axios from "axios";

const baseURL = "/api";
axios.defaults.baseURL = baseURL;

const getToken = () => {
  return localStorage.getItem("jwtToken");
};

const unauthorized = () => {
  localStorage.clear();
  this.$router.push("/login");
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
export const getAllItemsByWarehouseId = (warehouseId) => {
  const token = getToken();

  if (token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return api.get(`/v1/Item/warehouse/${warehouseId}`, config);
  } else {
    unauthorized();
    console.error("Token not available. Redirecting to login...");
  }
};
