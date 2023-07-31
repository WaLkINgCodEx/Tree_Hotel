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
      console.log(previousLang.current);
    }
  }, [lang]);

  const handleClose = (event) => {
    changeLang(event.target.getAttribute("value"));
    // changeLang(event.target.innerText);
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
      marginTop: 0,
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
        <MenuItem
          value={props.notMobile ? "ENG" : "ENGLISH"}
          onClick={handleClose}
        >
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
