import React, { Fragment } from "react";
import PhotoSlider from "../PhotoSlider";

export default function Card(props) {
  return (
    <div className="feature-card-wrapper">
      <div className="card-frame">
        <div className="card-left">
          <div className="card-title">
            <h2>{props.card.name}</h2>
          </div>

          <div className="card-p">
            {props.card.paragraphs.map((para, index) => {
              return (
                <Fragment key={index}>
                  {index != 0 && <br />}
                  <p>{para}</p>
                </Fragment>
              );
            })}

            <a>
              {props.card.button && (
                <span className="card-btn">{props.card.button}</span>
              )}
            </a>
          </div>
        </div>

        <div className="card-right">
          {props.card.img.length == 2 ? (
            <div className="silder-container">
              <PhotoSlider
                image1={props.card.img[0]}
                image2={props.card.img[1]}
              />
            </div>
          ) : (
            <img
              className="non-slider"
              src={props.card.img}
              alt={props.card.name}
            />
          )}
        </div>
      </div>
    </div>
  );
}
