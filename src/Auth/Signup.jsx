import { styled } from "styled-components";
import logo from "../assets/img/M logo 1.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const StyledSignup = styled.div`
  .err {
    margin: 4px 0 0 0;
    font-size: 13px;
    color: #e64646;
  }
`;

const Signup = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    billing_plan_id: 0,
    full_name: "",
    address: "",
    phone_number: "",
    avatar: "",
    dateOfBirth: "",
  });

  const [error, setError] = useState({
    fullName: "",
    email: "",
    password: "",
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
        case "fullName":
          if (!value) {
            stateObj[name] = "Please enter Name.";
          }
          break;
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          }
          break;

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
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
        default:
          break;
      }
      return stateObj;
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSummit = (e) => {
    e.preventDefault();
    dispatch.auth
      .sigup(input)
      .then((res) => {
        dispatch.auth.setAuth(true);
        toast.success("Successfully Created Account");
      })
      .catch((err) => {
        toast.error("Error");
      });
  };
  return (
    <StyledSignup>
      <ToastContainer />
      <div className="headerLogo">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h5>Register</h5>
      </div>
      <div className="formSignup">
        <form action="" onSubmit={handleSummit}>
          <div className="inputSignup">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Full Name"
              value={input.username}
              onChange={onInputChange}
              onBlur={validateInput}
            />
          </div>
          {error.username && <span className="err">{error.username}</span>}
          <div className="inputSignup">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={input.email}
              onChange={onInputChange}
              onBlur={validateInput}
            />
          </div>
          {error.email && <span className="err">{error.email}</span>}
          <div className="inputSignup">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={onInputChange}
              onBlur={validateInput}
            />
          </div>
          {error.password && <span className="err">{error.password}</span>}
          {/* <div className="inputSignup">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Comfirm password"
              value={input.confirmPassword}
              onChange={onInputChange}
              onBlur={validateInput}
            />
          </div>
          {error.confirmPassword && (
            <span className="err">{error.confirmPassword}</span>
          )} */}
          <div className="btnSignupPage">
            <div className="signupPage">
              <button type="submit">Create account</button>
              <p>
                By clicking “Create Account” you agree to our <b>terms</b> and{" "}
                <b>privacy policy.</b>
              </p>
            </div>
          </div>
        </form>
      </div>
    </StyledSignup>
  );
};

export default Signup;
