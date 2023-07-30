import React, { useState } from "react";
import Li from "./Li";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuSideBar from "./MenuSideBar";
import IconHamburger from "../../assets/icons/icon-hamburger";
import IconClose from "../../assets/icons/icon-close";

export default function Header(props) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    console.log(showSidebar);
    setShowSidebar(!showSidebar);
  };
  <hamburger></hamburger>;
  return (
    <div className="header-wrap">
      <div className="header-nav-top">
        <Box className="nav-bar-top-m" sx={{ flexGrow: 1, height: 47 }}>
          <Grid container spacing={0} disableGutters="false">
            <Grid className="nav-m-l" item xs={5}>
              <Button
                onClick={toggleSidebar}
                color="inherit"
                size="large"
                variant="text"
              >
                {!showSidebar ? <IconHamburger /> : <IconClose />}
              </Button>
            </Grid>
            <Grid className="nav-m-mid" item xs={2}>
              <Button>
                <span>
                  <img
                    src="/assets/images/icon-logo-green-2.svg"
                    alt="tree-logo"
                  ></img>
                </span>
              </Button>
            </Grid>
            <Grid className="nav-m-r" item xs={5}>
              <Button>
                <a href="">
                  <span>BOOK NOW</span>
                </a>
              </Button>
            </Grid>
          </Grid>
        </Box>
        <MenuSideBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <div className="nav-bar-top">
          <ul>
            <Li
              brandIcon="logo"
              className="icon-logo"
              img="./assets/images/icon-logo-green-2.svg"
              alt="icon-logo"
              // key="logo"
            />
            <Li name="ABOUT" url="/" />
            <Li name="OFFERS" url="offers" />
            <Li name="ACCOMMODATION" url="accommodation" />
            <Li name="DINING" url="dining" />
            <Li name="SPA" url="spa" />
            <Li name="EXPERIENCES" url="experience" />
            <Li name="MORE" className="arrow-icon" />
            <Li name="EN" className="arrow-icon" />
            <Li name="BOOK NOW" idName="bookNowButton" url="reservation" />
          </ul>
        </div>
      </div>

      <div className="heroView">
        <div className="heroFrame">
          <img src={props.img}></img>
        </div>
        <div className="heroText">
          <h1>{props.hotel}</h1>
          <p>Krabi, Thailand</p>
        </div>
      </div>

      <div className="header-nav-bottom">
        <div className="nav-bar-bottom">
          <ul>
            <Li name="Home" className="arrow-icon" />
            <Li name="Thailand" className="arrow-icon" />
            <strong>
              <Li
                name="Banyan Tree Krabi"
                // className="arrow-icon"
                className={props.navPage != "" ? "arrow-icon" : null}
              />
            </strong>
            {props.navPage && <Li name={props.navPage} />}
          </ul>
        </div>
      </div>
    </div>
  );
}
