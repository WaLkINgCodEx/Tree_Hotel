import React, { Fragment } from "react";

export default function IconClose() {
  return (
    <Fragment>
      <svg
        width="24"
        viewBox="0 0 24 24"
        xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="icon-close_svg__b">
            <use href="#icon-close_svg__a" clipRule="evenodd"></use>
          </clipPath>
          <path id="icon-close_svg__a" d="M0 0h24v24H0z"></path>
        </defs>
        <g fill="none" stroke="currentColor" clipPath="url(#icon-close_svg__b)">
          <path d="M3 3l18 18M21 3L3 21"></path>
        </g>
      </svg>
    </Fragment>
  );
}
