import Header from "../components/Header/Header";
import DescBanner from "../components/DescBanner";
import InfoSection from "../components/InfoSection";
import SubscriptionBanner from "../components/SubscriptionBanner";
import CardList from "../components/FeatureCards/CardList";
import { aboutCards, aboutSliderCards } from "../data";

const LandingPage = () => {
  return (
    <>
      <Header
        hotel="BANYAN TREE KRABI"
        navPage=""
        img="/assets/images/header_img/lobby_1.webp"
      />
      <CardList cardData={aboutSliderCards[0]} />
      <InfoSection />
      <SubscriptionBanner />
      <CardList cardData={aboutCards} />
      <CardList cardData={aboutSliderCards[1]} />
    </>
  );
};
export default LandingPage;
