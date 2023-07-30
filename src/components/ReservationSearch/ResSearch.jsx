import React from "react";
import { useState } from "react";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";
import moment from "moment";
import { useMediaQuery } from "react-responsive";
import { GoDash } from "react-icons/go";
import { PiCaretDownLight } from "react-icons/pi";
import { SlUser } from "react-icons/sl";
import ReservationWarning from "../ReservationWarning";
import GuestCount from "../GuestCount";
import SpecialRateDropdown from "../SpecialRateDropdown";

const ResSearch = () => {
  const today = moment();
  const tomorrow = moment(today).add(1, "days");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(tomorrow);
  const [focusedInput, setFocusedInput] = useState();

  const [adultNumber, setAdultNumber] = useState(0);
  const [kidNumber, setKidNumber] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

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

  return (
    <div className="res-search-wrapper">
      <div className="res-search-bar small-size-only">
        <div className="top-stay-bar">
          Your Stay:
          <div className="date-range">
            <DateRangePicker
              startDate={startDate}
              startDateId="start-date"
              endDate={endDate}
              endDateId="end-date"
              onDatesChange={({ startDate, endDate }) => {
                setStartDate(startDate);
                setEndDate(endDate);
              }}
              focusedInput={focusedInput}
              onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
              displayFormat="ddd, MMM D, YYYY"
              noBorder
              customArrowIcon={<GoDash />}
              numberOfMonths={1}
              withPortal
              daySize={50}
              keepOpenOnDateSelect
              renderCalendarInfo={renderCalendarInfo}
            />
          </div>
          <div className="stay-info">
            CA 0.00 <PiCaretDownLight />
          </div>
        </div>
        <div className="bottom-guest-bar">
          Guest:
          <div className="guest-count-bar">
            <GuestCount
              adultNumber={adultNumber}
              setAdultNumber={setAdultNumber}
              kidNumber={kidNumber}
              setKidNumber={setKidNumber}
            />
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
      </div>

      <div className="warning-area">
        <ReservationWarning />
        {isBigScreen && (
          <div className="lg-only">
            <div className="lg-search-container">
              <div className="guest-number">
                <SlUser /> <span className="search-title">Guest:</span>
                <GuestCount
                  adultNumber={adultNumber}
                  setAdultNumber={setAdultNumber}
                  kidNumber={kidNumber}
                  setKidNumber={setKidNumber}
                />
              </div>
              <div className="lg-date-range">
                <span className="search-title">Check-in & Check-out Date:</span>
                <DateRangePicker
                  startDate={startDate}
                  startDateId="start-date"
                  endDate={endDate}
                  endDateId="end-date"
                  onDatesChange={({ startDate, endDate }) => {
                    setStartDate(startDate);
                    setEndDate(endDate);
                  }}
                  focusedInput={focusedInput}
                  onFocusChange={(focusedInput) =>
                    setFocusedInput(focusedInput)
                  }
                  displayFormat="ddd, MMM D, YYYY"
                  noBorder
                  customArrowIcon={<GoDash />}
                  numberOfMonths={2}
                  withPortal
                  daySize={60}
                  keepOpenOnDateSelect
                  renderCalendarInfo={renderCalendarInfo}
                />
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
        )}
      </div>
    </div>
  );
};
export default ResSearch;
