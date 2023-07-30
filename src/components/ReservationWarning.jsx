import { AiFillWarning } from "react-icons/ai";
const ReservationWarning = () => {
  return (
    <div className="warning-msg-container">
      <div className="msg-content">
        <div className="icon-circle">
          <span className="warning-size">
            <AiFillWarning style={{ fill: "white" }} />
          </span>
        </div>
        <div className="warning-msg">
          <h4>
            We apologize for the inconvenience. There are no rooms available at
            BANYAN TREE KRABI matching your search criteria.
          </h4>
          <p>
            Please try selecting alternate dates, modifying your search options,
            or choosing an alternate property from the list below.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ReservationWarning;
