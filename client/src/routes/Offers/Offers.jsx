import Header from "../../components/Header/Header";
import Carousel from "../../components/Offers/Carousel/Carousel";
import OfferCard from "../../components/Offers/OfferCard/OfferCard";
import { offers, socialMediaSVG, footerMidData } from "../../data";
import Conditions from "../../components/Offers/Conditions/Conditions";
import Footer from "../../components/Footer/Footer";
import "./style/offers.css";

const Offers = () => {
  return (
    <>
      <Header
        hotel="Offers"
        navURL="offers"
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
              .map((offer, index) => {
                return <OfferCard offer={offer} key={index} />;
              })}
          </div>
          <div className="small-card-container">
            {offers
              .filter((_, idx) => idx > 6)
              .map((offer, index) => {
                return <OfferCard offer={offer} key={index} />;
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
