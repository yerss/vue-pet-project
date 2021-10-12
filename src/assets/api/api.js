import axios from "axios";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

const axiosParams = {
  baseURL: "",
};

export const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  return {
    get: (url, params) => axios.get(url, { params }),
    post: (url, body, config) => axios.post(url, body, config),
    put: (url, body, config) => axios.put(url, body, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    delete: (url, config) => axios.delete(url, config),
  };
};

export default api(axiosInstance);
