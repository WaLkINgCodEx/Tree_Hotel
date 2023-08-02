import { useState } from "react";
import ReservationSideBar from "../components/ReservationSideBar";

import ReservationNavBar from "../components/ReservationNavBar";
import ResSearch from "../components/ReservationSearch/ResSearch";
import { ReservationProvider } from "../contexts/ReservationContext";
import SearchResults from "../components/SearchResults";
import ReservationGuest from "../components/ReservationGuest";

const Reservation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    console.log(showSidebar);
    setShowSidebar(!showSidebar);
  };

  return (
    <ReservationProvider>
      <div className="reservation-wrapper">
        <div className="reservation-nav-bar-wrapper">
          <ReservationSideBar
            showSidebar={showSidebar}
            toggleSidebar={toggleSidebar}
          />
          <ReservationNavBar toggleSidebar={toggleSidebar} />
        </div>
        <ResSearch />
        <SearchResults />
        <ReservationGuest />
      </div>
    </ReservationProvider>
  );
};
export default Reservation;
