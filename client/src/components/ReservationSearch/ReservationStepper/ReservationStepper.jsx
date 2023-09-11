import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import SearchResults from "./SearchResults";
import ReservationGuest from "./ReservationGuest";
import { useReservationContext } from "../../../contexts/ReservationContext";
import "./style/reservationStepper.css";

const ReservationStepper = () => {
  const { reservationItems, activeStep, handleReset, handleNext, handleBack } =
    useReservationContext();

  const getSteps = () => {
    return ["Rooms", "Guest Details", "Confirmation"];
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <SearchResults handleNext={handleNext} />;
      case 1:
        return <ReservationGuest />;
      case 2:
        return "Confirmed";
      default:
        return "Error occurred";
    }
  };
  const steps = getSteps();

  return (
    <div className="stepper-wrapper">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} className="stepper-bar">
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                onClick={handleNext}
                disabled={reservationItems.length < 1}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};

export default ReservationStepper;
