import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import CircleArrow from "../../assets/icons/CircleArrow";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ExperienceCard = ({ title, desc, images }) => {
  const swiperRef = useRef();

  return (
    <div className="exp-card-container">
      <div className="exp-card-image-container">
        {images.length > 1 ? (
          <Swiper
            // navigation={true}
            modules={[Navigation]}
            className="exp-swiper"
            onSwiper={(swiper) => {
              // console.log(swiper);
              // console.log(swiperRef);
              swiperRef.current = swiper;
            }}
          >
            {images.map((image, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img className="slide-image" src={image} alt={title} />
                </SwiperSlide>
              );
            })}
            <button
              className="swiper-button-prev"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <CircleArrow />
            </button>
            <button
              className="swiper-button-next"
              onClick={() => swiperRef.current.slideNext()}
            >
              <CircleArrow />
            </button>
          </Swiper>
        ) : (
          <img className="slide-image" src={images[0]} alt={title} />
        )}
      </div>

      <div className="exp-card-bottom">
        <div>
          <h4 className="exp-card-title">{title}</h4>
          <p>{desc}</p>
          <br />
        </div>
        <div className="exp-btn-area">
          <button className="box-btn exp-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
