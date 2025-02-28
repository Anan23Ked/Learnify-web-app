import { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ARLogo from "../assets/Icons/noun-ar-white.svg";

const steps = ["Level 1", "Level 2", "Level 3", "Level 4"];

const MultiLevelProgressBar = ({ completedSteps = 0, ARLink = "#" }) => {
  const [activeStep, setActiveStep] = useState(completedSteps);
  const navigate = useNavigate();

  useEffect(() => {
    const returnTo = sessionStorage.getItem("returnTo");
    if (returnTo) {
      sessionStorage.removeItem("returnTo");
      navigate(returnTo, { replace: true }); // Use navigate instead of window.location.replace
    }
  }, [navigate]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prevStep) => prevStep + 1);

    if (ARLink && ARLink !== "#") {
      sessionStorage.setItem("returnTo", window.location.pathname);
      window.location.href = ARLink;
    }
  };

  return (
    <Box sx={{ width: "70%", textAlign: "center" }}>
      <Stepper alternativeLabel>
        {steps.map((label, index) => {
          let stepProps = {};
          let labelProps = {};

          if (index <= activeStep - 1) {
            stepProps.completed = true;
            labelProps.sx = { color: "green" };
          } else if (index === activeStep || index === activeStep + 1) {
            labelProps.sx = { color: "blue" };
          } else {
            labelProps.sx = { color: "gray" };
          }

          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          onClick={handleNext}
          className="!bg-secondary !text-white !hover:bg-primaryBlue !hover:text-white flex items-center justify-center gap-2"
        >
          <img src={ARLogo} className="h-[24px] mt-1" />
          {activeStep === steps.length ? "Restart" : "Resume"}
        </Button>
      </Box>
    </Box>
  );
};

export default MultiLevelProgressBar;
