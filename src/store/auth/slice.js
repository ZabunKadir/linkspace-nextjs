import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "./service"; // login endpoint'ini buradan alacağız

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
    loadStoredAuth: (state) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if (token) state.token = token;
        if (user) state.user = JSON.parse(user);
      }
    },
  },
  extraReducers: (build) => {
    build.addMatcher(
      authApi.endpoints.login.matchFulfilled, // Login başarılı olunca tetiklenir
      (state, { payload }) => {
        // payload backend'den gelen veri (ör. { user, token })
        state.user = payload.user;
        state.token = payload.token;

        // Tarayıcıda sakla (Remember Me veya oturum koruma için)
        if (typeof window !== "undefined") {
          localStorage.setItem("token", payload.token);
          localStorage.setItem("user", JSON.stringify(payload.user));
        }
      }
    );
  },
});

export const { logout, loadStoredAuth } = authSlice.actions;

export default authSlice.reducer;
