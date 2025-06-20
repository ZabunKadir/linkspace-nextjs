import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
  extraReducers: (build) => {
    // build.addMatcher(authApi.endpoints.login.matchFulfilled, (state, {payload}) => {
    //     state.user = payload.user
    // })
  },
});

export const {} = authSlice.actions;
