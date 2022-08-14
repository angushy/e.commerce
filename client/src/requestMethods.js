import axios from "axios";



export const axiosInstance = axios.create({
  baseURL: "https://angeshop.herokuapp.com/api/",
});

