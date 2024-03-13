import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../Store/index.tsx";
import { infoData } from "../../configData.tsx";
const axiosBaseQuery = fetchBaseQuery({
  baseUrl: infoData?.baseApi, // Set your base URL
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).loginState.userInfo?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("app", "MTIzNDV8Vmdud2Vi");
    return headers;
  },
});

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query<any[], void>({
      query: () => `/users`,
    }),
    getUserById: builder.query<any[], void>({
      query: (id) => `/customers/${id}`,
    }),
    loginUsers: builder.mutation({
      query: (body) => ({
        url: `/auth/login`,
        method: "POST",
        body,
      }),
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: `/auth/register`,
        method: "POST",
        body,
      }),
    }),
    createManufacturer: builder.mutation({
      query: (body: any) => ({
        url: `/manufacturerUser`,
        method: "POST",
        body,
      }),
    }),
    createDistributer: builder.mutation({
      query: (body: any) => ({
        url: `/distributorUser`,
        method: "POST",
        body,
      }),
    }),
    createSubDistributer: builder.mutation({
      query: (body: any) => ({
        url: `/subDistributorUser`,
        method: "POST",
        body,
      }),
    }),
    createDealer: builder.mutation({
      query: (body: any) => ({
        url: `/dealerUser`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateManufacturerMutation,
  useCreateDistributerMutation,
  useCreateDealerMutation,
  useCreateSubDistributerMutation,
  useGetUserByIdQuery,
  useLoginUsersMutation,
  useRegisterUserMutation,
} = usersApi;
export const { endpoints } = usersApi;
