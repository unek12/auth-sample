import {createBrowserRouter} from "react-router-dom";
import {AuthWrapper} from "./authWrapper";
import React from "react";
import {Registration} from "../features/auth/Registration";
import {Login} from "../features/auth/Login";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthWrapper></AuthWrapper>,
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/registration',
    element: <Registration/>
  }
])