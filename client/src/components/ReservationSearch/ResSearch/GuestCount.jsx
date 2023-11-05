import React from "react";
import { useState } from "react";

const GuestCount = ({ localAdultNumber, localKidNumber }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="guest-count-button-area">
      <button type="button" className="guest-count-button" onClick={dropdown}>
        {localAdultNumber} {localAdultNumber > 1 ? " Adults" : " Adult"},{" "}
        {localKidNumber} {localKidNumber > 1 ? " Children" : " Child"}
      </button>
    </div>
  );
};
export default GuestCount;
