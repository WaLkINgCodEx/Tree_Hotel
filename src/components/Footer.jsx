import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ColumnMenu from "./ColumnMenu";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",

  textAlign: "left",
  color: "white",
}));

export default function Footer(props) {
  return (
    <div className="banyanfooter">
      <div className="footer-top">
        <div className="social-buttons">
          {props.socialMediaSVG.map((item) => {
            return (
              <div>
                <a className={item.className}>
                  <svg
                    width={item.width}
                    height={item.height}
                    viewBox={item.viewBox}
                    xmlns="http://www.w3.org/2000/svg"
                    class="BanyanTreeFooter-whiteSvgIcon"
                  >
                    <path
                      d={item.d}
                      fill="currentColor"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
        <div>
          <a className="best-price">
            <span>BEST PRICE GUARANTEE</span>
          </a>
        </div>
      </div>
      <hr className="footer-separator" />
      <Box className="footer-mid" sx={{ flexGrow: 1 }}>
        <Grid className="mid-container" container spacing={0}>
          <Grid item xs={12} lg={3}>
            <ColumnMenu column={props.footerMidData.column_1} />
          </Grid>
          <Grid item xs={12} lg={3}>
            <ColumnMenu column={props.footerMidData.column_2} />
          </Grid>
          <Grid item xs={12} lg={3}>
            <ColumnMenu column={props.footerMidData.column_3} />
          </Grid>
          <Grid item xs={12} lg={3}>
            <ColumnMenu column={props.footerMidData.column_4} />
          </Grid>
        </Grid>
      </Box>
      <hr className="footer-separator" />
      <Box className="footer-bottom" sx={{ flexGrow: 1 }}>
        <Grid className="bottom-container" container spacing={0}>
          <Grid item xs={12} lg={5}>
            <span>
              Copyright © 2023 - Banyan Tree Hotels & Resorts. All rights
              reserved
            </span>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie preferences</li>
            </ul>
          </Grid>

          <Grid item xs={12} lg={2}>
            <a className="footer-logo">
              <img
                src="/assets/images/icon-logo-white.svg"
                alt="tree-logo-white"
              ></img>
            </a>
          </Grid>

          <Grid item xs={12} lg={5}>
            <span>In partnership with</span>
            <img
              src="/assets/images/icon-logo-white_2.svg"
              alt="tree-logo-white2"
            ></img>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
