import { useState } from "react";
import ReservationSideBar from "../components/ReservationSearch/ReservationSideBar";
import ReservationNavBar from "../components/ReservationSearch/ReservationNavBar";
import ResSearch from "../components/ReservationSearch/ResSearch";
import {
  ReservationProvider,
  useReservationContext,
} from "../contexts/ReservationContext";
import SearchResults from "../components/ReservationSearch/SearchResults";
import ReservationGuest from "../components/ReservationSearch/ReservationGuest";
import ReservationStepper from "../components/ReservationSearch/ReservationStepper";
import ReservationStayInfo from "../components/ReservationSearch/ReservationStayInfo";

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
