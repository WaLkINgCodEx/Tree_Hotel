import React from "react";
import Container from "@mui/material/Container";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function MenuSideBar(props) {
  return (
    <>
      <Container
        class="nav-sidebar-container"
        maxWidth="false"
        disableGutters="true"
      >
        <MenuList>
          <MenuItem>
            <Button>
              <a href="">
                <span>ABOUT</span>
              </a>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button>
              <a href="">
                <span>ABOUT</span>
              </a>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button>
              <a href="">
                <span>ABOUT</span>
              </a>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button>
              <a href="">
                <span>ABOUT</span>
              </a>
            </Button>
          </MenuItem>
        </MenuList>
      </Container>
    </>
  );
}
