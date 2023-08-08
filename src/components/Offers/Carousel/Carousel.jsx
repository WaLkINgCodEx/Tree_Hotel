import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import OfferCard from "../OfferCard/OfferCard";
import "./style/carousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "./style/carousel.css";

const Carousel = ({ offers }) => {
  return (
    <>
      <div className="carousel-row-container">
        <Swiper
          navigation={true}
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {offers &&
            offers
              .filter((_, idx) => idx < 7)
              .map((offer) => {
                return (
                  <SwiperSlide>
                    <OfferCard offer={offer} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
      {offers.length > 7 && (
        <div className="carousel-row-container">
          <Swiper
            navigation={true}
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {offers &&
              offers
                .filter((_, idx) => idx > 6)
                .map((offer) => {
                  return (
                    <SwiperSlide>
                      <OfferCard offer={offer} />
                    </SwiperSlide>
                  );
                })}
          </Swiper>
        </div>
      )}
    </>
  );
};
export default Carousel;
