import React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

export default function ColumnMenu(props) {
  return (
    <MenuList>
      {props.column.map((item) => {
        return (
          <MenuItem className={item.className}>
            <Link href={item.link} underline="none">
              <span>{item.topic}</span>
            </Link>
          </MenuItem>
        );
      })}
    </MenuList>
  );
}
