import {
  FormControl,
  TextField,
  Box,
  Select,
  MenuItem,
  InputLabel,
  Autocomplete,
  FormHelperText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { useState } from "react";
import { countryRegion, time } from "../../../data";
import { AiOutlineCaretDown } from "react-icons/ai";
import ReservationPolicy from "./ReservationPolicy";
import ReservationAcknow from "./ReservationAcknow";

const ReservationGuest = () => {
  const [prefix, setPrefix] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [specialReq, setSpecialReq] = useState("");

  const handleChangePrefix = (event) => {
    setPrefix(event.target.value);
  };

  const handleChangeArrival = (event) => {
    setArrivalTime(event.target.value);
  };

  const handleChangeDeparture = (event) => {
    setDepartureTime(event.target.value);
  };

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <div className="guest-details-wrapper">
      <div className="guest-details-container">
        <Box component="form">
          <h2>Contact Details</h2>
          <div className="cus-name">
            <div className="prefix-last">
              <FormControl
                variant="filled"
                // fullWidth
                sx={{
                  mb: { xs: 2 },
                  width: "26%",
                  "& .MuiFilledInput-root": {
                    borderRadius: 0,
                  },
                }}
              >
                <InputLabel id="demo-simple-select-label">Prefix</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={prefix}
                  label="Prefix"
                  onChange={handleChangePrefix}
                  required
                  error={prefix === ""}
                  helperText={prefix === "" && `Please Provide ${prefix}`}
                >
                  <MenuItem value="" disabled></MenuItem>
                  <MenuItem value="dr">Dr.</MenuItem>
                  <MenuItem value="miss">Miss.</MenuItem>
                  <MenuItem value="mr">Mr.</MenuItem>
                  <MenuItem value="mrs">Mrs.</MenuItem>
                  <MenuItem value="ms">Ms.</MenuItem>
                  <MenuItem value="pr">Pr.</MenuItem>
                  <MenuItem value="prof">Prof.</MenuItem>
                  <MenuItem value="rev">Rev.</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className="first-name"
                sx={{
                  // mr: { xs: 0, md: 2 },
                  mb: 2,
                  width: { xs: "100%" },
                  "& .MuiFilledInput-root": {
                    borderRadius: 0,
                  },
                }}
                id="filled-textarea"
                label="First Name"
                placeholder=""
                variant="filled"
                required
                value={firstName}
                error={firstName === ""}
                helperText={
                  firstName === "" && `Please Provide Your First Name`
                }
                onChange={handleChangeFirstName}
              />
            </div>
            <FormControl className="last-name" sx={{ width: { xs: "100%" } }}>
              <TextField
                sx={{
                  mb: 2,
                  width: { xs: "100%" },
                  "& .MuiFilledInput-root": {
                    borderRadius: 0,
                  },
                }}
                id="filled-textarea"
                label="Last Name"
                placeholder=""
                variant="filled"
                required
              />
            </FormControl>
          </div>
          <div className="contact">
            <FormControl className="tel-number" sx={{ width: { xs: "100%" } }}>
              <TextField
                sx={{
                  mb: 2,
                  width: { xs: "100%" },
                  mr: 2,
                  "& .MuiFilledInput-root": {
                    borderRadius: 0,
                  },
                }}
                id="filled-textarea"
                label="Phone"
                placeholder=""
                variant="filled"
                required
              />
            </FormControl>
            <FormControl className="email" sx={{ width: { xs: "100%" } }}>
              <TextField
                sx={{
                  width: { xs: "100%" },
                  "& .MuiFilledInput-root": {
                    borderRadius: 0,
                  },
                }}
                id="filled-textarea"
                label="Email Address"
                placeholder=""
                variant="filled"
                required
              />
              <FormHelperText id="email-helper-text">
                This is the email we will send your confirmation to.
              </FormHelperText>
            </FormControl>
          </div>

          <h2>Address</h2>
          <div className="address">
            <FormControl
              className="country"
              sx={{
                width: { xs: "100%" },
                "& .MuiFilledInput-root": {
                  borderRadius: 0,
                },
              }}
            >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={countryRegion}
                sx={{ mb: 2 }}
                renderInput={(params) => (
                  <TextField
                    variant="filled"
                    {...params}
                    label="Country/Region"
                    required
                  />
                )}
              />
            </FormControl>
            <FormControl
              className="postal"
              sx={{
                width: { xs: "100%" },
              }}
            >
              <TextField
                sx={{
                  mb: 2,
                  width: { xs: "100%" },
                  "& .MuiFilledInput-root": {
                    borderRadius: 0,
                  },
                }}
                id="filled-textarea"
                label="Zip/Postal Code"
                placeholder=""
                variant="filled"
              />
            </FormControl>
          </div>
          <br />
          <hr />
          <h2>Special Requests</h2>
          <FormControl fullWidth className="special-request">
            <TextField
              className="textbox"
              fullWidth
              sx={{
                mb: 4,
                "& .MuiFilledInput-root": {
                  borderRadius: 0,
                },
              }}
              multiline
              rows={3}
              id="filled-textarea"
              label="Special Request/ Habitat Code/ Accor Live Limitless Card Number/ Ultimate Getaway Gift Code to be entered here"
              placeholder=""
              variant="filled"
            />
          </FormControl>
          <div id="transportaion-box">
            <Accordion className="transportation">
              <AccordionSummary
                expandIcon={<AiOutlineCaretDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h5>Transportation (Optional)</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  This information is to estimate your arrival and departure
                  time, this is not a confirmation for roundtrip transfer from
                  the airport. If you wish to book your transfers, please
                  contact the hotel directly.
                </p>
                <br />
                <div className="transport-accordion-input">
                  <FormControl
                    className="arrival-time"
                    variant="filled"
                    fullWidth
                    sx={{
                      mb: { xs: 2, md: "initial" },
                      mr: { md: 2 },
                      "& .MuiFilledInput-root": {
                        borderRadius: 0,
                      },
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Estimated Arrival Time
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={arrivalTime}
                      label="Arrival"
                      onChange={handleChangeArrival}
                    >
                      <MenuItem value=""></MenuItem>
                      {time.map((time) => {
                        return (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>

                  <FormControl
                    className="departure-time"
                    variant="filled"
                    fullWidth
                    sx={{
                      mb: { xs: 2, md: "initial" },
                      "& .MuiFilledInput-root": {
                        borderRadius: 0,
                      },
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Estimated Departure Time
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={departureTime}
                      label="Departure"
                      onChange={handleChangeDeparture}
                    >
                      <MenuItem value=""></MenuItem>
                      {time.map((time) => {
                        return (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <br />
          <hr />
          <h2>Payment Information</h2>
        </Box>
      </div>
      <div className="res-policy-wrapper">
        <ReservationPolicy />
      </div>
      <div className="res-policy-wrapper">
        <ReservationAcknow />
      </div>
    </div>
  );
};
export default ReservationGuest;
