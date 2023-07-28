import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../routes/HomeLayout";
import LandingPage from "../routes/LandingPage";
import Dining from "../routes/Dining";
import Offers from "../routes/Offers";
import Spa from "../routes/Spa";
import Accommodation from "../routes/Accommodation";
import Experience from "../routes/Experience";
import Reservation from "../routes/Reservation";

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
        path: "experience",
        element: <Experience />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
