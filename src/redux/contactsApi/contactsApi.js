import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://650888b156db83a34d9c7a2b.mockapi.io/api/v1',
  }),
  tagTypes: ['Contact'],
  endpoints: build => ({
    fetchAllContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    addContact: build.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
