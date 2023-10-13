import React from "react";
import { useState, useEffect } from "react";
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

  // let { adultnumber, kidnumber } = searchValues;

  // const adultnumberToInt = Number(adultnumber);

  // useEffect(() => {
  //   if (!isNaN(adultnumber)) {
  //     setAdultNumber(adultnumberToInt);
  //   }
  // }, []);

  // const [number, newNumber] = useState(0);

  // const addNum = () => {
  //   if (number >= 0 && number < 6) {
  //     newNumber(number + 1);
  //   }
  // };

  // const minusNum = () => {
  //   if (number > 0) {
  //     newNumber(number - 1);
  //   }
  // };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="guest-count-button-area">
      <button type="button" className="guest-count-button" onClick={dropdown}>
        {adultNumber} {adultNumber > 1 ? " Adults" : " Adult"},{kidNumber}{" "}
        {kidNumber > 1 ? " Children" : " Child"}
      </button>
      <div
        className={
          isDropdownOpen
            ? "dropdown-select-container open"
            : "dropdown-select-container"
        }
      >
        <button type="button" className="dropdown-close" onClick={dropdown}>
          <TfiClose />
        </button>
        <h5>Adults:</h5>

        <div className="control-container">
          <button type="button" onClick={minusAdult} className="control-btn">
            -
          </button>
          <input
            className="guest-stepper"
            type="text"
            name="adultnumber"
            min="0"
            max="6"
            defaultValue={adultNumber}
            value={adultNumber}
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
            className="guest-stepper"
            type="text"
            name="kidnumber"
            min="0"
            max="6"
            defaultValue={kidNumber}
            value={kidNumber}
          />
          <button type="button" onClick={addKid} className="control-btn">
            +
          </button>
        </div>

        <div className="apply-btn">
          <button
            type="sumbit"
            className="box-btn submit-btn inverse-btn"
            // onClick={addAdult(adultNumber)}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default GuestCount;
