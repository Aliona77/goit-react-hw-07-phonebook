import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getContactByName: builder.query({
      query: (name) => `/contact/${name}`,
    }),
  }),
});

export const { useGetContactByNameQuery } = contactApi;
