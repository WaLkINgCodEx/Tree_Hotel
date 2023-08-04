import Header from "../components/Header/Header";
import IntroImageBanner from "../components/IntroImageBanner";
import Footer from "../components/Footer/Footer";
import { socialMediaSVG, footerMidData } from "../data";

const Spa = () => {
  const spaBannerInfo = {
    title: "RETREAT TO THE TENDER TOUCH OF OUR HIGHLY-SKILLED THERAPISTS",
    paragraphs: [
      "Banyan Tree Spa Krabi boasts Krabi’s first hydrotherapy spa, The Rainforest, a holistic and innovative wellness experience designed to heal and soothe. Embark on your experiential journey with a sophisticated hydrothermal circuit comprising a Rain Walk, Steam, Sauna, Ice Fountain, Vitality Pool, Outdoor Cold Plunge Pool, Outdoor Hot Plunge Pool, Jet Pool, and Heated Bed.",
    ],
    image: "/assets/images/spa-banner.jpeg",
    haveLink: true,
  };

  return (
    <>
      <Header
        hotel="Spa & Wellbeing"
        navURL="spa"
        img="/assets/images/header_img/lobby_5.webp"
      />
      <IntroImageBanner
        title={spaBannerInfo.title}
        paragraphs={spaBannerInfo.paragraphs}
        image={spaBannerInfo.image}
        haveLink={spaBannerInfo.haveLink}
      />
      <Footer socialMediaSVG={socialMediaSVG} footerMidData={footerMidData} />
    </>
  );
};
export default Spa;
