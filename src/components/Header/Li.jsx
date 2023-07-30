import React from "react";
import BigArrow from "../../assets/icons/BigArrow";

export default function (props) {
  if (props.brandIcon) {
    return (
      <li id={props.brandIcon}>
        <a>
          <img className={props.className} src={props.img} alt={props.alt} />
        </a>
      </li>
    );
  } else if (props.className === "arrow-icon") {
    return (
      <li className={props.className}>
        <a>{props.name}</a>
        <span>
          <BigArrow />
        </span>
      </li>
    );
  } else {
    return (
      <li className={props.className} id={props.idName}>
        <a href={props.url}>{props.name}</a>
      </li>
    );
  }
}
