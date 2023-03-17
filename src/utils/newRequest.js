import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://heal-me-api.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
