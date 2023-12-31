import { pricing } from "../../../data";
import { useReservationContext } from "../../../contexts/ReservationContext";
import PenToSquare from "../../../assets/icons/PenToSquare";
import TrashCan from "../../../assets/icons/TrashCan";
import moment from "moment";

const ReservationItem = ({ reservationItem, bookingID }) => {
  // console.log(reservationItem);
  const { removeOrder } = useReservationContext();

  const { basePrice, offer, totalNights, _id } = reservationItem;

  const totalPrice = (
    (basePrice + offer.addOnPrice) *
    offer.discountRate *
    totalNights
  ).toFixed(2);

  const govTax = totalPrice * pricing.govTax;
  const provTax = totalPrice * pricing.provTax;
  const serviceCharge = totalPrice * pricing.serviceCharge;
  const totalFees = (govTax + provTax + serviceCharge).toFixed(2);

  return (
    <div className="reservation-item-container">
      <div className="avail-stay-date">
        {moment(reservationItem.checkInDate).format("ddd, MMM D, YYYY")} -{" "}
        {moment(reservationItem.checkOutDate).format("ddd, MMM D, YYYY")}
      </div>

      <div className="avail-stay-guest">
        {reservationItem.adult}{" "}
        {reservationItem.adult > 1 ? " Adults" : " Adult"},{" "}
        {reservationItem.kid} {reservationItem.kid > 1 ? " Children" : " Child"}
      </div>
      <div className="reservation-item">
        <div className="reservation-item-left">
          <div className="reservation-item-suite">
            <span className="reservation-item-suite-type">
              {reservationItem.room}:
            </span>{" "}
            {reservationItem.roomType}
          </div>
          <div className="reservation-item-offer">
            {reservationItem.offer.name}
          </div>
          <div className="reservation-item-nights-button">
            {reservationItem.totalNights}
            {reservationItem.totalNights === 1 ? " Night" : " Nights"}
          </div>
        </div>
        <div className="reservation-item-right">CA$ {totalPrice}</div>
      </div>

      <div className="reservation-item">
        <div className="reservation-item-left">
          <div className="reservation-item-tax">Tax and Fees</div>
          <div className="reservation-item-nights-button">Details</div>
        </div>
        <div className="reservation-item-right">CA$ {totalFees}</div>
      </div>

      <div className="reservation-item-action">
        <button className="btn">
          <span className="btn-edit">
            <PenToSquare />
          </span>
          <span>Edit</span>
        </button>
        <span></span>
        <button className="btn" onClick={() => removeOrder(bookingID, _id)}>
          <span className="btn-remove">
            <TrashCan />
          </span>
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
};
export default ReservationItem;
