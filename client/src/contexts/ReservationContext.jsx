import { useState } from "react";
import moment from "moment";
import { createContext, useContext } from "react";
import { pricing } from "../data";
import { useLoaderData } from "react-router-dom";

const ReservationContext = createContext();

export const loader = async ({ request }) => {
  let adultnumber = 0;

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  if (params.adultnumber) {
    adultnumber = Number(params.adultnumber);
  }
  const kidnumber = Number(params.kidnumber);
  const startdate = params.startdate;
  const enddate = params.enddate;

  return {
    searchValues: { adultnumber, kidnumber, startdate, enddate },
  };
};

export const ReservationProvider = ({ children }) => {
  const today = moment();
  const tomorrow = moment(today).add(1, "days");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [focusedInput, setFocusedInput] = useState();
  const [currentBookingID, setCurrentBookingID] = useState(0);
  const [reservationItems, setReservationItems] = useState([]);
  const [chargeList, setchargeList] = useState([]);
  const [adultNumber, setAdultNumber] = useState(0);
  const [kidNumber, setKidNumber] = useState(0);
  const { searchValues } = useLoaderData();
  const [fetchedData, setFetchedData] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    // console.log(activeStep);
    if (activeStep === 0) {
      setActiveStep(1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
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

  const addReservationItem = (reservationToAdd, offer, currentBookingID) => {
    return [
      ...reservationItems,
      {
        ...reservationToAdd,
        offer: offer,
        adult: adultNumber,
        kid: kidNumber,
        checkInDate: startDate,
        checkOutDate: endDate,
        totalNights: getTotalNights(),
        bookingID: currentBookingID,
      },
    ];
  };

  const addChargeList = (reservationToAdd, roomCharge, currentBookingID) => {
    const govTax = roomCharge * pricing.govTax;
    const provTax = roomCharge * pricing.provTax;
    const serviceCharge = roomCharge * pricing.serviceCharge;
    const subCharge = (govTax + provTax + serviceCharge).toFixed(2);

    const totalCharge = (Number(roomCharge) + Number(subCharge)).toFixed(2);

    return [
      ...chargeList,
      {
        bookingID: currentBookingID,
        roomID: reservationToAdd._id,
        price: totalCharge,
      },
    ];
  };

  const totalCharge = chargeList.reduce((accumulator, order) => {
    return accumulator + parseFloat(order.price);
  }, 0);

  const addItemToCart = (reservationToAdd, offer, roomCharge) => {
    setCurrentBookingID((prevID) => prevID + 1);

    setReservationItems(
      addReservationItem(reservationToAdd, offer, currentBookingID)
    );
    setchargeList(
      addChargeList(reservationToAdd, roomCharge, currentBookingID)
    );
  };

  const removeOrder = (bookingID, roomID) => {
    const hasBookingID = reservationItems.some(
      (reser) => reser.bookingID === bookingID
    );

    if (hasBookingID) {
      console.log("Order exists!");

      const undatedReservationItems = reservationItems.filter(
        (reservation) =>
          !(
            (reservation.bookingID === bookingID) &
            (reservation._id === roomID)
          )
      );

      const updatedChargeList = chargeList.filter(
        (chargeOrder) =>
          !(
            (chargeOrder.bookingID === bookingID) &
            (chargeOrder.roomID === roomID)
          )
      );

      setReservationItems(undatedReservationItems);
      setchargeList(updatedChargeList);
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
    getTotalNights,
    getTotalGuests,
    reservationItems,
    addItemToCart,
    chargeList,
    removeOrder,
    totalCharge,
    searchValues,
    activeStep,
    setActiveStep,
    handleNext,
    handleBack,
    handleReset,
    fetchedData,
    setFetchedData,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);
