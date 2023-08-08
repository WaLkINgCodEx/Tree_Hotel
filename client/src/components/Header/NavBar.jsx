import React from "react";
import Li from "./Li";
import sideBarURLs from "../../data";
import LangMenu from "./LangMenu";
import MoreMenu from "./MoreMenu";

export default function NavBar() {
  return (
    <div className="nav-bar-top">
      <ul>
        <Li
          logoFrame="logo-frame"
          className="tree-logo"
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
        <MoreMenu />
        <LangMenu notMobile={true} />
        <Li name="BOOK NOW" idName="bookNowButton" url="reservation" />
      </ul>
    </div>
  );
}
