import { useState } from "react";
import moment from "moment";
import { createContext, useContext } from "react";

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const today = moment();
  const tomorrow = moment(today).add(1, "days");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [focusedInput, setFocusedInput] = useState();

  const [adultNumber, setAdultNumber] = useState(0);
  const [kidNumber, setKidNumber] = useState(0);

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

  const value = {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    focusedInput,
    setFocusedInput,
    adultNumber,
    setAdultNumber,
    kidNumber,
    setKidNumber,
    minusAdult,
    addAdult,
    minusKid,
    addKid,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);
