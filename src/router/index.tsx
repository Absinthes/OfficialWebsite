import { lazy } from "react";
import { createBrowserRouter, createHashRouter } from "react-router-dom";

import Home from "@/views/Home";

export const routes = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
