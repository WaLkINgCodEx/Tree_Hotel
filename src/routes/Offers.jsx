import Carousel from "../components/Carousel";
import Header from "../components/Header/Header";
import OfferCard from "../components/OfferCard";
import { offers, socialMediaSVG, footerMidData } from "../data";
import Conditions from "../components/Conditions";
import Footer from "../components/Footer";

const Offers = () => {
  return (
    <>
      <Header
        hotel="Offers"
        navPage="Offers"
        img="/assets/images/header_img/lobby_2.webp"
      />
      <div className="offers-wrapper">
        <div className="carousel-container">
          <Carousel offers={offers} />
        </div>

        <div className="small-card-wrapper">
          <div className="small-card-container">
            {offers
              .filter((_, idx) => idx < 7)
              .map((offer) => {
                return <OfferCard offer={offer} />;
              })}
          </div>
          <div className="small-card-container">
            {offers
              .filter((_, idx) => idx > 6)
              .map((offer) => {
                return <OfferCard offer={offer} />;
              })}
          </div>
        </div>
        <div className="conditions">
          <Conditions />
        </div>
      </div>
      <Footer socialMediaSVG={socialMediaSVG} footerMidData={footerMidData} />
    </>
  );
};
export default Offers;
