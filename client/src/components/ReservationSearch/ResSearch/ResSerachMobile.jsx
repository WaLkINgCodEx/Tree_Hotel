import React from "react";
import { useState } from "react";
import { DateRangePicker } from "react-dates";
import { GoDash } from "react-icons/go";
import { PiCaretDownLight } from "react-icons/pi";

import { useReservationContext } from "../../../contexts/ReservationContext";
import GuestCount from "./GuestCount";
import GuestSubmit from "./GuestSubmit";
import customFetch from "../../../utils/customFetch";
import SpecialRateDropdown from "./SpecialRateDropdown";
import ReservationStayInfo from "../ReservationStayInfo/ReservationStayInfo";
import "./style/resSearch.css";
import "react-dates/lib/css/_datepicker.css";
import "./style/react_dates_overrides.css";

const ResSearchMobile = () => {
  const {
    setStartDate,
    setEndDate,
    focusedInput,
    setFocusedInput,
    startDate,
    endDate,
    reservationTotal,
    setAdultNumber,
    setKidNumber,
    setFetchedData,
    setActiveStep,
  } = useReservationContext();

  const [localAdultNumber, setLocalAdultNumber] = useState(0);
  const [localKidNumber, setlocalKidNumber] = useState(0);
  const [isGuestSubmitOpen, setGuestSubmitOpen] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [showStayInfo, setShowStayInfo] = useState(false);

  const addLocalGuest = (e) => {
    // console.log(e.target.name);

    if (e.target.name === "adult") {
      if (localAdultNumber >= 0 && localAdultNumber < 6) {
        setLocalAdultNumber(localAdultNumber + 1);
      }
    } else {
      if (localKidNumber >= 0 && localKidNumber < 6) {
        setlocalKidNumber(localKidNumber + 1);
      }
    }
  };

  const subtractLocalGuest = (e) => {
    // console.log(e.target.name);

    if (e.target.name === "adult") {
      if (localAdultNumber > 0) {
        setLocalAdultNumber(localAdultNumber - 1);
      }
    } else {
      if (localKidNumber > 0) {
        setlocalKidNumber(localKidNumber - 1);
      }
    }
  };

  const handleGuestCountClick = () => {
    if (!isGuestSubmitOpen) {
      setGuestSubmitOpen(!isGuestSubmitOpen);
    }
  };

  const handleGuestsApply = () => {
    handleGuestClose();
  };

  const handleGuestClose = () => {
    setGuestSubmitOpen(!isGuestSubmitOpen);
  };

  const toggleDiscountMenu = () => {
    setShowDiscount(!showDiscount);
  };

  const toggleStayInfo = () => {
    setShowStayInfo(!showStayInfo);
  };

  const renderCalendarInfo = () => {
    return (
      <div>
        <span className="no-check-in">
          <div className="check-key1"></div>
          <span className="checkinout-info">No Check-in</span>
          <div className="check-key2"></div>
          <span className="checkinout-info">No Check-out</span>
        </span>
      </div>
    );
  };

  const handleSubmitClick = async () => {
    const params = {
      adultnumber: localAdultNumber,
      kidnumber: localKidNumber,
      startdate: startDate,
      enddate: endDate,
    };

    try {
      const { data } = await customFetch.get("/rooms", { params });

      setAdultNumber(params.adultnumber);
      setKidNumber(params.kidnumber);
      setStartDate(params.startdate);
      setEndDate(params.enddate);

      // Set the fetched data in the context
      setFetchedData(data);

      setActiveStep(1);

      // Handle other data as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="res-search-wrapper">
      <div className="small-size-only">
        <div className="res-search-bar ">
          <div className="top-stay-bar">
            <span> Your Stay:</span>

            <div className="date-range">
              <DateRangePicker
                startDate={startDate}
                startDateId="startdate"
                endDate={endDate}
                endDateId="enddate"
                onDatesChange={({ startDate, endDate }) => {
                  setStartDate(startDate);
                  setEndDate(endDate);
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                displayFormat="yyyy-MM-DD"
                customArrowIcon={<GoDash />}
                numberOfMonths={1}
                withPortal
                daySize={50}
                // keepOpenOnDateSelect
                renderCalendarInfo={renderCalendarInfo}
              />
            </div>

            <button
              type="button"
              className="res-search-bar-btn"
              onClick={toggleStayInfo}
            >
              <div className="stay-info">
                CA ${reservationTotal} <PiCaretDownLight />
              </div>
            </button>
          </div>
          <div className="bottom-guest-bar" onClick={handleGuestCountClick}>
            <span>Guests:</span>

            <div className="guest-count-bar">
              <GuestCount
                localAdultNumber={localAdultNumber}
                localKidNumber={localKidNumber}
              />
            </div>

            <GuestSubmit
              isGuestSubmitOpen={isGuestSubmitOpen}
              localAdultNumber={localAdultNumber}
              localKidNumber={localKidNumber}
              addLocalGuest={addLocalGuest}
              subtractLocalGuest={subtractLocalGuest}
              handleGuestsApply={handleGuestsApply}
              handleGuestClose={handleGuestClose}
            />

            <span className="guest-count-bar-end"></span>
          </div>
          <div className="special-rates-bar">
            <button
              type="button"
              onClick={toggleDiscountMenu}
              className="special-rate-btn"
            >
              Special codes or rates <PiCaretDownLight />
            </button>
            <SpecialRateDropdown
              showDiscount={showDiscount}
              toggleDiscountMenu={toggleDiscountMenu}
            />
          </div>
          <br />
          <button type="sumbit" className="box-btn" onClick={handleSubmitClick}>
            Submit
          </button>
        </div>
        <div className="results-left"></div>
      </div>

      {showStayInfo && (
        <div className="sm-stay-info">
          <ReservationStayInfo toggleStayInfo={toggleStayInfo} />
        </div>
      )}
    </div>
  );
};

export default ResSearchMobile;
