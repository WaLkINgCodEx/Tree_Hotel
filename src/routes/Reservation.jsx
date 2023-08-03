import { useState } from "react";
import ReservationSideBar from "../components/ReservationSideBar";

import ReservationNavBar from "../components/ReservationNavBar";
import ResSearch from "../components/ReservationSearch/ResSearch";
import {
  ReservationProvider,
  useReservationContext,
} from "../contexts/ReservationContext";
import SearchResults from "../components/SearchResults";
import ReservationGuest from "../components/ReservationGuest";
import ReservationStepper from "../components/ReservationStepper";
import ReservationStayInfo from "../components/ReservationStayInfo";
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
        <div className="avail-cards-container">
          <div className="avail-results-container">
            <div className="results-left">
              <ReservationStepper />
            </div>
            <div className="results-right">
              <ReservationStayInfo />
            </div>
          </div>
        </div>
        {/* <SearchResults />
        <ReservationGuest /> */}
      </div>
    </ReservationProvider>
  );
};
export default Reservation;
