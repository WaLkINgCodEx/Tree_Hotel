import { Fragment } from "react";
import "./style/introBanner.css";

const IntroBanner = ({ title, paragraphs }) => {
  return (
    <div className="intro-wrapper">
      <div className="intro-desc">
        <h2 className="intro-title">{title}</h2>

        {paragraphs.length > 0 &&
          paragraphs.map((paragraph, idx) => {
            return (
              <Fragment key={idx}>
                <p className="intro-desc-para">{paragraph}</p>
                <br />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};
export default IntroBanner;
