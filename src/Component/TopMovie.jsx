import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";

import Rating from "@mui/material/Rating";
import "../Component/Feature.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { top5Movie } from "../data/fetchData";
import TopTenMovie from "../Component/TopTenMovie/TopTenMovie";
const StyledTopMovie = styled.div`
  /* position: relative; */
  .rowW {
    width: 100%;
  }
`;
const TopMovie = () => {
  const Container = styled.div`
    width: 100%;
    .topMv img {
      width: 100%;
      margin-top: 4em;
    }
    ${mobile({
      float: "right",
      width: "150%",
      height: "100%",
      background: "#190401",
      transform: "translate(10px, -70px)",
    })};
  `;
  const TopMovie = styled.div`
    position: relative;
    ${mobile({
      float: "right",
      width: "60%",
      height: "100%",
      transform: " translate(75px, 10px)",
    })};
  `;
  const ImgMarvel = styled.img`
    width: 25%;
    ${mobile({ float: "right", width: "60%", height: "100%" })};
  `;
  const Marvel = styled.div`
    text-align: -webkit-center;
    ${mobile({
      float: "right",
      width: "60%",
      height: "100%",
      transform: "translate(110px, 80px)",
    })};
  `;
  const Rate = styled.img`
    width: 25%;
    ${mobile({ float: "right", width: "60%", height: "100%" })};
  `;
  const Ratee = styled.div`
    margin-top: 10px;
    ${mobile({ transform: "translate(120px, 80px)" })};
  `;
  const Genres = styled.div`
    width: 50%;
    height: 30px;

    display: flex;
    justify-content: space-between;
    ${mobile({ transform: "translate(129px, 75px)" })};
  `;
  const Rectangle = styled.div`
    height: 16px;
    border-radius: 10px;
    border: 1px solid;
    border-color: #d9d9d9;
    ${mobile({
      height: "10px",
      borderRadius: "10px",
      border: " 1px solid",
      borderColor: "#d9d9d9",
    })};
  `;
  const Play = styled.div`
    width: 55px;
    height: 55px;
    display: flex;
    ${mobile({
      float: "right",
      width: "60%",
      height: "100%",
      display: "none",
    })};
  `;
  const Drama = styled.div`
    ${mobile({
      float: "right",
      width: "60%",
      height: "100%",
      fontSize: "10px",
    })};
  `;
  const Action = styled.div`
    ${mobile({
      float: "right",
      width: "60%",
      height: "100%",
      fontSize: "10px",
    })};
  `;
  const Sci = styled.div`
    ${mobile({
      float: "right",
      width: "60%",
      height: "100%",
      fontSize: "10px",
    })};
  `;
  const Des = styled.div`
    width: 451px;
    height: 70px;
    margin-top: 20px;
    ${mobile({
      float: "right",
      width: "60%",
      height: "100%",
      display: "none",
    })};
  `;
  const ImgInfo = styled.div`
    ${mobile({
      float: "right",
      width: "60%",
      height: "100%",
    })};
  `;

  const ImgInfoo = styled.img`
    ${mobile({
      width: "100%",
      height: "100%",
      transform: "translate(135px, 90px)",
    })};
  `;

  return (
    <StyledTopMovie>
      <Container>
        {top5Movie.map((item) => {
          return (
            <TopMovie>
              <div className="topMv">
                <img src={item.imgB} alt="tpo" />
              </div>
              <div className="info">
                <ImgInfo>
                  <ImgInfoo
                    src={item.imgBlackwind}
                    alt=""
                    className="imgInfo"
                  />
                </ImgInfo>
                <Ratee>
                  <Rating name="read-only" value={5} readOnly />
                </Ratee>
                <Genres>
                  <Drama>Drama</Drama>
                  <Rectangle></Rectangle>
                  <Action>Action</Action>
                  <Rectangle></Rectangle>
                  <Sci>SCI-FI</Sci>
                </Genres>
                <Play>
                  <PlayCircleFilledWhiteIcon
                    style={{ color: "red", fontSize: "4.1875rem" }}
                  />
                  <AddCircleIcon
                    style={{ color: "red", fontSize: "4.1875rem" }}
                  />
                </Play>
                <Des>{item.description}</Des>
              </div>
            </TopMovie>
          );
        })}
      </Container>
    </StyledTopMovie>
  );
};

export default TopMovie;
