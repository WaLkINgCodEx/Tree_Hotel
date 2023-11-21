import { useState } from "react";
import ReservationSideBar from "../../components/ReservationSearch/ReservationSideBar/ReservationSideBar";
import ReservationNavBar from "../../components/ReservationSearch/ReservationNavBar/ReservationNavBar";
import { ReservationProvider } from "../../contexts/ReservationContext";
import ReservationStepper from "../../components/ReservationSearch/ReservationStepper/ReservationStepper";
import ReservationStayInfo from "../../components/ReservationSearch/ReservationStayInfo/ReservationStayInfo";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import "./style/reservation.css";
import "../../components/Footer/style/footer.css";

const Reservation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    console.log(showSidebar);
    setShowSidebar(!showSidebar);
  };

  const footerBottomBP = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1280,
      },
    },
  });

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
        <div className="banyanfooter">
          <div className="footer-top">
            <div className="social-buttons"></div>
            <div className="price-col">
              <a className="best-price" href="/">
                <span>BEST PRICE GUARANTEE</span>
              </a>
            </div>
          </div>
          <hr className="footer-separator" />
          <Box className="footer-bottom" sx={{ flexGrow: 1 }}>
            <Grid className="bottom-container" container spacing={0}>
              <Grid item xs={12} xl={5} theme={footerBottomBP}>
                <div className="footer-bottom-L">
                  <span className="copyright">
                    <p>
                      Copyright © 2023 - Banyan Tree Hotels & Resorts. All
                      rights reserved
                    </p>
                  </span>
                  <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Cookie preferences</li>
                  </ul>
                </div>
              </Grid>

              <Grid
                className="footer-bottom-C"
                item
                xs={12}
                xl={2}
                theme={footerBottomBP}
              >
                <a href="/">
                  <img
                    className="footer-logo"
                    src="/assets/images/icon-logo-white.svg"
                    alt="tree-logo-white"
                  ></img>
                </a>
              </Grid>

              <Grid
                className="footer-bottom-R"
                item
                xs={12}
                xl={5}
                theme={footerBottomBP}
              >
                <span>In partnership with</span>
                <img
                  className="footer-logo2"
                  src="/assets/images/icon-logo-white_2.svg"
                  alt="tree-logo-white2"
                ></img>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </ReservationProvider>
  );
};
export default Reservation;
