import React from "react";
import Li from "./Li";
import LangMenu from "./LangMenu";

export default function NavBar() {
  return (
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
        {/* <LangMenu notMobile={true} /> */}
        <Li name="BOOK NOW" idName="bookNowButton" />
      </ul>
    </div>
  );
}
