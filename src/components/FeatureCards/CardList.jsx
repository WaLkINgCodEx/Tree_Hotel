import React, { Fragment } from "react";
import Card from "./Card.jsx";

export default function CardList(props) {
  if (props.cardData.type == "silder") {
    return <Card card={props.cardData} />;
  } else {
    return (
      <Fragment>
        {props.cardData.map((card, index) => {
          return <Card card={card} key={index} />;
        })}
      </Fragment>
    );
  }
}
