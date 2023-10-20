import axios from "axios";

const baseURL = "/api";
axios.defaults.baseURL = baseURL;

// Add the following lines to set the Authorization header
const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTWFhcnRlbiB2YW4gTmltd2VnZW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYWFydGVudmFubmltd2VnZW5AaG90bWFpbC5jb20iLCJqdGkiOiJlNTE0Yjg3OC0xYmVjLTRiNGItYTBlMy04MDY1ZmQ1MDA3NzYiLCJleHAiOjE2OTc4MTk2NTcsImlzcyI6IldhcmVXaXoiLCJhdWQiOiJXYXJlV2l6In0.aNbGad3EORHwymdSCQKbQZEYVBFlkSgds2qBUEiLqjQ"; // Replace with your actual bearer token
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const api = axios.create({
  baseURL,
});

// Function to get items
export const getLocations = () => {
  return api.get("/v1/Location");
};
