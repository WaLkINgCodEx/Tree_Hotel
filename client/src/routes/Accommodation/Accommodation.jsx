import Header from "../../components/Header/Header";
import IntroBanner from "../../components/Share/IntroBanner/IntroBanner";
import PolicydropDown from "../../components/Accommodation/PolicydropDown";
import Footer from "../../components/Footer/Footer";
import RoomCards from "../../components/Accommodation/RoomCards";

import { socialMediaSVG, footerMidData } from "../../data";

const Accommodation = () => {
  const title =
    "OUR LUXURY SUITES AND VILLAS COME WITH PRIVATE POOLS AND OFFER PRIVACY ON YOUR HOLIDAY";
  const paragraphs = [
    "Each of Banyan Tree Krabi’s 72 luxurious suites and villas has its own private pool, offering privacy and intimacy in a tropical rainforest setting. Whether you're seeking a romantic hideaway with your loved one or a fun-filled family vacation, you can bathe in nature amidst fragrant gardens, graceful water features, and stunning views of the mesmerising Andaman Sea.",
  ];
  const policies = [
    {
      title: "Early Arrival / Late Departure Policy",
      details: [
        "Early check-in and late check-out are subject to availability.",
        "Late check-out from 12:00 pm to 6:00 pm will be charged 50% of the Best Available Rate of the day.",
        "Late check-out from 6:00 pm will be charged 100% of the Best Available Rate of the day.",
      ],
    },
    {
      title: "Cancellation Policy",
      details: [
        "The cancellation policy depends on each promotion. Please check each promotion for accurate information.",
      ],
    },
  ];

  return (
    <>
      <Header
        hotel="Accommodation"
        navURL="accommodation"
        img="/assets/images/header_img/lobby_3.webp"
      />
      <IntroBanner title={title} paragraphs={paragraphs} />
      <RoomCards />
      <div className="policies-wrapper">
        {policies &&
          policies.map((policy) => {
            return <PolicydropDown policy={policy} />;
          })}
      </div>
      <Footer socialMediaSVG={socialMediaSVG} footerMidData={footerMidData} />
    </>
  );
};
export default Accommodation;
