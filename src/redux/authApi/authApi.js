import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });

      console.log(result);
      //   if (!result.data.token) {
      //     return clearAuthHeader();
      //   }

      //   setAuthHeader(result.data.token);

      return { data: result.data };
    } catch (axiosError) {
      console.log('catched axiosError');
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  endpoints: build => ({
    signUpUser: build.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'post',
        body,
      }),
    }),
    logInUser: build.mutation({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignUpUserMutation, useLogInUserMutation } = authApi;
