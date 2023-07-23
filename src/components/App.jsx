import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../routes/HomeLayout";
import LandingPage from "../routes/LandingPage";
import Dining from "../routes/Dining";
import Offers from "../routes/Offers";
import Spa from "../routes/Spa";

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
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "spa",
        element: <Spa />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
