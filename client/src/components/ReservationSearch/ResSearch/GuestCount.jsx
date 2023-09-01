import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { useReservationContext } from "../../../contexts/ReservationContext";

const GuestCount = () => {
  const {
    minusAdult,
    addAdult,
    minusKid,
    addKid,
    kidNumber,
    adultNumber,
    searchValues,
  } = useReservationContext();
  const { adultnumber, kidnumber } = searchValues;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="guest-count-button-area">
      <button className="guest-count-button" onClick={dropdown}>
        {adultNumber} {adultNumber > 1 ? " Adults" : " Adult"}, {kidNumber}
        {kidNumber > 1 ? " Children" : " Child"}
      </button>
      <div
        className={
          isDropdownOpen
            ? "dropdown-select-container open"
            : "dropdown-select-container"
        }
      >
        <div className="dropdown-close" onClick={dropdown}>
          <TfiClose />
        </div>
        <h5>Adults:</h5>
        <div className="control-container">
          <button type="button" onClick={minusAdult} className="control-btn">
            -
          </button>
          <input
            type="text"
            name="adultnumber"
            defaultValue={adultnumber}
            value={adultNumber}
            readOnly
            min="0"
            max="6"
            className="guest-stepper"
          />
          <button type="button" onClick={addAdult} className="control-btn">
            +
          </button>
        </div>

        <h5>Children:</h5>
        <div className="control-container">
          <button type="button" onClick={minusKid} className="control-btn">
            -
          </button>
          <input
            type="text"
            name="kidnumber"
            defaultValue={kidnumber}
            value={kidNumber}
            readOnly
            min="0"
            max="6"
            className="guest-stepper"
          />
          <button type="button" onClick={addKid} className="control-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default GuestCount;
