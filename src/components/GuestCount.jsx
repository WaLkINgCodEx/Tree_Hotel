import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
const GuestCount = ({
  adultNumber,
  setAdultNumber,
  kidNumber,
  setKidNumber,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const minusAdult = () => {
    if (adultNumber > 0) {
      setAdultNumber(adultNumber - 1);
    }
  };

  const addAdult = () => {
    if (adultNumber >= 0 && adultNumber < 10) {
      setAdultNumber(adultNumber + 1);
    }
  };

  const minusKid = () => {
    if (kidNumber > 0) {
      setKidNumber(kidNumber - 1);
    }
  };

  const addKid = () => {
    if (kidNumber >= 0 && kidNumber < 10) {
      setKidNumber(kidNumber + 1);
    }
  };

  const dropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="guest-count-button-area">
      <button className="guest-count-button" onClick={dropdown}>
        {adultNumber} Adults, {kidNumber} Children
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
          {adultNumber}
          <button type="button" onClick={addAdult} className="control-btn">
            +
          </button>
        </div>

        <h5>Children:</h5>
        <div className="control-container">
          <button type="button" onClick={minusKid} className="control-btn">
            -
          </button>
          {kidNumber}
          <button type="button" onClick={addKid} className="control-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default GuestCount;
