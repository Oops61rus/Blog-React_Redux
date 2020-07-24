import axios from "axios";
import { logOut } from "../core/store/auth/actions";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

const CancelToken = axios.CancelToken;
let cancel;

instance.interceptors.request.use(
  (config) => {
    if (cancel) {
      cancel(); // cancel request
    }

    config.cancelToken = new CancelToken(function executor(c) {
      cancel = c;
    });

    config.headers.authorization = localStorage.getItem("access_token");

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      logOut();
    } else {
      return Promise.reject(error);
    }
  }
);

export default instance;
