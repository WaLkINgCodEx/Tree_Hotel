import { useState } from "react";
import ReservationSideBar from "../components/ReservationSideBar";

import ReservationNavBar from "../components/ReservationNavBar";
import ResSearch from "../components/ReservationSearch/ResSearch";

const Reservation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    console.log(showSidebar);
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="reservation-wrapper">
      <div className="reservation-nav-bar-wrapper">
        <ReservationSideBar
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        />
        <ReservationNavBar toggleSidebar={toggleSidebar} />
      </div>
      <ResSearch />
    </div>
  );
};
export default Reservation;
