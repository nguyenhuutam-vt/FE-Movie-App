import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "styled-components";
import logo from "../assets/img/M logo 1.png";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const StyledStepOne = styled.div``;
const StyledStepTwo = styled.div`
  text-align: center;
`;
const StyledStepThree = styled.div`
.err {
  margin: 4px 0 0 0;
  font-size: 13px;
  color: #e64646;
}
`;
/////////////////////////////////////Line step/////////////////////////////////////////////
const StyledLineOne = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  width: 100%;
  margin-bottom: 10.2em;
  .one {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
  }
  .two {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
  }
  .three {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
  }
`;
const StyledLineTwo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  width: 100%;
  margin-bottom: 10.2em;
  .one {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
  }
  .two {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
  }
  .three {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
  }
`;
const StyledLineThree = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  width: 100%;
  margin-bottom: 5.45em;
  .one {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
  }
  .two {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
  }
  .three {
    height: 0.5em;
    width: 20%;
    border-radius: 0.5em;
  }
`;

const ForgotStepOne = () => {
  return (
    <StyledStepOne>
      <div className="headerLogo">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h5>Forgot Password?</h5>
        <p>No worries, we'll send you reset instructions.</p>
      </div>
      <label htmlFor="email">Email address</label>
      <div className="inputEmail">
        <input type="text" id="email" name="email" placeholder="Email" />
      </div>
    </StyledStepOne>
  );
};
// Forgot password step 2

const useSSNFields = () => {
  const [ssnValues, setValue] = useState({
    ssn1: "",
    ssn2: "",
    ssn3: "",
    ssn4: "",
  });

  return {
    handleChange: (e) => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");

      // Check if they hit the max character length
      if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < 4) {
          // Get the next input field
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
          );

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }

      setValue({
        ...value,
        [`ssn${fieldIndex}`]: value,
      });
    },
  };
};

const ForgotStepTwo = () => {
  const { handleChange } = useSSNFields();

  return (
    <StyledStepTwo>
      <div className="headerLogo">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h5>Password reset</h5>
        <p>We sent a code to yourmail@gmail.com</p>
      </div>

      <div className="inputCode">
        <input
          type="text"
          id="code"
          name="ssn-1"
          maxLength={1}
          onChange={handleChange}
        />
        <input
          type="text"
          id="code"
          name="ssn-2"
          maxLength={1}
          onChange={handleChange}
        />
        <input
          type="text"
          id="code"
          name="ssn-3"
          maxLength={1}
          onChange={handleChange}
        />
        <input
          type="text"
          id="code"
          name="ssn-4"
          maxLength={1}
          onChange={handleChange}
        />
      </div>
    </StyledStepTwo>
  );
};

const ForgotStepThree = () => {
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;

    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };
  return (
    <StyledStepThree>
      <div className="headerLogo">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h5>Set new password</h5>
        <p>Must be at least 8 characters.</p>
      </div>
      <div className="inputNewPassword">
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="**********"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.password && <span className="err">{error.password}</span>}
      </div>
      <div className="inputNewPassword">
        <label htmlFor="email">Comfirm password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="**********"
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}
        />
        {error.confirmPassword && <span className="err">{error.confirmPassword}</span>}
      </div>
    </StyledStepThree>
  );
};

const LineOne = () => {
  return (
    <StyledLineOne className="lineOne">
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </StyledLineOne>
  );
};
const LineTwo = () => {
  return (
    <StyledLineTwo className="lineTwo">
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </StyledLineTwo>
  );
};
const LineThree = () => {
  return (
    <StyledLineThree className="lineThree">
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </StyledLineThree>
  );
};


const StyledForgotLayout = styled.div`
  width: 80%;
  margin: 0 auto;
  .allStepDone{
    width: 50%;
    margin: 0 auto;
    margin-top: 10em;
    margin-bottom: 22.2em;
  }
`;
const steps = ["", "", ""];

const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  let navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  }

  return (
    <StyledForgotLayout>
      {/* step forgot */}
      <Box sx={{ width: "100%" }}>
        <div>
          {/* All completed */}
          {allStepsCompleted() ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                <div className="headerLogo">
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <h5>All done!</h5>
                  <p>Your password has been reset. Would you like to login now?</p>
                </div>
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }} className="allStepDone">
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={toLogin}>Go to Login</Button>
              </Box>
            </>
          ) : (
            // if not completed
            <>
              <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                <div className="formForgotPassword">
                  <form action="">
                    {activeStep == 0 ? (
                      <ForgotStepOne />
                    ) : activeStep == 1 ? (
                      <ForgotStepTwo />
                    ) : (
                      <ForgotStepThree />
                    )}
                    <Box sx={{ flex: "1 1 auto" }} />
                    <div className="btnfg">
                      {activeStep !== steps.length && (
                        <Button onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1
                            ? "Finish"
                            : "Continue"}
                        </Button>
                      )}
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </form>
                  {activeStep == 0 ? (
                    <LineOne />
                  ) : activeStep == 1 ? (
                    <LineTwo />
                  ) : (
                    <LineThree />
                  )}
                </div>
              </Typography>
            </>
          )}
        </div>
      </Box>
    </StyledForgotLayout>
  );
};

export default ForgotPassword;
