import Header from "../components/Header/Header";
import InfoSection from "../components/InfoSection/InfoSection";
import SubscriptionBanner from "../components/SubscriptionBanner";
import CardList from "../components/FeatureCards/CardList";
import Gallery from "../components/Gallery";
import HighLight from "../components/HighLight";
import Footer from "../components/Footer";
import {
  aboutCards,
  aboutSliderCards,
  galleryData,
  highlightData,
  socialMediaSVG,
  footerMidData,
} from "../data";

const LandingPage = () => {
  return (
    <>
      <Header
        hotel="BANYAN TREE KRABI"
        navURL=""
        img="/assets/images/header_img/lobby_1.webp"
      />
      <CardList cardData={aboutSliderCards[0]} />
      <InfoSection />
      {/* <SubscriptionBanner /> */}
      {/* <CardList cardData={aboutCards} />
      <CardList cardData={aboutSliderCards[1]} />
      <Gallery galleryData={galleryData} />
      <HighLight highlightData={highlightData} />
      <Footer socialMediaSVG={socialMediaSVG} footerMidData={footerMidData} /> */}
    </>
  );
};
export default LandingPage;
