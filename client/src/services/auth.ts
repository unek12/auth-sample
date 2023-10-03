import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import {customFetchBase} from "./customFetchBase";

export interface User {
  first_name: string
  last_name: string
}

export interface UserResponse {
  user: User
  refreshToken: string
  accessToken: string
}

export interface LoginRequest {
  username: string
  password: string
}

export const api = createApi({
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
    profile: builder.mutation<UserResponse, undefined>({
      query: () => ({
        url: 'auth/profile'
      }),
    }),
  }),
})

export const { useLoginMutation, useProfileMutation } = api
