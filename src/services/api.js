import axios from "axios";

const api = axios.create({
  baseURL: "/api/", // the http requests use a proxy set in `vue.config.js`
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "x-auth-token": ""
  },
  timeout: 5000,
  withCredentials: true
});
api.interceptors.response.use(
  resp => resp.data,

  error => {
    return Promise.reject(error);
  }
);

export default api;
