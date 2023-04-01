import axios from "axios";

export const api = axios.create({
  baseURL: process.env.BACKEND_URL || "http://localhost:8000/en/api",
  withCredentials: true,
});

api.interceptors.request.use((config: any) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      const originalRequest = { ...error.config, _isRetry: true };

      try {
        const response = await axios.post(
          "http://localhost:8000/api/auth/token/refresh/",
          {
            refresh: localStorage.getItem("refresh_token"),
          }
        );

        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);

        return await api.request({
          method: originalRequest.method,
          url: originalRequest.url,
        });
      } catch (e) {
        console.log("Unauthorized");
        if (originalRequest._isRetry) {
          localStorage.setItem("access_token", "");
        }
      }
    }
    throw error;
  }
);
