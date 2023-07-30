import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";

export default function LangMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [lang, setLang] = useState("ENGLISH");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const changeLang = (lang) => {
    setLang(lang);
  };

  const handleClose = (event) => {
    changeLang(event.target.getAttribute("value"));
    setAnchorEl(null);
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
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
      minWidth: 180,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "0 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  return (
    <div class="lang-button">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            className="IconArrow-right css-48nvow"
          >
            <g fill="none" stroke="currentColor">
              <path d="M11.889 16.728S13.249 9.433 21.778 7M11.889 16.728S10.529 9.433 2 7"></path>
            </g>
          </svg>
        </span>
        {lang}
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
        <MenuItem value="ENGLISH" onClick={handleClose}>
          ENGLISH
        </MenuItem>
        <MenuItem value="日本語" onClick={handleClose}>
          日本語
        </MenuItem>
        <MenuItem value="中文" onClick={handleClose}>
          中文
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
