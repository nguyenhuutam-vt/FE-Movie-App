import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
const Account = ({ ImgLogin }) => {
  const [showAnalog, setShowAnalog] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const handleMouseEnter = () => {
    setShowOptions(!showOptions);
    setShowAnalog(true);
  };

  const handleAvatarClick = () => {
    setShowOptions(!showOptions);
    setShowAnalog(true);
  };
  const handleMouseLeave = () => {
    setShowAnalog(false);
  };
  const Entrance = styled.div`
    display: flex;
    width: 160px;
    padding-top: 20px;
    position: relative;
    justify-content: space-evenly;
    color: white;
    .icon {
      color: red;
    }
    ${mobile({ display: "none" })}
    .icon {
      width: 50px;
      height: 50px;
      color: red;
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
  const Dialog = styled.div`
    background-color: transparent;
    right: 0;
    align-items: center;
    text-align: center;
    display: flex;
    position: absolute;
  `;
  const InputContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    flex-direction: column;
    width: 150px;
    background-color: #0d1117;
    border-radius: 10px;
  `;
  const Value = styled.div`
    background-color: transparent;
    border: none;
    padding: 10px;
    display: flex;
    color: white;
    position: relative;
    cursor: pointer;
    font-size: 18px;
    text-align: center;
    border-radius: 10px;
    &:not(:active):hover,
    &:focus {
      background-color: #21262c;
    }

    &:focus,
    &:active {
      background-color: #1a1f24;
      outline: none;
    }

    &::before {
      content: "";
      position: absolute;
      top: 5px;
      left: -10px;
      width: 5px;
      height: 80%;
      background-color: #2f81f7;
      border-radius: 5px;
      opacity: 0;
    }

    &:focus::before,
    &:active::before {
      opacity: 1;
    }

    svg {
      width: 15px;
    }
  `;
  function logout() {
    localStorage?.removeItem("access_token");
  }
  return (
    <Entrance onMouseLeave={handleMouseLeave}>
      <img
        onMouseEnter={handleMouseEnter}
        className="logo"
        src={ImgLogin}
        alt=""
      />
      <NotificationsNoneIcon className="icon"></NotificationsNoneIcon>

      {showAnalog && (
        <Dialog>
          {showOptions && (
            <InputContainer>
              <NavLink to="/profile">
                <Value>
                  <AccountCircleIcon className="icon2" />
                  Profile
                </Value>
              </NavLink>
              <NavLink to="/favorites">
                <Value>
                  <FavoriteIcon className="icon2" />
                  Favorite
                </Value>
              </NavLink>
              <NavLink to="/setting">
                <Value>
                  <SettingsIcon className="icon2" />
                  Setting
                </Value>
              </NavLink>
              <NavLink
                to="/login"
                onClick={() => {
                  logout();
                }}
              >
                <Value>
                  <LogoutIcon className="icon2" />
                  Log Out
                </Value>
              </NavLink>
            </InputContainer>
          )}
        </Dialog>
      )}
    </Entrance>
  );
};

export default Account;
