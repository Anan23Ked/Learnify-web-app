import { useState } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import ARLogo from '../assets/Icons/noun-ar-2300882.svg'


const steps = ["Level 1", "Level 2", "Level 3", "Level 4"];

// eslint-disable-next-line react/prop-types
const MultiLevelProgressBar = ({completedSteps = 0}) => {
  const [activeStep, setActiveStep] = useState(completedSteps);

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prevStep) => prevStep + 1);
  };

   return (
    <Box sx={{ width: "70%", textAlign: "center" }}>
      <Stepper alternativeLabel>
        {steps.map((label, index) => {
          let stepProps = {};
          let labelProps = {};

          if (index <= activeStep - 1) {
            // Steps before the one next to activeStep -> Completed (Green)
            stepProps.completed = true;
            labelProps.sx = { color: "green" };
          } else if (index === activeStep || index === activeStep + 1) {
            // Active step and the one next to it -> In Progress (Blue)
            labelProps.sx = { color: "blue" };
          } else {
            // Future steps -> Not Started (Gray)
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
        
        <Button variant="contained" onClick={handleNext}
        className="!bg-secondary !text-primaryBlue !hover:bg-primaryBlue !hover:text-white flex items-center justify-center gap-2">
          <img src={ARLogo} className="h-[24px] mt-1" />
          {activeStep === steps.length ? "Restart" : "Resume"}
        </Button>
      </Box>
    </Box>
  );
};

export default MultiLevelProgressBar;
