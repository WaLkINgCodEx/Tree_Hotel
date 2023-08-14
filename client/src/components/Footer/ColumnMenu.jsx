import React, { Fragment, useState } from "react";
import { Button } from "@mui/material";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import BigArrow from "../../assets/icons/BigArrow";

export default function ColumnMenu(props) {
  const [menuOpen, setmenuOpen] = useState(false);

  function handleClick() {
    setmenuOpen(!menuOpen);
    // console.log(menuOpen);
  }

  if (props.columnTopic.length > 1) {
    return (
      <Fragment>
        {props.columnTopic.map((topic, index) => {
          return (
            <MenuList
              className={menuOpen ? "menuOpen" : "menuClose"}
              key={index}
            >
              {topic.map((item, index) => {
                // console.log(item);
                return (
                  <MenuItem
                    className={
                      menuOpen ? item.className + "open" : item.className
                    }
                    key={index}
                  >
                    <Link href={item.link} underline="none">
                      <span>{item.topic} </span>
                    </Link>
                    {index === 0 && (
                      <Button
                        className="footer-mid-arrow"
                        onClick={handleClick}
                      >
                        <BigArrow />
                      </Button>
                    )}
                  </MenuItem>
                );
              })}
            </MenuList>
          );
        })}
      </Fragment>
    );
  } else {
    return (
      <MenuList className={menuOpen ? "menuOpen" : "menuClose"}>
        {props.columnTopic[0].map((item, index) => {
          return (
            <MenuItem
              className={menuOpen ? item.className + "open" : item.className}
              key={index}
            >
              <Link href={item.link} underline="none">
                <span>{item.topic}</span>
              </Link>
              {index === 0 && (
                <Button className="footer-mid-arrow" onClick={handleClick}>
                  <BigArrow />
                </Button>
              )}
            </MenuItem>
          );
        })}
      </MenuList>
    );
  }
}
