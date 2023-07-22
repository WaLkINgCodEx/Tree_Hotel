import React from "react";

import HomeLayout from "../assets/routes/HomeLayout";
import Dining from "../assets/routes/Dining";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "../assets/routes/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "dining",
        element: <Dining />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;

}
