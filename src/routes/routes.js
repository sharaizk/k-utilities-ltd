import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Landing from "../screens/Landing";
import Complain from "../screens/Complain";
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/complain-handling-procedure",
      element: <Complain />,
    },
    {
      path: "/*",
      element: <Navigate to="/" />,
    },
  ]);
}
