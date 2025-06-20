import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer, authSlice: authSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
