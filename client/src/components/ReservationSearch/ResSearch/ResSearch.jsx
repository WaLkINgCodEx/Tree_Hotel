import React from "react";
import { useState } from "react";
import { DateRangePicker } from "react-dates";
import "./style/resSearch.css";
import "react-dates/lib/css/_datepicker.css";
import "./style/react_dates_overrides.css";
import { useMediaQuery } from "react-responsive";
import { Form } from "react-router-dom";
import { GoDash } from "react-icons/go";
import { PiCaretDownLight } from "react-icons/pi";
import { SlUser } from "react-icons/sl";

import ReservationWarning from "./ReservationWarning";
import GuestCount from "./GuestCount";
import SpecialRateDropdown from "./SpecialRateDropdown";
import ReservationStayInfo from "../ReservationStayInfo/ReservationStayInfo";
import { useReservationContext } from "../../../contexts/ReservationContext";
import ReservationStepper from "../ReservationStepper/ReservationStepper";

const ResSearch = () => {
  const {
    setStartDate,
    setEndDate,
    focusedInput,
    setFocusedInput,
    startDate,
    endDate,
    searchValues,
    data,
    reservationTotal,
    handleNext,
    adultNumber,
  } = useReservationContext();

  // const { adultnumber, kidnumber } = searchValues;

  const [showDropdown, setShowDropdown] = useState(false);
  const [showStayInfo, setShowStayInfo] = useState(false);

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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // const toggleStayInfo = () => {
  //   setShowStayInfo(!showStayInfo);
  // };

  const handleSubmit = (event) => {
    if (adultNumber > 0) {
      handleNext();
      event.preventDefault();
    }
  };

  return (
    <div className="res-search-wrapper">
      <Form>
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
                  <div className="guest-number">
                    <SlUser /> <span className="search-title">Guest:</span>
                    <GuestCount />
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
                      noBorder
                      customArrowIcon={<GoDash />}
                      numberOfMonths={2}
                      withPortal
                      daySize={60}
                      keepOpenOnDateSelect
                      renderCalendarInfo={renderCalendarInfo}
                    />
                  </div>
                  <div className="apply-btn">
                    <button
                      type="sumbit"
                      className="box-btn submit-btn inverse-btn"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="additional-search">
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="special-rate-btn lg-special-rate-btn"
                  >
                    Special codes or rates <PiCaretDownLight />
                  </button>
                  <SpecialRateDropdown
                    showDropdown={showDropdown}
                    toggleDropdown={toggleDropdown}
                    isBigScreen={isBigScreen}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
};
export default ResSearch;
