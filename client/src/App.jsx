import React from "react";
import "react-dates/initialize";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./routes/HomeLayout";
import LandingPage from "./routes/LandingPage/LandingPage";
import Dining from "./routes/Dining/Dining";
import Offers from "./routes/Offers/Offers";
import Spa from "./routes/Spa/Spa";
import Accommodation from "./routes/Accommodation/Accommodation";
import Experience from "./routes/Experiences/Experiences";
import Reservation from "./routes/Reservation/Reservation";

import { loader as reservationLoader } from "./contexts/ReservationContext";

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
        loader: reservationLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
