import { useState } from "react";
import ReservationSideBar from "../../components/ReservationSearch/ReservationSideBar/ReservationSideBar";
import ReservationNavBar from "../../components/ReservationSearch/ReservationNavBar/ReservationNavBar";
import { ReservationProvider } from "../../contexts/ReservationContext";
import ReservationStepper from "../../components/ReservationSearch/ReservationStepper/ReservationStepper";
import ReservationStayInfo from "../../components/ReservationSearch/ReservationStayInfo/ReservationStayInfo";
import "./style/reservation.css";

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
      </div>
    </ReservationProvider>
  );
};
export default Reservation;
