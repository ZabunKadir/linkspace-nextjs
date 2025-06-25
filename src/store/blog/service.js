import { api } from "../api";

export const blogApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
    getBlogBySlug: build.query({
      query: (slug) => `/blogs/${slug}`,
    }),
  }),
  overrideExisting: false,  
});

export const { useGetBlogsQuery, useGetBlogBySlugQuery } = blogApi;