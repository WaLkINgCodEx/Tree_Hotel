import React, { Fragment } from "react";
import BigArrow from "../../assets/icons/BigArrow";
import MenuItem from "@mui/material/MenuItem";

export default function Li(props) {
  if (props.logoFrame) {
    return (
      <Fragment>
        <MenuItem id={props.logoFrame}>
          <a href="/">
            <img className={props.className} src={props.img} alt={props.alt} />
          </a>
        </MenuItem>
      </Fragment>
    );
  } else if (props.className === "arrow-icon") {
    return (
      <li className={props.className}>
        <span>
          <BigArrow />
        </span>
      </li>
    );
  } else {
    return (
      <Fragment>
        <MenuItem className={props.className} id={props.idName}>
          <a className="navbar-item-link" href={props.url}>
            {props.currentPage ? (
              <strong>
                <span>{props.name}</span>
              </strong>
            ) : (
              <span>{props.name}</span>
            )}
          </a>
        </MenuItem>
      </Fragment>
    );
  }
}
