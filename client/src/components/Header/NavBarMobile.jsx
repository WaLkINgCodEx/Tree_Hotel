import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MobileSideBar from "./MobileSideBar";
import IconHamburger from "../../assets/icons/icon-hamburger";
import IconClose from "../../assets/icons/icon-close";

export default function NavBarMobile() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    // console.log(showSidebar);
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Box className="nav-bar-top-m" sx={{ flexGrow: 1, height: 47 }}>
        <Grid container spacing={0} disablegutters="true">
          <Grid className="nav-m-l" disablegutters="true" item xs={5}>
            <Button
              onClick={toggleSidebar}
              color="inherit"
              size="large"
              variant="text"
            >
              {!showSidebar ? <IconHamburger /> : <IconClose />}
            </Button>
          </Grid>
          <Grid className="nav-m-mid" disablegutters="true" item xs={2}>
            <Button>
              <span>
                <img
                  src="/assets/images/icon-logo-green-2.svg"
                  alt="tree-logo"
                ></img>
              </span>
            </Button>
          </Grid>
          <Grid className="nav-m-r" disablegutters="true" item xs={5}>
            <Button
              sx={{
                ":hover": {
                  bgcolor: "#baa382", // theme.palette.primary.main
                  color: "white",
                },
              }}
            >
              <a href="/reservation">
                <span>BOOK NOW</span>
              </a>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <MobileSideBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
}
