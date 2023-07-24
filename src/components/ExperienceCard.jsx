import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const ExperienceCard = ({ title, desc, images }) => {
  return (
    <div className="exp-card-container">
      <div className="exp-card-image-container">
        {images.length > 1 ? (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="exp-swiper"
          >
            {images.map((image) => {
              return (
                <SwiperSlide>
                  <img className="slide-image" src={image} alt={title} />
                </SwiperSlide>
              );
            })}
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
