import React, { Fragment } from "react";

export default function Card(props) {
  return (
    <div className="feature-card-wrapper">
      <div className="card-frame">
        <div className="card-left">
          <div>
            <h2>{props.item.name}</h2>
          </div>

          <div className="card-p">
            {props.item.paragraphs.map((para, index) => {
              return (
                <Fragment key={index}>
                  {index != 0 && <br />}
                  <p>{para}</p>
                </Fragment>
              );
            })}

            <a>
              <span className="chat-btn">{props.item.button}</span>
            </a>
          </div>
        </div>

        <div className="card-right">
          <img src={props.item.img} alt="The White Pearl" />
        </div>
      </div>
    </div>
  );
}
