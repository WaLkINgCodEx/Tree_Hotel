import React from "react";
import Li from "./Li";

export default function Header(props) {
  return (
    <div className="hero-section">
      <div className="nav-top">
        <div className="nav-bar-1">
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
            <Li name="EXPERIENCE" url="experience" />
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

      <div className="nav-bottom">
        <div className="nav-bar-2">
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
