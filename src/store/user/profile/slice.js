import { createSlice } from "@reduxjs/toolkit";
import { profileApi } from "./service"; // login endpoint'ini buradan alacağız

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: { loading: true, details: null },
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addMatcher(
      profileApi.endpoints.getProfileData.matchPending,
      (state) => {
        state.data.loading = true;
      }
    ),
      builder.addMatcher(
        profileApi.endpoints.getProfileData.matchFulfilled,
        (state, action) => {
          state.data.loading = false;

          state.data.details = action.payload;
        }
      );

    builder.addMatcher(
      profileApi.endpoints.getProfileData.matchRejected,
      (state, action) => {
        state.data.loading = false;
        state.data.details = null;
      }
    );
  },
});

export const {} = profileSlice.actions;

export default profileSlice.reducer;
