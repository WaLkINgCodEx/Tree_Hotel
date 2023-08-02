import React, { Fragment } from "react";
import Card from "./Card.jsx";

export default function CardList(props) {
  if (props.cardData.type == "silder") {
    return (
      <Card
        card={props.cardData}
        frameclass="card-frame"
        index={props.cardData.idName}
      />
    );
  } else {
    return (
      <Fragment>
        {props.cardData.map((card, index) => {
          return (
            <Card card={card} key={index} frameclass="non-silder card-frame" />
          );
        })}
      </Fragment>
    );
  }
}
