import { useReservationContext } from "../../../contexts/ReservationContext";
import moment from "moment";
import ReservationItem from "./ReservationItem";
import "./style/reservationStayInfo.css";
import CirclePlus from "../../../assets/icons/CirclePlus";

const ReservationStayInfo = ({ toggleStayInfo }) => {
  const {
    adultNumber,
    kidNumber,
    startDate,
    endDate,
    reservationItems,
    handleReset,
    chargeList,
    totalCharge,
  } = useReservationContext();

  return (
    <div className="avail-stay-info">
      <span className="avail-stay-close" onClick={toggleStayInfo}>
        &times;
      </span>

      <h2 className="avail-stay-title">Your Stay</h2>

      <div className="avail-stay-check-time">
        <div>
          <h6 className="stay-check-time-title">Check-in</h6>
          <p>After 3:00 PM</p>
        </div>
        <div>
          <h6 className="stay-check-time-title">Check-out</h6>
          <p>Before 12:00 PM</p>
        </div>
      </div>

      <div className="avail-stay-date">
        {moment(startDate).format("ddd, MMM D, YYYY")} -
        {moment(endDate).format("ddd, MMM D, YYYY")}
      </div>

      <div className="avail-stay-guest">
        {adultNumber} {adultNumber > 1 ? " Adults" : " Adult"}, {kidNumber}{" "}
        {kidNumber > 1 ? " Children" : " Child"}
      </div>
      {console.log("reservationItems", reservationItems)}
      {reservationItems.length > 0 &&
        reservationItems.map((reservationItem, index) => {
          return (
            <ReservationItem
              key={index}
              bookingID={reservationItem.bookingID}
              reservationItem={reservationItem}
            />
          );
        })}
      {reservationItems.length > 0 && (
        <div className="add-room">
          <button className="btn" onClick={handleReset}>
            <span className="add-icon">
              <CirclePlus />
            </span>
            <span>Add a Room</span>
          </button>
        </div>
      )}
      <div className="avail-stay-total-fee">
        <div className="avail-stay-total-fee-left">Total:</div>
        <div className="avail-stay-total-fee-right">
          CA$ {totalCharge}
          {totalCharge > 0 && (
            <span className="avail-stay-total-fee-tax-stat">
              (CAD tax included)
            </span>
          )}
          {}
          {console.log("chargeList", chargeList)}
        </div>
      </div>
    </div>
  );
};
export default ReservationStayInfo;
