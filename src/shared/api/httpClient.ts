import axios from "axios";
const BASE_URL = "https://icherniakov.ru/yt-course/";

export const $httpClient = axios.create({
  withCredentials: false,
  baseURL: BASE_URL,
  timeout: 10000,
});

$httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

$httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 ||
      (error.response.status === 403 && error.config && !error.config._retry)
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(`${BASE_URL}auth/refresh`, {
          refresh_token: localStorage.getItem("refresh_token"),
        });
        localStorage.setItem("access_token", response.data.access_token);
        return $httpClient.request(originalRequest);
      } catch (e) {
        console.log("NE AUTH");
        window.location.href = "/login";
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  },
);

export default $httpClient;
