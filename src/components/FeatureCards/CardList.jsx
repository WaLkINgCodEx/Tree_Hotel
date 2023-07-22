import React, { Fragment } from "react";
import { features } from "./features";
import Card from "./Card.jsx";

export default function CardList() {
  return (
    <Fragment>
      {features.map((feature, index) => {
        return <Card item={feature} key={index} />;
      })}
    </Fragment>
  );
}
