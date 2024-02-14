import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "@/views/Home";
import Layout from "@/layout";

const About = lazy(() => import("@/views/About"));
const Product = lazy(() => import("@/views/Product"));
const Information = lazy(() => import("@/views/Information"));
const Contact = lazy(() => import("@/views/Contact"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "information",
        element: <Information />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);
