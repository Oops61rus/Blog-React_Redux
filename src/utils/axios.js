import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/v1",
});

instance.interceptors.request.use((request) => {
  if (request.method === "post") {
    request.headers.Authorization = `Bearer ${localStorage.refresh_token}`;
    return request;
  }
});

export default instance;
