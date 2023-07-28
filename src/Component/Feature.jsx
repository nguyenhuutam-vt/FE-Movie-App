import React from "react";
import { styled } from "styled-components";
import { mobile } from "../responsive";
import imgblack from "../assets/img/sjblackwidow 1 (1).png";
import marvel from "../assets/img/MARVEL LOGO 1 (1).png";
import blackwind from "../assets/img/Black_Widow 1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import "../Component/Feature.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { movie } from "../data/fetchData";
import icon2 from "../assets/img/S3.png";
import icon1 from "../assets/img/S31.png";
import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../service/axios";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <>
      <img
        style={{
          ...style,
          display: "block",
          zIndex: "1",
          right: "90px",
          top: "500px",
          height: "40px",
          width: "50px",
        }}
        id="Arrow"
        className={className}
        src={icon2}
        alt=""
        onClick={onClick}
      />
    </>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <img
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "1",
        left: "5px",
        top: "500px",
        height: "40px",
        width: "50px",
      }}
      src={icon1}
      alt=""
      onClick={onClick}
    />
  );
}
const Feature = () => {
  const Container = styled.div`
    height: 100%;
    width: 100%;

    ${mobile({
      float: "right",
      width: "150%",
      height: "100%",
      background: "#190401",
      transform: "translate(0px, -70px)",
    })};
  `;
  const Featured = styled.div`
    position: relative;

    margin-top: -35px;
    ${mobile({
      float: "right",
      width: "60%",
      height: "100%",
      transform: " translate(75px, 10px)",
    })};
  `;
  const ImgMarvel = styled.img`
    width: 25%;
    height: 100%;
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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow className="sample" />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
    // <Featured>
    //   <img src={imgblack} alt="" className="imgblack" />
    //   <div className="info">
    //     <Marvel>
    //       <ImgMarvel src={marvel} alt="" />
    //     </Marvel>
    //     <img src={blackwind} alt="" className="imgInfo" />
    //     <Ratee>
    //       <Rating name="read-only" value={5} readOnly />
    //     </Ratee>
    //     <Genres>
    //       <Drama>Drama</Drama>
    //       <Rectangle></Rectangle>
    //       <Action>Action</Action>
    //       <Rectangle></Rectangle>
    //       <Sci>SCI-FI</Sci>
    //     </Genres>
    //     <Play>
    //       <PlayCircleFilledWhiteIcon
    //         style={{ color: "red", fontSize: "4.1875rem" }}
    //       />
    //       <AddCircleIcon style={{ color: "red", fontSize: "4.1875rem" }} />
    //     </Play>
    //     <Des>
    //       Natasha Romanoff, aka Black Widow, confronts the darker parts of her
    //       ledger when a dangerous conspiracy with ties to her past arises.
    //       Pursued by a force that will stop at nothing to bring her down,
    //       Natasha must deal with her history as a spy, and the broken
    //       relationships left in her wake long before she became an Avenger.
    //     </Des>
    //   </div>
    // </Featured>

    <Container>
      <Slider {...settings}>
        {movie.map((item) => {
          return (
            <Featured>
              <img src={item.imgB} alt="" className="imgblack" />
              <div className="info">
                <Marvel>
                  <ImgMarvel src={item.imgMarvel} alt="" />
                </Marvel>
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
            </Featured>
          );
        })}
      </Slider>
    </Container>
  );
};

export default Feature;
