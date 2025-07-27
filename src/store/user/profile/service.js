import { api } from "@/store/api";
export const profileApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfileData: build.query({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
      }),
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProfileDataQuery } = profileApi;
