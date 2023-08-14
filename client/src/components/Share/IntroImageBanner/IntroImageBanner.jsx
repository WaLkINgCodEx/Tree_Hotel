import { Fragment } from "react";
import { icons } from "../../../data";
import "./style/introImageBanner.css";

const IntroImageBanner = ({ title, paragraphs, image, haveLink }) => {
  return (
    <div className="heroView">
      <div className="heroFrame">
        <img src={image} alt={title} />
      </div>
      <div className="intro-desc intro-image-desc">
        <h1 className="intro-title">{title}</h1>

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
      {haveLink && (
        <div>
          <a className="banner-link" href="/">
            <img
              className="fac-icon reverse-icon-x reverse-icon-color"
              src={icons.arrow}
              alt="arrowRight"
            />
            More details
          </a>
        </div>
      )}
    </div>
  );
};
export default IntroImageBanner;
