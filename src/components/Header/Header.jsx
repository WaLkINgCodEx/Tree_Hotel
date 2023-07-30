import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import useMediaQuery from "@mui/material/useMediaQuery";
import Li from "./Li";

export default function Header(props) {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  return (
    <div className="header-wrap">
      <div className="header-nav-top">
        {isMobile ? <NavBarMobile /> : <NavBar />}
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
