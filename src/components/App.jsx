import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeLayout from "../assets/routes/HomeLayout";
import Dining from "../assets/routes/Dining";
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
