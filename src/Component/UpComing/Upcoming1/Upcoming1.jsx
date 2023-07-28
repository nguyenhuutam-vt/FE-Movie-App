import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "styled-components";
import "../../Genres/Genres.css";
import August from "./August";
import September from "./September";

const Upcoming1 = ({ type }) => {
  const Container = styled.div`
    margin-top: -4px;
    padding: 30px;
    height: 100%;
    background-color: black;
    color: white;
  `;
  const Release = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: white;
  `;
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const WorldWide = styled.div`
    width: 140px;
    height: 40px;
    background-color: #171616;
    color: white;
    border-radius: 5px;
    border-color: white;
    border: 1px solid;
  `;
  const WorldDropdown = styled.div`
    position: absolute;

    background: #252525;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding-bottom: 80px;
    padding-top: 30px;
    z-index: 1000;
  `;
  const Dropdown = styled.div`
    position: relative;
  `;

  const [isActive, setActive] = useState(false);
  const [isYear, setYear] = useState(false);
  const UpComingRelease = styled.div`
    padding: 0px 5%;
  `;
  const Drop = styled.div`
    width: 20%;
    justify-content: space-around;
    display: flex;
  `;
  return (
    <Container>
      <Release>
        <UpComingRelease>UPCOMING RELEASE</UpComingRelease>
        <Drop>
          <Dropdown>
            <WorldWide onClick={(e) => setActive(!isActive)}>
              <div className="p">WorldWide</div>
            </WorldWide>
            {isActive && (
              <WorldDropdown>
                <MenuItem className="dropdown-item" value={10}>
                  Ten
                </MenuItem>
                <MenuItem className="dropdown-item" value={20}>
                  Twenty
                </MenuItem>
                <MenuItem className="dropdown-item" value={30}>
                  Thirty
                </MenuItem>
              </WorldDropdown>
            )}
          </Dropdown>
          <Dropdown>
            <WorldWide onClick={(e) => setYear(!isYear)}>
              <div className="p">Year</div>
            </WorldWide>
            {isYear && (
              <WorldDropdown>
                <MenuItem className="dropdown-item" value={10}>
                  2023
                </MenuItem>
                <MenuItem className="dropdown-item" value={20}>
                  2022
                </MenuItem>
                <MenuItem className="dropdown-item" value={30}>
                  2021
                </MenuItem>
              </WorldDropdown>
            )}
          </Dropdown>
        </Drop>
      </Release>
      <August />
    </Container>
  );
};

export default Upcoming1;
