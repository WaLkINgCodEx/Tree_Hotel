import Header from "../components/Header/Header";
import IntroImageBanner from "../components/IntroImageBanner";
const Spa = () => {
  const title = "RETREAT TO THE TENDER TOUCH OF OUR HIGHLY-SKILLED THERAPISTS";
  const paragraphs = [
    "Banyan Tree Spa Krabi boasts Krabi’s first hydrotherapy spa, The Rainforest, a holistic and innovative wellness experience designed to heal and soothe. Embark on your experiential journey with a sophisticated hydrothermal circuit comprising a Rain Walk, Steam, Sauna, Ice Fountain, Vitality Pool, Outdoor Cold Plunge Pool, Outdoor Hot Plunge Pool, Jet Pool, and Heated Bed.",
  ];
  const image = "/assets/images/spa-banner.jpeg";
  return (
    <>
      <Header
        hotel="Spa & Wellbeing"
        navPage="Spa"
        img="/assets/images/header_img/lobby_5.webp"
      />
      <IntroImageBanner title={title} paragraphs={paragraphs} image={image} />
    </>
  );
};
export default Spa;
