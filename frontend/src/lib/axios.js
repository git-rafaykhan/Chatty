import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatty-agwn.onrender.com/api/v1", 
  withCredentials: true,
});
