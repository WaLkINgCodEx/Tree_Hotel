import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function HighLight(props) {
  return (
    <div className="highlight-wrapper">
      <span className="hightlight-bg">
        <img src="/assets/images/highlight_bg.webp" alt="" />
      </span>
      <div className="highlight-overlay"></div>

      <div className="highlight-container">
        <h2>DISCOVER: REGIONAL HIGHLIGHTS</h2>
        <Swiper
          className="hightlight-swiper"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src="/assets/images/highlight_img/highlight_1.webp" />
          </SwiperSlide>
          <SwiperSlide id="swiperslide">
            <img src="/assets/images/highlight_img/highlight_1.webp" />
            <div className="swiper-btn">Explore</div>
            {/* <p className="swiper-content">
              Tantalisingly located on the tropical shores of southern
              Thailand’s Andaman coast, visitors to Krabi are drawn to its
              colourful culture and famed hospitality, as well as its myriad
              attractions - hot springs, a wildlife sanctuary, sea caves,
              flourishing coral reefs and exotic marine life, limestone cliffs
              to entice rock climbers, and the conserved emerald waters of
              marine national parks, including the famous island paradises of
              Koh Phi Phi and Koh Hong.
            </p> */}
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/highlight_img/highlight_1.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/images/highlight_img/highlight_1.webp" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
