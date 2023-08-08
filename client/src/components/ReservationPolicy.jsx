const ReservationPolicy = () => {
  return (
    <div className="res-policy-container">
      <h2>Policies</h2>
      <div className="res-policy-time">
        <div className="res-policy-left">
          <h6>Check-in</h6>
          <p>After 3:00 PM</p>
        </div>
        <div className="res-policy-right">
          <h6>Check-out</h6>
          <p>Before 12:00 PM</p>
        </div>
      </div>
      <h5 className="res-policy-suite">Suite name</h5>
      <div className="res-policy">
        <h6>Guarantee Policy</h6>
        <p>
          Original credit card used during booking must be presented at the time
          of check-in. Note: All add-on services selected during the booking
          process is not included in the "Payment Details" and will be
          chargeable upon check-in at the Resort
        </p>
      </div>
      <div className="res-policy">
        <h6>Cancel Policy</h6>
        <p>
          Reservation requires full prepayment. It is non-cancellable,
          non-refundable and no changes allowed. Your credit card will be charge
          100% of the total reservations cost upon making reservations.
        </p>
      </div>
    </div>
  );
};
export default ReservationPolicy;
