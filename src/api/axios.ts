import axios from "axios";

import { Toast } from "vant";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000,
});

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error && error.response) {
      const errorResponse = error.response;
      Toast.fail(errorResponse.data);
    }
    return Promise.reject(error);
  }
);

export default instance;
