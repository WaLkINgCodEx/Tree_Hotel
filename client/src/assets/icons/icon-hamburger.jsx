import React, { Fragment } from "react";

export default function IconHamburger() {
  return (
    <Fragment>
      <svg
        width="24"
        viewBox="0 0 24 24"
        xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="icon-hamburger_menu_svg__b">
            <use href="#icon-hamburger_menu_svg__a" clipRule="evenodd"></use>
          </clipPath>
          <path id="icon-hamburger_menu_svg__a" d="M0 0h24v24H0z"></path>
        </defs>
        <g
          clipPath="url(#icon-hamburger_menu_svg__b)"
          fill="none"
          stroke="currentColor"
        >
          <path d="M3 12.5h18.506M3 6.5h18.506M3 18.5h18.506"></path>
        </g>
      </svg>
    </Fragment>
  );
}
