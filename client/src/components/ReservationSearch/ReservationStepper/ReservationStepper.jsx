import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import { useState } from "react";
import ResSearch from "../ResSearch/ResSearch";
// import ResSearchMobile from "../ResSearch/ResSerachMobile";
// import ReservationStayInfo from "../ReservationStayInfo/ReservationStayInfo";
import SearchResults from "./SearchResults";
import ReservationGuest from "./ReservationGuest";
import { useReservationContext } from "../../../contexts/ReservationContext";
import "./style/reservationStepper.css";

const ReservationStepper = () => {
  const { reservationItems, activeStep, handleReset, handleNext, handleBack } =
    useReservationContext();

  const getSteps = () => {
    return ["Rooms", "Select", "Guest Details", "Confirmation"];
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <ResSearch />;

      case 1:
        return <SearchResults />;

      case 2:
        return <ReservationGuest />;

      case 3:
        return "Confirmed";

      default:
        return "Error occurred";
    }
  };

  const steps = getSteps();

  return (
    <div className="stepper-wrapper">
      {/* <ResSearchMobile /> */}

      <Box sx={{ width: "100%" }}>
        {activeStep < 1 && getStepContent(activeStep)}

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

        {activeStep >= 1 && getStepContent(activeStep)}

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
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {activeStep >= 2 && (
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  SELECT ROOM
                </Button>
              )}

              <Box sx={{ flex: "1 1 auto" }} />

              {activeStep >= 2 && (
                <Button
                  onClick={handleNext}
                  disabled={reservationItems.length < 1}
                >
                  {activeStep === steps.length - 1
                    ? "Finish"
                    : "COMPLETE BOOKING"}
                </Button>
              )}
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};

export default ReservationStepper;
