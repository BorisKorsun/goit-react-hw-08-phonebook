import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  endpoints: build => ({
    signUpUser: build.mutation({
      query: body => ({
        url: 'user/signup',
        method: 'POST',
        body,
      }),
    }),
    logInUser: build.mutation({
      query: body => ({
        url: 'user/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignUpUserMutation, useLogInUserMutation } = authApi;
