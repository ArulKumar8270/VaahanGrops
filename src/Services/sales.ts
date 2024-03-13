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

export const salesApi = createApi({
  reducerPath: "salesApi",
  baseQuery: axiosBaseQuery,
  endpoints: (builder) => ({
    getManufacturer: builder.query<any[], void>({
      query: () => `/manufacturerUser`,
    }),
    getDisbuters: builder.query<any[], void>({
      query: () => `/distributorUser`,
    }),
    getSubDistributer: builder.query<any[], void>({
      query: () => `/subDistributorUser`,
    }),
    getDealerUser: builder.query<any[], void>({
      query: () => `/dealerUser`,
    }),
    getDisbutersSale: builder.query<any[], void>({
      query: () => `/distributor`,
    }),
    getSubDistributerSale: builder.query<any[], void>({
      query: () => `/subdistributor`,
    }),
    // getDealerUserSale: builder.query<any[], void>({
    //   query: () => `/dealerUser`,
    // }),
    createDistributerSale: builder.mutation({
      query: (body: any) => ({
        url: `/distributor`,
        method: "POST",
        body,
      }),
    }),
    createSubDistributerSale: builder.mutation({
      query: (body: any) => ({
        url: `/subdistributor`,
        method: "POST",
        body,
      }),
    }),
    createDealerSale: builder.mutation({
      query: (body: any) => ({
        url: `/registrations`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetDealerUserQuery,
  useGetDisbutersQuery,
  useGetManufacturerQuery,
  useGetSubDistributerQuery,
  useCreateDealerSaleMutation,
  useCreateDistributerSaleMutation,
  useCreateSubDistributerSaleMutation,
  useGetDisbutersSaleQuery,
  useGetSubDistributerSaleQuery,
} = salesApi;
export const { endpoints } = salesApi;
