import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",
  prepareHeaders: async (headers, { getState, endpoint }) => {
    return headers;
  },
});
export const baseQueryWithRefresh = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log("[Auth] Base query result:", result, "girdi");

  // Eğer access token expired ise (401 dönerse)
  if (result.error?.status === 401) {
    console.warn("[Auth] Access token expired, trying refresh...");

    // Refresh endpoint çağır
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {},
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // Asıl isteği tekrar dene
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Eger refresh token expired ise (401 dönerse)
      api.dispatch({ type: "auth/logout" }); // store temizleme vs.
    }
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefresh,
  tagTypes: [],
  endpoints: () => ({}),
});
