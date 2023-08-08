import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha, duration } from "@mui/material/styles";
import BigArrow from "../../assets/icons/BigArrow";
import { sideBarURLs } from "../../data";

export default function MoreMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const previousLang = useRef("");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  const StyledMenu = styled((props) => (
    <Menu
      disableScrollLock={true}
      elevation={0}
      transitionDuration={350}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 0,
      marginTop: theme.spacing(1),
      Width: 116.5,
      marginTop: 0,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      "& .MuiList-root": {
        padding: 0,
        "& .MuiMenuItem-root": {
          padding: 0,
        },
      },
    },
  }));

  return (
    <div class="more-button">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span className="navbar-arrow">
          <BigArrow />
        </span>
        MORE
      </Button>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {sideBarURLs.map((item, index) => {
          if (index > 5) {
            return (
              <MenuItem className="more-menu-list" onClick={handleClose}>
                <a className="menu-item-link" href={item.url}>
                  <span>{item.topic}</span>
                </a>
              </MenuItem>
            );
          }
        })}
      </StyledMenu>
    </div>
  );
}
