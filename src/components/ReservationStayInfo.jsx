import { useReservationContext } from "../contexts/ReservationContext";
import moment from "moment";
const ReservationStayInfo = () => {
  const { adultNumber, kidNumber, startDate, endDate } = useReservationContext;

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
        {adultNumber} Adults, {kidNumber} Children
      </div>
      <div>Total:</div>
    </div>
  );
};
export default ReservationStayInfo;
