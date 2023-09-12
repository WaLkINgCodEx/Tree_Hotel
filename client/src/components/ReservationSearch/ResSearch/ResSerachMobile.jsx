import React from "react";
import { useState } from "react";
import { DateRangePicker } from "react-dates";
import "./style/resSearch.css";
import "react-dates/lib/css/_datepicker.css";
import "./style/react_dates_overrides.css";
import { Form } from "react-router-dom";
import { GoDash } from "react-icons/go";
import { PiCaretDownLight } from "react-icons/pi";

import GuestCount from "./GuestCount";
import SpecialRateDropdown from "./SpecialRateDropdown";
import ReservationStayInfo from "../ReservationStayInfo/ReservationStayInfo";
import { useReservationContext } from "../../../contexts/ReservationContext";

const ResSearchMobile = () => {
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
    adultNumber,
  } = useReservationContext();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showStayInfo, setShowStayInfo] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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

  return (
    <div className="res-search-wrapper">
      <Form>
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
                  onFocusChange={(focusedInput) =>
                    setFocusedInput(focusedInput)
                  }
                  displayFormat="yyyy-MM-DD"
                  noBorder
                  customArrowIcon={<GoDash />}
                  numberOfMonths={1}
                  withPortal
                  daySize={50}
                  keepOpenOnDateSelect
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
            <div className="bottom-guest-bar">
              <span>Guest:</span>

              <div className="guest-count-bar">
                <GuestCount />
              </div>

              <span className="guest-count-bar-end"></span>
            </div>
            <div className="special-rates-bar">
              <button
                type="button"
                onClick={toggleDropdown}
                className="special-rate-btn"
              >
                Special codes or rates <PiCaretDownLight />
              </button>
              <SpecialRateDropdown
                showDropdown={showDropdown}
                toggleDropdown={toggleDropdown}
              />
            </div>
            <br />
            <button type="sumbit" className="box-btn">
              Submit
            </button>
          </div>
          <div className="results-left">{/* <ReservationStepper /> */}</div>
        </div>
      </Form>

      {showStayInfo && (
        <div className="sm-stay-info">
          <ReservationStayInfo toggleStayInfo={toggleStayInfo} />
        </div>
      )}
    </div>
  );
};

export default ResSearchMobile;
