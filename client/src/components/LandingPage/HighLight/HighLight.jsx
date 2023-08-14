import React, { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style/highLight.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function HighLight(props) {
  const swiperRef = useRef();

  return (
    <div className="highlight-wrapper">
      <span className="hightlight-bg">
        <img src="/assets/images/highlight_bg.webp" alt="" />
      </span>
      <div className="highlight-overlay"></div>

      <div className="highlight-container">
        <h2>DISCOVER: REGIONAL HIGHLIGHTS</h2>
        <div className="silder-frame">
          <Swiper
            className="hightlight-swiper"
            // install Swiper modules
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={30}
            loop={true}
            speed={700}
            centeredSlides="true"
            onSwiper={(swiper) => {
              // console.log(swiper);
              // console.log(swiperRef);
              swiperRef.current = swiper;
            }}
          >
            {props.highlightData.map((story, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="img-container">
                    <span className="img-box">
                      <img src={story.image} alt="" />
                    </span>
                  </div>
                  <div className="swiper-btn">
                    <a href="/">
                      <span>Explore</span>
                    </a>
                  </div>
                  <div className="swiper-content">
                    <h3>{story.name}</h3>
                    {}
                    <p>{story.paragraph}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className="swiper-button-prev"
            onClick={() => swiperRef.current.slidePrev()}
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
            onClick={() => swiperRef.current.slideNext()}
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
      </div>
    </div>
  );
}
