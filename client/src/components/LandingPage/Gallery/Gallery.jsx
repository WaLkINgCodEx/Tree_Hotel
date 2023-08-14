import React, { Fragment } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./style/gallery.css";

export default function Gallery(props) {
  return (
    <div className="photo-booth-wrapper">
      <div className="booth-frame">
        <div className="booth-left">
          <div className="left-content">
            <div>
              <h2>GALLERY</h2>
            </div>

            <div className="booth-p">
              <p>Destination • Sanctuaries • Experiences • Communities</p>
              <a href="/">
                <span className="booth-btn">View More</span>
              </a>
            </div>
          </div>
        </div>

        <div className="booth-right">
          <SimpleBar
            style={{
              maxHeight: 500,
              maxWidth: 840,
            }}
          >
            <div className="muti-col-frame">
              {props.galleryData.images.map((col, index) => {
                return (
                  <Fragment key={index}>
                    <div className="frame-col">
                      {col.map((img, index) => {
                        return (
                          <Fragment key={index}>
                            <div className="photo-box">
                              <img src={img} alt=""></img>
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
}
