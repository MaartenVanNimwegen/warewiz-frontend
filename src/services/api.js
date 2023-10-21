import axios from "axios";

const baseURL = "/api";
axios.defaults.baseURL = baseURL;

const getToken = () => {
  return localStorage.getItem("jwtToken");
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

// Get all locations
export const getLocations = () => {
  const token = getToken();

  if (token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return api.get("/v1/Location", config);
  } else {
    // TODO Redirect to login
  }
};
