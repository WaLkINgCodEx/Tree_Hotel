import React from "react";
import Container from "@mui/material/Container";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import LangMenu from "./LangMenu";
import { sideBarURLs } from "../../data";

export default function MobileSideBar({ showSidebar, toggleSidebar }) {
  return (
    <>
      <Container
        className={
          showSidebar
            ? "nav-sidebar-container showSidebar"
            : "nav-sidebar-container"
        }
        maxWidth="false"
        disablegutters="true"
      >
        <MenuList>
          {sideBarURLs.map((item, index) => {
            return (
              <MenuItem key={index}>
                <a className="menu-item-link" href={item.url}>
                  <span>{item.topic}</span>
                </a>
              </MenuItem>
            );
          })}
        </MenuList>
        <MenuList>
          <MenuItem className="lang-select">
            <LangMenu notMobile={false} />
          </MenuItem>
        </MenuList>
      </Container>
    </>
  );
}
