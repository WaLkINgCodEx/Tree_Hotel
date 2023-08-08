import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha, duration } from "@mui/material/styles";
import BigArrow from "../../assets/icons/BigArrow";

export default function LangMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [lang, setLang] = useState(() => {
    if (props.notMobile) {
      return "ENG";
    } else {
      return "ENGLISH";
    }
  });
  const previousLang = useRef("");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const changeLang = (lang) => {
    setLang(lang);
  };

  useEffect(() => {
    if (lang) {
      previousLang.current = lang;
      // console.log(previousLang.current);
    }
  }, [lang]);

  const handleClose = (event) => {
    // console.log(event.target);
    // console.log(event.target.getAttribute("value"));
    changeLang(event.target.getAttribute("value"));
    // changeLang(event.target.innerText);
    setAnchorEl(null);
    event.preventDefault();
  };

  const StyledMenu = styled((props) => (
    <Menu
      disableScrollLock={true}
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
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
    <div class="lang-button">
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
        {lang ?? previousLang.current}
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
        <MenuItem>
          <a
            className="menu-item-link"
            href=""
            onClick={handleClose}
            value={props.notMobile ? "ENG" : "ENGLISH"}
          >
            <span
              onClick={handleClose}
              value={props.notMobile ? "ENG" : "ENGLISH"}
            >
              ENGLISH
            </span>
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="menu-item-link"
            onClick={handleClose}
            value="日本語"
            href=""
          >
            <span onClick={handleClose} value="日本語">
              日本語
            </span>
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className="menu-item-link" value="中文" href="">
            <span onClick={handleClose} value="中文">
              中文
            </span>
          </a>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
