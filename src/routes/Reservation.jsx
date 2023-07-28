import { useState } from "react";
import ReservationSideBar from "../components/ReservationSideBar";
import { RxHamburgerMenu } from "react-icons/rx";

const Reservation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    console.log(showSidebar);
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="reservation-nav-bar-wrapper">
      <ReservationSideBar
        showSidebar={showSidebar}
        toggleSidebar={toggleSidebar}
      />
      <div className="reservation-nav-bar-container">
        <div className="hamburger" onClick={toggleSidebar}>
          <RxHamburgerMenu />
        </div>
        <div className="reservation-brand">
          <img src="/assets/images/bt-logo-plain.png" alt="brand" />
        </div>
        <h3>Banyan Tree Krabi</h3>
      </div>
    </div>
  );
};
export default Reservation;
