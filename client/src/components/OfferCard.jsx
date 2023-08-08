import "./style/offerCard.css";

const OfferCard = ({ offer }) => {
  const { name, desc, image } = offer;
  return (
    <div className="offer-card">
      <div className="offer-image-container">
        <img className="offer-image" src={image} alt="" />
      </div>
      <div className="offer-desc">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
      <div className="read-more-btn-area">
        <br />
        <button className="box-btn inverse-btn">READ MORE</button>
      </div>
    </div>
  );
};
export default OfferCard;
