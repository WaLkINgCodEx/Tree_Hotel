import Header from "../../components/Header/Header";
import DescBanner from "../../components/DescBanner";
import InfoSection from "../../components/InfoSection";
import SubscriptionBanner from "../../components/SubscriptionBanner";
import CardList from "../../components/FeatureCards/CardList";

const LandingPage = () => {
  return (
    <>
      <Header
        hotel="BANYAN TREE KRABI"
        navPage=""
        img="/assets/images/header_img/lobby_1.webp"
      />
      <DescBanner />
      <InfoSection />
      <SubscriptionBanner />
      <CardList />
    </>
  );
};
export default LandingPage;
