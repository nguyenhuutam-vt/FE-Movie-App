import React, { useState } from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
// import MenuIcon from "@mui/icons-material/Menu";
import Bars from "../Component/icon/Bars";
import logo1 from "../assets/img/M logo 1.png";
import ImgLogin from "../assets/img/ACCOUNT 1.png";
import Account from "./Account";
import { NavLink } from "react-router-dom";

const NavbarDetail = ({ ImgLogin }) => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    color: white;
    background-color: #1b0301;
    justify-content: space-between;
    position: fixed;
    .icon2 {
      width: 20px;
      height: 20px;
    }
    ${mobile({ paddingTop: "5px" })}.account {
      width: 50px;
      height: 50px;
      display: none;
      ${mobile({
        display: "flex",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        border: "#1b0301 solid 5px",
        overflow: "hidden",
        justifyContent: "center",
        cursor: "pointer",
        backgroundColor: "#1b0301",
      })}
    }
  `;
  const [showAnalog, setShowAnalog] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(!showOptions);
    setShowAnalog(true);
  };

  const handleMouseLeave = () => {
    setShowAnalog(false);
  };
  const Avatar = styled.div``;

  const Img = styled.img`
    /* margin-top: -15px; */
    ${mobile({ display: "flex", width: "25px", Height: "25px" })}
  `;
  const Entrance = styled.div`
    display: flex;
    width: 160px;
    padding-top: 20px;
    justify-content: space-evenly;
    ${mobile({ display: "none" })}
    .icon {
      width: 50px;
      height: 50px;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: red solid 3px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      cursor: pointer;
      background-color: #1b0301;
      box-sizing: border-box;
    }
  `;
  const [showOptions, setShowOptions] = useState(false);

  const handleAvatarClick = () => {
    setShowOptions(!showOptions);
    setShowAnalog(true);
  };
  return (
    <Container>
      <Entrance>
        <Bars />
      </Entrance>
      <NavLink to="/">
        <Img src={logo1} alt="" />
      </NavLink>
      <Account ImgLogin={ImgLogin}></Account>
      <img
        className="account"
        onClick={handleAvatarClick}
        src={ImgLogin}
        alt=""
      />{" "}
    </Container>
  );
};

export default NavbarDetail;
