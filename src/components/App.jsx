import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../routes/HomeLayout";
import LandingPage from "../routes/LandingPage";
import Dining from "../routes/Dining";
import Offers from "../routes/Offers";
import Spa from "../routes/Spa";
import Accommodation from "../routes/Accommodation";
import Experience from "../routes/Experience";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "accommodation",
        element: <Accommodation />,
      },
      {
        path: "dining",
        element: <Dining />,
      },
      {
        path: "spa",
        element: <Spa />,
      },
      {
        path: "Experience",
        element: <Experience />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
