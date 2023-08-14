import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import OfferCard from "../OfferCard/OfferCard";
import "./style/carousel.css";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ offers }) => {
  const swiperRef_1 = useRef();
  const swiperRef_2 = useRef();

  return (
    <>
      <div className="carousel-row-container">
        <Swiper
          // navigation={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
          centeredSlides="true"
          onSwiper={(swiper) => {
            // console.log(swiper);
            // console.log(swiperRef);
            swiperRef_1.current = swiper;
          }}
        >
          {offers &&
            offers
              .filter((_, idx) => idx < 7)
              .map((offer, index) => {
                return (
                  <SwiperSlide key={index}>
                    <OfferCard offer={offer} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
        <button
          className="swiper-button-prev"
          onClick={() => swiperRef_1.current.slidePrev()}
        >
          <svg
            height="62"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="IconArrow-right nav-icon css-48nvow"
          >
            <g fill="none" stroke="currentColor">
              <path d="M11.889 16.728S13.249 9.433 21.778 7M11.889 16.728S10.529 9.433 2 7"></path>
            </g>
          </svg>
        </button>
        <button
          className="swiper-button-next"
          onClick={() => swiperRef_1.current.slideNext()}
        >
          <svg
            height="62"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="IconArrow-right nav-icon css-48nvow"
          >
            <g fill="none" stroke="currentColor">
              <path d="M11.889 16.728S13.249 9.433 21.778 7M11.889 16.728S10.529 9.433 2 7"></path>
            </g>
          </svg>
        </button>
      </div>
      {offers.length > 7 && (
        <div className="carousel-row-container">
          <Swiper
            // navigation={true}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
            centeredSlides="true"
            onSwiper={(swiper) => {
              // console.log(swiper);
              // console.log(swiperRef);
              swiperRef_2.current = swiper;
            }}
          >
            {offers &&
              offers
                .filter((_, idx) => idx > 6)
                .map((offer, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <OfferCard offer={offer} />
                    </SwiperSlide>
                  );
                })}
          </Swiper>
          <button
            className="swiper-button-prev"
            onClick={() => swiperRef_2.current.slidePrev()}
          >
            <svg
              height="62"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="IconArrow-right nav-icon css-48nvow"
            >
              <g fill="none" stroke="currentColor">
                <path d="M11.889 16.728S13.249 9.433 21.778 7M11.889 16.728S10.529 9.433 2 7"></path>
              </g>
            </svg>
          </button>
          <button
            className="swiper-button-next"
            onClick={() => swiperRef_2.current.slideNext()}
          >
            <svg
              height="62"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="IconArrow-right nav-icon css-48nvow"
            >
              <g fill="none" stroke="currentColor">
                <path d="M11.889 16.728S13.249 9.433 21.778 7M11.889 16.728S10.529 9.433 2 7"></path>
              </g>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
export default Carousel;
