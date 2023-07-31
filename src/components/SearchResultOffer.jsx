import { BsCheck2, BsFillCreditCardFill } from "react-icons/bs";

const SearchResultOffer = ({ offer }) => {
  return (
    <div className="avail-card-offer">
      <div className="avail-card-offer-left">
        <a href="" className="avail-room-details-link avail-offer-link">
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
        <span className="avail-card-offer-price"> CA $464</span>
        <span className="avail-card-offer-desc">Average Per Night</span>
        <span className="avail-card-offer-desc tax-desc">
          Excluding Taxes & Fees
        </span>
        <button type="button" className="avail-card-btn">
          Book now
        </button>
      </div>
    </div>
  );
};
export default SearchResultOffer;
