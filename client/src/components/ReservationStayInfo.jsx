import { useReservationContext } from "../contexts/ReservationContext";
import moment from "moment";
import ReservationItem from "./ReservationItem";
const ReservationStayInfo = () => {
  const {
    adultNumber,
    kidNumber,
    startDate,
    endDate,
    reservationItems,
    reservationTotal,
  } = useReservationContext();

  return (
    <div className="avail-stay-info">
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
        {adultNumber}
        {adultNumber > 1 ? " Adults" : " Adult"}, {kidNumber}
        {kidNumber > 1 ? " Children" : " Child"}
      </div>
      {reservationItems.length > 0 &&
        reservationItems.map((reservationItem) => {
          return <ReservationItem reservationItem={reservationItem} />;
        })}

      <div className="avail-stay-total-fee">
        <div className="avail-stay-total-fee-left">Total:</div>
        <div className="avail-stay-total-fee-right">
          CA$ {reservationTotal}
          {reservationTotal > 0 && (
            <span className="avail-stay-total-fee-tax-stat">
              (CAD tax included)
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default ReservationStayInfo;
