import axios from "axios";
export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  params: {
    key: process.env.VUE_APP_KEY,
  },
});
