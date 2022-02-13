import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:80",
  withCredentials: true,
});
