import React from "react";
import Container from "@mui/material/Container";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import LangMenu from "./LangMenu";
import { sideBarURLs } from "../../data";

export default function MobileSideBar({ showSidebar, toggleSidebar }) {
  return (
    <>
      <Container
        class={
          showSidebar
            ? "nav-sidebar-container showSidebar"
            : "nav-sidebar-container"
        }
        maxWidth="false"
        disableGutters="true"
      >
        <MenuList>
          {sideBarURLs.map((item) => {
            return (
              <MenuItem>
                <Button>
                  <a href={item.url}>
                    <span>{item.topic}</span>
                  </a>
                </Button>
              </MenuItem>
            );
          })}
        </MenuList>
        <MenuList>
          <MenuItem class="lang-select">
            <LangMenu notMobile={false} />
          </MenuItem>
        </MenuList>
      </Container>
    </>
  );
}
