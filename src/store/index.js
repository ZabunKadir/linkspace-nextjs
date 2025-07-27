import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import profileReducer from "./user/profile/slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    profile: profileReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
