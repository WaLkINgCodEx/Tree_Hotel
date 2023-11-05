import React from "react";
import { useState } from "react";
import { DateRangePicker } from "react-dates";
import { useMediaQuery } from "react-responsive";
import { GoDash } from "react-icons/go";
import { PiCaretDownLight } from "react-icons/pi";
import { SlUser } from "react-icons/sl";

import GuestCount from "./GuestCount";
import { GuestSubmit } from "./GuestSubmit";
import SpecialRateDropdown from "./SpecialRateDropdown";
import { useReservationContext } from "../../../contexts/ReservationContext";
import customFetch from "../../../utils/customFetch";
import "./style/resSearch.css";
import "react-dates/lib/css/_datepicker.css";
import "./style/react_dates_overrides.css";

const ResSearch = () => {
  const {
    focusedInput,
    setFocusedInput,
    setAdultNumber,
    setKidNumber,
    setStartDate,
    setEndDate,
    startDate,
    endDate,
    setFetchedData,
    setActiveStep,
  } = useReservationContext();

  const [localAdultNumber, setLocalAdultNumber] = useState(0);
  const [localKidNumber, setlocalKidNumber] = useState(0);
  const [isGuestSubmitOpen, setGuestSubmitOpen] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);

  const addLocalGuest = (e) => {
    console.log(e.target.name);

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
    console.log(e.target.name);

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

  const isBigScreen = useMediaQuery({
    query: "(min-width: 960px)",
  });

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
      {/* <div className="warning-area">
        {(data.rooms.length === 0 || adultNumber === 0) && (
          <ReservationWarning />
        )}
      </div> */}
      {isBigScreen && (
        <div className="lg-only">
          <div className="searching-area">
            <div className="lg-search-container">
              <div className="basic-search">
                <div
                  className="guest-number-container"
                  onClick={handleGuestCountClick}
                >
                  <div className="guest-number-frame">
                    <div className="guest-icon">
                      <SlUser />
                    </div>
                    <div className="guest-number">
                      <span className="search-title">Guests:</span>
                      <GuestCount
                        localAdultNumber={localAdultNumber}
                        localKidNumber={localKidNumber}
                      />
                    </div>
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
                </div>

                <div className="lg-date-range">
                  <span className="search-title">
                    Check-in & Check-out Date:
                  </span>
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
                    onFocusChange={(focusedInput) =>
                      setFocusedInput(focusedInput)
                    }
                    displayFormat="yyyy-MM-DD"
                    customArrowIcon={<GoDash />}
                    numberOfMonths={2}
                    withPortal
                    daySize={60}
                    // keepOpenOnDateSelect
                    renderCalendarInfo={renderCalendarInfo}
                  />
                </div>

                <div className="apply-btn">
                  <button
                    type="sumbit"
                    className="box-btn submit-btn inverse-btn"
                    onClick={handleSubmitClick}
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="additional-search">
                <button
                  type="button"
                  onClick={toggleDiscountMenu}
                  className="special-rate-btn lg-special-rate-btn"
                >
                  Special codes or rates <PiCaretDownLight />
                </button>
                <SpecialRateDropdown
                  showDiscount={showDiscount}
                  isBigScreen={isBigScreen}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ResSearch;
