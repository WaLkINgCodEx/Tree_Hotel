import { useEffect, useState } from "react";
import moment from "moment";
import { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const today = moment();
  const tomorrow = moment(today).add(1, "days");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [focusedInput, setFocusedInput] = useState();

  const [reservationItems, setReservationItems] = useState([]);
  const [reservationTotal, setReservationTotal] = useState(0);
  const [adultNumber, setAdultNumber] = useState(0);
  const [kidNumber, setKidNumber] = useState(0);

  const { data, searchValues } = useLoaderData();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (event) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // event.preventDefault();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getTotalNights = () => {
    if (startDate && endDate) {
      return endDate.diff(startDate, "days");
    }
  };

  const getTotalGuests = () => {
    return adultNumber + kidNumber;
  };

  const minusAdult = () => {
    if (adultNumber > 0) {
      setAdultNumber(adultNumber - 1);
    }
  };

  const addAdult = () => {
    if (adultNumber >= 0 && adultNumber < 6) {
      setAdultNumber(adultNumber + 1);
      // console.log(adultNumber);
    }
  };

  const minusKid = () => {
    if (kidNumber > 0) {
      setKidNumber(kidNumber - 1);
    }
  };

  const addKid = () => {
    if (kidNumber >= 0 && kidNumber < 6) {
      setKidNumber(kidNumber + 1);
    }
  };

  const addReservationItem = (reservationToAdd, offer) => {
    return [
      ...reservationItems,
      {
        ...reservationToAdd,
        offer: offer,
        adult: adultNumber,
        kid: kidNumber,
        totalNights: getTotalNights(),
      },
    ];
  };

  const addItemToCart = (reservationToAdd, offer) => {
    setReservationItems(addReservationItem(reservationToAdd, offer));
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
    getTotalNights,
    getTotalGuests,
    reservationItems,
    addItemToCart,
    reservationTotal,
    setReservationTotal,
    data,
    searchValues,
    activeStep,
    setActiveStep,
    handleNext,
    handleBack,
    handleReset,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);

export const loader = async ({ request }) => {
  // const params = new URLSearchParams(request.url);

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const adultnumber = Number(params.adultnumber);
  const kidnumber = Number(params.kidnumber);
  const startdate = params.startdate;
  const enddate = params.enddate;

  console.log("params", params);
  console.log(adultnumber);

  if (adultnumber > 0) {
    try {
      const { data } = await customFetch.get("/rooms", {
        params: {
          adultnumber,
          kidnumber,
          startdate,
          enddate,
        },
      });
      console.log("data", data);
      return {
        data,
        searchValues: { adultnumber, kidnumber, startdate, enddate },
      };
    } catch (error) {
      return error;
    }
  } else {
    return {
      data: {},
      searchValues: { adultnumber, kidnumber, startdate, enddate },
    };
  }

  // const params = Object.fromEntries([
  //   ...new URL(request.url).searchParams.entries(),
  // ]);
  // console.log(params);
  // if (params.adultnumber > 0) {
  //   try {
  //     const { data } = await customFetch.get("/rooms", {
  //       params,
  //     });
  //     console.log(data);
  //     return { data, searchValues: { ...params } };
  //   } catch (error) {
  //     return error;
  //   }
  // } else {
  //   return { data: {}, searchValues: { ...params } };
  // }
};
