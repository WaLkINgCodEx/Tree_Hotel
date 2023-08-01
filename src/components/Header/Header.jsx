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
            <Li name="Home" className="Home" />
            <Li className="arrow-icon" />
            <Li name="Thailand" className="Thailand" />
            <Li className="arrow-icon" />
            <Li
              name="Banyan Tree Krabi"
              className={props.navURL}
              currentPage={props.navURL === "" ? true : false}
            />

            {props.navURL === "" ? null : <Li name="" className="arrow-icon" />}

            {props.navURL && (
              <Li
                name={props.navURL}
                className={props.navURL}
                currentPage={true}
              />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
