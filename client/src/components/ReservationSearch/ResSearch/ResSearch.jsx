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
    adultNumber,
  } = useReservationContext();

  const { adultnumber, kidnumber } = searchValues;

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

  const toggleStayInfo = () => {
    setShowStayInfo(!showStayInfo);
  };

  return (
    <div className="res-search-wrapper">
      {/* <Form>
        <div className="small-size-only">
          <div className="res-search-bar ">
            <div className="top-stay-bar">
              Your Stay:
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
              Guest:
              <div className="guest-count-bar">
                <GuestCount />
              </div>
              <div className="guest-count-bar-end"></div>
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
          <div className="results-left"><ReservationStepper /></div>
        </div>
      </Form> */}

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
                {/* <div className="results-left">
                  <ReservationStepper />
                </div> */}
              </div>
              {/* <div className="results-right">
                <ReservationStayInfo />
              </div> */}
            </div>
          </div>
        )}
      </Form>
      {/* {showStayInfo && (
        <div className="sm-stay-info">
          <ReservationStayInfo toggleStayInfo={toggleStayInfo} />
        </div>
      )} */}
    </div>
  );
};
export default ResSearch;
