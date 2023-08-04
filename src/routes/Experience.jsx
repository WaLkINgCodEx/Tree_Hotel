import Header from "../components/Header/Header";
import ExpFilterNav from "../components/Experience/ExpFilterNav";
import IntroImageBanner from "../components/IntroImageBanner";
import Footer from "../components/Footer/Footer";
import { socialMediaSVG, footerMidData } from "../data";

const Experience = () => {
  const experienceBannerInfo = {
    title: "DISCOVER AND DESIGN YOUR TRAVEL EXPERIENCE AT BANYAN TREE KRABI",
    paragraphs: [
      "Krabi is fast becoming a popular tourist hotspot filled with no end of things to see and do. Still, its relatively untouched natural spaces continue to charm travellers, offering moments of blissful calm amidst its many picturesque parks and islands.",
    ],
    image: "/assets/images/experience-banner.webp",
    haveLink: false,
  };

  return (
    <>
      <Header
        hotel="Experience"
        navURL="experience"
        img="/assets/images/header_img/lobby_6.webp"
      />
      <IntroImageBanner
        title={experienceBannerInfo.title}
        paragraphs={experienceBannerInfo.paragraphs}
        image={experienceBannerInfo.image}
        haveLink={experienceBannerInfo.haveLink}
      />
      <ExpFilterNav />
      <Footer socialMediaSVG={socialMediaSVG} footerMidData={footerMidData} />
    </>
  );
};
export default Experience;
