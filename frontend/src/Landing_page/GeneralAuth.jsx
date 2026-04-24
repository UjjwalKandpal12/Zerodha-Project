import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const API = axios.create({
  baseURL: "http://localhost:5000/api",

  withCredentials: true, // IMPORTANT for cookies
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(undefined);

  const [accessToken, setAccessToken] = useState(null);

  // Refresh Token Logic

  const refreshAccessToken = async () => {
    try {
      const res = await API.get("/auth/refresh-token");

      setAccessToken(res.data.accessToken);

      return res.data.accessToken;
    } catch (err) {
      setUser(null);

      setAccessToken(null);

      logout();
    }
  };

  useEffect(() => {
    const requestInterceptor = API.interceptors.request.use((config) => {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }

      return config;
    });

    return () => {
      API.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken]);

  useEffect(() => {
    const responseInterceptor = API.interceptors.response.use(
      (res) => res,

      async (err) => {
        const originalRequest = err.config;

        if (
          err.response?.status === 401 &&
          !originalRequest._retry &&
          originalRequest.url !== "/auth/refresh-token"
        ) {
          originalRequest._retry = true;

          const newToken = await refreshAccessToken();

          if (newToken) {
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

            return API(originalRequest);
          }
        }

        return Promise.reject(err);
      },
    );

    return () => {
      API.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);

  useEffect(() => {
    const initAuth = async () => {
      try {
        // STEP 1: try refresh first (if no token in memory)

        let token = accessToken;

        if (!token) {
          const res = await API.get("/auth/refresh-token");

          token = res.data.accessToken;

          setAccessToken(token);
        }

        // STEP 2: fetch user

        const userRes = await API.get("/auth/get-me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(userRes.data.user);
      } catch (err) {
        setUser(null);
        setAccessToken(null);
      }
    };

    initAuth();
  }, []);

  // LOGIN

  const login = async (email, password) => {
    const res = await API.post("/auth/login", { email, password });

    setAccessToken(res.data.accessToken);

    setUser(res.data.user);
  };

  // LOGOUT

  const logout = async () => {
    await API.get("/auth/logout");

    setAccessToken(null);

    setUser(null);

    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, login, logout, API, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
