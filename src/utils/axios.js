import axios from "axios";
// import store from "../core/store";
// import { logOut } from "../core/store/auth/actions";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

instance.interceptors.request.use((request) => {
  if (request.method === "post") {
    // request.headers.Authorization = `Bearer ${token}`;
    request.headers.Authorization = localStorage.getItem("refresh_token");
    return request;
  }
});

// const { dispatch } = store;

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       dispatch(logOut());
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default instance;
