import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;