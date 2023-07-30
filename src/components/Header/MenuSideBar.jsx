import React from "react";
import Container from "@mui/material/Container";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { sideBarURLs } from "../../data";

export default function MenuSideBar({ showSidebar, toggleSidebar }) {
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
          <MenuItem className="lang-select">
            <Button>
              <a>
                <span>ENGLISH</span>
              </a>
            </Button>
          </MenuItem>
        </MenuList>
      </Container>
    </>
  );
}
