import PhotoSlider from "./PhotoSlider";
// import bannerImg1 from "../assets/images/banner-img-1.webp";
// import bannerImg2 from "../assets/images/banner-img-2.webp";

const DescBanner = () => {
  return (
    <div className="desc-banner-wrapper">
      <div className="banner-container">
        <div className="desc-container">
          <h2>ESCAPE TO TROPICAL TRANQUILITY</h2>
          <div className="desc-p">
            <p>
              Step into our sanctuary for the senses, where the sapphire blue
              sea meets tropical white sands against a backdrop of lush
              jungle-green mountains.
            </p>
            <p>
              <br />
              We welcome you to a heavenly oasis of peace and comfort in our
              idyllic beachfront resort. Feel the warm embrace of Banyan Tree
              hospitality - from the tranquil treatments at Banyan Tree Spa to
              mouthwatering cuisine at our stylish restaurants to the beach bar
              with its spectacular vistas of the Andaman Sea.
            </p>
            <p>
              <br />
              Retreat to a setting of unparalleled indulgence where you can
              truly unwind and rejuvenate your mind, body and soul.
            </p>
          </div>
        </div>

        <div className="photo-container">
          {/* <PhotoSlider image1={bannerImg1} image2={bannerImg2} /> */}
        </div>
      </div>
    </div>
  );
};

export default DescBanner;
