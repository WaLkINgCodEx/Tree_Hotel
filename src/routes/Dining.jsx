import DiningList from "../components/DiningList";
import IntroBanner from "../components/IntroBanner";
import Header from "../components/Header/Header";

const Dining = () => {
  const title =
    "DELIGHT IN A RANGE OF DIVERSE CULINARY EXPERIENCES TO SUIT ALL TASTES";
  const paragraphs = [
    `Ever adventurous, Banyan Tree Krabi offers myriad dining options with a contemporary take on Thai, International, Rustic and Mediterranean dishes, all of which are guaranteed to kindle your tastebuds and create unforgettable memories.`,
    `Embark on a nutritious and delicious culinary journey at Krabi's most iconic venue. Experience dining in one of the "Bird's Nests" at Banyan Tree’s signature Thai restaurant, Saffron, or try our all-day dining with creative and international rustic cuisine at The Naga Kitchen. Relax at the beachfront Kredkaew Bar with dramatic sunset views, and top off your vacation with a unique tropical Destination Dining experience, blending romance and intimacy with the flavours of Thailand.`,
  ];

  return (
    //nav bar and hero
    <>
      <Header
        hotel="Dining"
        navPage="Dining"
        img="/assets/images/header_img/lobby_4.webp"
      />
      <IntroBanner title={title} paragraphs={paragraphs} />
      <DiningList />
    </>
  );
};
export default Dining;
