import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: build.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: build.mutation({
      query: (email) => ({
        url: "auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    verifyTfa: build.mutation({
      query: ({ sessionToken, code }) => ({
        url: "/auth/verify-2fa",
        method: "POST",
        body: { sessionToken, code },
      }),
    }),
    refreshToken: build.query({
      query: () => "auth/refresh",
      providesTags: ["Auth"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useVerifyTfaMutation
} = authApi;
