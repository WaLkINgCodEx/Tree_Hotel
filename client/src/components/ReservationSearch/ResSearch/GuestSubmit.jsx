import React from "react";
import { TfiClose } from "react-icons/tfi";

export const GuestSubmit = ({
  isGuestSubmitOpen,
  localAdultNumber,
  localKidNumber,
  addLocalGuest,
  subtractLocalGuest,
  handleGuestsApply,
  handleGuestClose,
}) => {
  return (
    <div
      className={
        isGuestSubmitOpen
          ? "dropdown-select-container open"
          : "dropdown-select-container"
      }
    >
      <button
        type="button"
        className="dropdown-close"
        onClick={handleGuestClose}
      >
        <TfiClose />
      </button>
      <h5>Adults:</h5>

      <div className="control-container">
        <button
          type="button"
          name="adult"
          onClick={subtractLocalGuest}
          className="control-btn"
        >
          -
        </button>

        <input
          className="guest-stepper"
          type="text"
          name="adultnumber"
          min="0"
          max="6"
          value={localAdultNumber}
          readOnly
        />
        <button
          type="button"
          name="adult"
          onClick={addLocalGuest}
          className="control-btn"
        >
          +
        </button>
      </div>

      <h5>Children:</h5>

      <div className="control-container">
        <button
          type="button"
          name="child"
          onClick={subtractLocalGuest}
          className="control-btn"
        >
          -
        </button>
        <input
          className="guest-stepper"
          type="text"
          name="kidnumber"
          min="0"
          max="6"
          value={localKidNumber}
          readOnly
        />
        <button
          type="button"
          name="child"
          onClick={addLocalGuest}
          className="control-btn"
        >
          +
        </button>
      </div>

      <div className="apply-btn">
        <button
          type="sumbit"
          className="box-btn submit-btn inverse-btn"
          onClick={handleGuestsApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default GuestSubmit;
