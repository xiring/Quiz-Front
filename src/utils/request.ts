import axios, { AxiosInstance } from "axios";

import { ElMessage } from "element-plus";
// let language = localStorage.getItem("VueAppLanguage");
let language = "en";

const $axios: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_AXIOS_BASE_URL}api/`,
  timeout: 10000,
  headers: {
    "x-localization": language,
    // "Content-Type": "application/x-www-form-urlencoded",
  },
});

// Request intercepter
$axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    config.headers["x-localization"] = "en";
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    // @ts-ignore
    Promise.reject(error);
  }
);
// response pre-processing
$axios.interceptors.response.use(
  (response) => {
    // if (response.headers.authorization) {
    //   setLogged(response.headers.authorization);
    //   response.data.token = response.headers.authorization;
    // }

    return response.data;
  },
  (error) => {
    //Need to check user authorization
    let message = error.response.data.message;
    if (error.response.data && error.response.data.errors) {
      console.log(error.response.data.errors);
      for (let field of Object.keys(error.response.data.errors)) {
        ElMessage.error(error.response.data.errors[field][0]);
      }
    } else if (error.response.data && error.response.data.error) {
      ElMessage.error(error.response.data.error);
    } else {
      ElMessage.error(error.response.data.message);
    }
    // @ts-ignore
    return Promise.reject(error);
  }
);
export default $axios;
