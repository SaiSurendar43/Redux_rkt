// Features/reduce.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userdetails = createApi({
  reducerPath: 'userdetails',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3007/api' }),
  endpoints: (build) => ({
    userdata: build.query({
      query: () => 'usergetdata',
      method: 'GET',
    }),
    userpost: build.query({
      query: (id) => `usergetdata/${id}`,
      method: 'GET',
    }),
  }),
});

export const { useUserdataQuery, useUserpostQuery } = userdetails;

