import { TfiClose } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

import { PiCaretDownLight } from "react-icons/pi";

const ReservationSideBar = ({ showSidebar, toggleSidebar }) => {
  console.log(showSidebar);

  return (
    <div className="sidebar-wrapper">
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <div className="sidebar-top">
            <div className="sidebar-top-left">
              <button className="close-btn" onClick={toggleSidebar}>
                <TfiClose />
              </button>
            </div>
            <div className="sidebar-top-right">
              <span className="sidebar-brand">Banyan Tree Krabi</span>
            </div>
          </div>
          <div className="sidebar-nav-links">
            <a href="" className="sidebar-nav-link">
              Hotel Details
            </a>
            <a href="" className="sidebar-nav-link">
              Select a room
            </a>
            <a href="" className="sidebar-nav-link">
              Find Reservation
            </a>
            <a href="" className="sidebar-nav-link mid-lg-only-sidebar">
              English <PiCaretDownLight />
            </a>
            <a href="" className="sidebar-nav-link mid-lg-only-sidebar">
              Canadian Dollars <PiCaretDownLight />
            </a>
            <span className="sidebar-nav-link">
              <span className="phone-icon">
                <BsTelephone />
              </span>
              66 75 811 888
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReservationSideBar;
