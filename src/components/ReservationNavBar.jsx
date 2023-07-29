import { RxHamburgerMenu } from "react-icons/rx";
import { PiCaretDownLight } from "react-icons/pi";
const ReservationNavBar = ({ toggleSidebar }) => {
  return (
    <div className="reservation-nav-bar-container">
      <div className="res-navbar-left">
        <div className="hamburger" onClick={toggleSidebar}>
          <RxHamburgerMenu />
        </div>
        <div className="reservation-brand">
          <img src="/assets/images/bt-logo-plain.png" alt="brand" />
        </div>
        <h3 className="nav-brand-name">Banyan Tree Krabi</h3>
      </div>
      <div className="res-navbar-right">
        <a href="">
          <div className="mid-lg-only">Find a Reservation</div>
        </a>

        <a href="">
          <div>
            English <PiCaretDownLight />
          </div>
        </a>
        <a href="">
          <div>
            Canadian Dollars <PiCaretDownLight />
          </div>
        </a>
      </div>
    </div>
  );
};
export default ReservationNavBar;
