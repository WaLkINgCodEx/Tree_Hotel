import { BsCheck2, BsFillCreditCardFill } from "react-icons/bs";
import { useReservationContext } from "../../../contexts/ReservationContext";

const SearchResultOffer = ({ offer, idx, isMoreOfferOpen, roomType }) => {
  let { getTotalNights, addItemToCart, handleNext } = useReservationContext();

  const totalNights = getTotalNights();
  const roomCharge =
    (roomType.basePrice + offer.addOnPrice) * offer.discountRate * totalNights;
  const pricePerNight = (roomCharge / getTotalNights()).toFixed(2);

  return (
    <div
      className={
        isMoreOfferOpen
          ? `avail-card-offer c${idx} offerOpen`
          : `avail-card-offer c${idx}`
      }
    >
      <div className="avail-card-offer-left">
        <a href="/" className="avail-room-details-link avail-offer-link">
          {offer.name}
        </a>
        <ul>
          <li>
            <span className="avail-icon">
              <BsCheck2 />
            </span>
            <span>Free cancellation up to 21 days before arrival</span>
          </li>
          <li>
            <span className="avail-icon">
              <BsFillCreditCardFill />
            </span>
            <span>Guaranteed with Credit Card</span>
          </li>
          <li>{offer.bookDesc}</li>
        </ul>
        <p></p>
      </div>
      <div className="avail-card-offer-right">
        <span className="avail-card-offer-price">CA$ {pricePerNight}</span>
        <span className="avail-card-offer-desc">Average Per Night</span>
        <span className="avail-card-offer-desc tax-desc">
          Excluding Taxes & Fees
        </span>
        <button
          type="button"
          className="avail-card-btn"
          onClick={() => {
            addItemToCart(roomType, offer, roomCharge);
            handleNext();
          }}
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default SearchResultOffer;
