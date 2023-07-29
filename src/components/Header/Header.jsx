import React from "react";
import Li from "./Li";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Header(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    console.log(showSidebar);
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="header-wrap">
      <div className="header-nav-top">
        <Box
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
          className="nav-bar-top-m"
          sx={{ flexGrow: 1, height: 47 }}
        >
          <Grid container spacing={2}>
            <Grid className="nav-m-l" item xs={5}>
              <Button color="inherit" size="large" variant="text">
                <svg
                  width="24"
                  viewBox="0 0 24 24"
                  xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="icon-hamburger_menu_svg__b">
                      <use
                        href="#icon-hamburger_menu_svg__a"
                        clip-rule="evenodd"
                      ></use>
                    </clipPath>
                    <path
                      id="icon-hamburger_menu_svg__a"
                      d="M0 0h24v24H0z"
                    ></path>
                  </defs>
                  <g
                    clip-path="url(#icon-hamburger_menu_svg__b)"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M3 12.5h18.506M3 6.5h18.506M3 18.5h18.506"></path>
                  </g>
                </svg>
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
            <Li name="BOOK NOW" idName="bookNowButton" />
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
