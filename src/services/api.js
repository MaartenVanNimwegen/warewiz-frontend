import axios from "axios";

const baseURL = "/api";
axios.defaults.baseURL = baseURL;

const jwtToken = localStorage.getItem("jwtToken");
console.log("JWT Token:", jwtToken);


const api = axios.create({
  baseURL,
});

// Function to get items
export const getLocations = () => {
  return api.get("/v1/Location");
};

export const auth = (emailAddress, password) => {
  const requestData = {
    EmailAddress: emailAddress,
    Password: password
  };

  return axios.post('/v1/Auth', requestData);
};
