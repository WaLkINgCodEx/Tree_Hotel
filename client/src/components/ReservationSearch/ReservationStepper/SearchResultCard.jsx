import SearchResultOffer from "./SearchResultOffer";
import { useState } from "react";
import { useReservationContext } from "../../../contexts/ReservationContext";

const SearchResultCard = ({ roomType, offers }) => {
  const { startDate, endDate, getTotalGuests, getTotalNights } =
    useReservationContext();
  const [isMoreOfferOpen, setIsMoreOfferOpen] = useState(false);
  const toggleMoreOfferOpen = () => {
    setIsMoreOfferOpen(!isMoreOfferOpen);
  };

  const nowAvailOffers = offers.filter(
    (offer) =>
      offer.isOpen === true &&
      offer.minNights <= getTotalNights() &&
      offer.minGuests <= getTotalGuests() &&
      (startDate.isBetween(offer.dateOpen.start, offer.dateOpen.end) ||
        endDate.isBetween(offer.dateOpen.start, offer.dateOpen.end))
  );

  return (
    <div className="avail-card">
      <div className="avail-card-photo-container">
        <img className="avil-card-photo" src={roomType.image} alt="" />
      </div>
      <div className="avail-card-info">
        <h2 className="avail-card-title">{roomType.room}</h2>
        <div className="avail-card-desc">{roomType.roomType}</div>
        <span className="avail-card-room-prop">
          Guest {roomType.capacity} | {roomType.bed} | {roomType.size} m
          <sup>2</sup>
        </span>
        <p className="avail-card-desc">{roomType.roomDesc}</p>
        <a href="/" className="avail-room-details-link">
          Room details
        </a>
        <hr className="avail-room-hr" />
        <div className="avail-offers-container">
          {nowAvailOffers.map((offer, idx) => {
            return (
              <SearchResultOffer
                key={idx}
                idx={idx}
                offer={offer}
                isMoreOfferOpen={isMoreOfferOpen}
                roomType={roomType}
              />
            );
          })}
        </div>
        <div className="view-rates-container">
          <button
            type="button"
            onClick={toggleMoreOfferOpen}
            className="more-rates-button"
          >
            {isMoreOfferOpen ? "View Less Rate" : "View More Rates"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchResultCard;
