import SearchResultOffer from "./SearchResultOffer";
import { offers } from "../data";
const SearchResultCard = ({ roomType, offers }) => {
  return (
    <div className="avail-card">
      <div className="avail-card-photo-container">
        <img className="avil-card-photo" src={roomType.image} alt="" />
      </div>
      <div className="avail-card-info">
        <h2 className="avail-card-title">{roomType.room}</h2>
        <div className="avail-card-desc">{roomType.roomType}</div>
        <span className="avail-card-room-prop">
          Guest {roomType.capacity} | {roomType.bed} | {roomType.size}m2
        </span>
        <p className="avail-card-desc">{roomType.roomDesc}</p>
        <a href="" className="avail-room-details-link">
          Room details
        </a>
        <hr className="avail-room-hr" />
        <div className="avail-offers-container">
          {offers.map((offer) => {
            return <SearchResultOffer key={offer.name} offer={offer} />;
          })}
        </div>
        <div className="view-rates-container">
          <a href="" className="avail-room-details-link">
            View More Rates
          </a>
        </div>
      </div>
    </div>
  );
};
export default SearchResultCard;
