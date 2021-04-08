import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.DEV.MODE === "development" ? "/offiac" : "/",
  timeout: 10000,
});

instance.interceptors.request.use(
  (request) => {
    console.log(import.meta.env, "环境");
    const userInfo = localStorage.loginInfo
      ? JSON.parse(localStorage.loginInfo)
      : {};
    request.headers = {
      Authorization: userInfo.accessToken || "",
      "Content-Type": "application/json",
    };
    return request;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 403) {
      console.log("登录超时");
      return response.data;
    }
    if (response.data.code !== 200 && response.data.code !== 400) {
      Toast("请求失败");
      return Promise.reject(new Error(response.data.message));
    }
    if (typeof response.data.data === "object") {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    const errorString = error.toString();
    if (errorString.includes("timeout")) {
      return Promise.reject(new Error("接口请求超时"));
    }
    return Promise.reject(error.response.data.message);
  }
);

const request = (url, option = {}) => {
  return instance
    .request({
      url,
      ...option,
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export default request;
