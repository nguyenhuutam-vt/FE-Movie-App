import React, { useState } from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import MenuIcon from "@mui/icons-material/Menu";
import logo1 from "../assets/img/M logo 1.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import { Input } from "@mui/joy";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { fecthChannel } from "../Container/Search/ApiSearch";
import Search from "./Search/Search";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Logout from "./Logout";
import Account from "./Account";
import Bars from "../Component/icon/Bars";
const Navbar = () => {
  const Container = styled.div`
    width: 100%;
    height: 45px;
    background-color: #190401;
    color: white;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    position: fixed;
    z-index: 999;
    ${mobile({
      display: "grid",
      rowGap: "20px",
      padding: "0px 0px",
      height: "50%",
      width: "0%",
      float: "left",
      position: "absolute",
    })};
  `;
  const Nav = styled.div`
    display: flex;
    width: 70%;
    justify-content: center;
    ${mobile({
      height: "100%",
      display: "block",
      rowGap: "25px",
      position: "relative",
      width: "20%",
      transform: "translate(10px, -50px)",
    })};
  `;
  const About = styled.div`
    height: 25px;
    width: 110px;
    text-align: center;

    color: white;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(to right, black, red) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
    ${mobile({
      background: "none",
      textAlign: "inherit",
      transform: "translate(10px, 115px)",
    })};
  `;
  const Img = styled.div`
    margin-top: -15px;
    ${mobile({
      height: "50px",
      position: "absolute",

      left: "30px",
    })};
  `;
  const Entrance = styled.div`
    display: flex;
    justify-content: end;
    width: 15%;
    ${mobile({
      display: "block",
      position: "absolute",
      transform: "translate(20px, 180px)",
      padding: "0px 0px",
    })};
  `;
  const SignIn = styled.div`
    color: white;
    height: 25px;
    width: 80px;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(to right, black, red) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
    ${mobile({ background: "none" })};
  `;
  const SignUp = styled.div`
    color: white;
    height: 25px;
    width: 80px;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(to right, black, red) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
    ${mobile({ background: "none" })};
  `;
  const Menu = styled.div`
    width: 15%;
    ${mobile({ display: "none" })};
  `;
  const Logoutt = styled.div`
    color: white;
    height: 25px;
    width: 80px;
    background: linear-gradient(black, black) padding-box,
      linear-gradient(to right, black, red) border-box;
    border-radius: 50em;
    border: 2px solid transparent;
    text-align: center;
  `;
  const auth = useSelector((item) => item.auth.isAuthenticated);
  console.log("auth", auth.isAuthenticated);
  function logout() {
    localStorage?.removeItem("access_token");
  }
  return (
    <Container>
      <Menu>
        <Bars />
      </Menu>
      <Nav>
        <NavLink to="/about">
          <About>ABOUT</About>
        </NavLink>
        <NavLink to="/movies">
          <About>MOVIES</About>
        </NavLink>
        <NavLink to="/">
          <Img>
            {" "}
            <img src={logo1} alt="" />
          </Img>
        </NavLink>

        <NavLink to="/series">
          <About>SERIES</About>
        </NavLink>

        <NavLink to="/upcoming">
          <About>UPCOMING</About>
        </NavLink>
      </Nav>
      {/* <Search /> */}
      {auth.isAuthenticated === false ? (
        <Entrance>
          <Search />

          <div>
            <NavLink to="/login">
              {" "}
              <SignIn>SIGN IN</SignIn>
            </NavLink>
          </div>
          <div>
            <NavLink to="/signup">
              <SignUp>SIGN UP</SignUp>
            </NavLink>
          </div>
        </Entrance>
      ) : (
        <Entrance>
          <Search />
          {/* <button
            style={{
              backgroundColor: "transparent",
              border: "red",
              cursor: "pointer",
              marginTop: "-10px",
            }}
            onClick={() => {
              logout();
            }}
          >
            {" "}
            <NavLink to="/login">
              <Logoutt>Logout</Logoutt>
            </NavLink>
          </button> */}
          <div style={{ marginTop: "-30px" }}>
            <Account />
          </div>
        </Entrance>
      )}
    </Container>
  );
};

export default Navbar;
