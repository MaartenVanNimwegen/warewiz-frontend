import axios from "axios";

const baseURL = "http://localhost:7022";

// Add the following lines to set the Authorization header
const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTWFhcnRlbiB2YW4gTmltd2VnZW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYWFydGVudmFubmltd2VnZW5AaG90bWFpbC5jb20iLCJqdGkiOiIxMDU3OWI0Mi04NmY3LTQ3MGItODQyYi04MjUxODk4NGI3OWQiLCJleHAiOjE2OTc2NTUzNDAsImlzcyI6IldhcmVXaXoiLCJhdWQiOiJXYXJlV2l6In0.DuA_L9hyWPlzfRyDuBdxa5HcEZ-nb6lw1y7VN3Muv7M"; // Replace with your actual bearer token
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const api = axios.create({
  baseURL,
});

// Function to get items
export const getItems = () => {
  return api.get("/api/v1/Location");
};

// Function to create a new borrow
export const createBorrow = (borrowData) => {
  return api.post("/api/v1/Item/borrow", borrowData);
};

// Add other API functions as needed
