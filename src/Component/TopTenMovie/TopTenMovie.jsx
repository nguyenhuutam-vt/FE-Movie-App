import React, { useRef, useState } from "react";

import { styled } from "styled-components";
import Slider from "react-slick";
import { ReactComponent as NextArrow } from "../../assets/icons/nextArrow.svg";
import { ReactComponent as PrevArrow } from "../../assets/icons/prevArrow.svg";

import { mobile } from "../../responsive";
import { topMovie } from "../../data/fetchData";

import { ReactComponent as Num1 } from "../../assets/img/number/1.svg";
import { ReactComponent as Num2 } from "../../assets/img/number/2.svg";
import { ReactComponent as Num3 } from "../../assets/img/number/3.svg";
import { ReactComponent as Num4 } from "../../assets/img/number/4.svg";
import { ReactComponent as Num5 } from "../../assets/img/number/5.svg";
import { ReactComponent as Num6 } from "../../assets/img/number/6.svg";
import { ReactComponent as Num7 } from "../../assets/img/number/7.svg";
import { ReactComponent as Num8 } from "../../assets/img/number/8.svg";
import { ReactComponent as Num9 } from "../../assets/img/number/9.svg";
import { ReactComponent as Num10 } from "../../assets/img/number/10.svg";

const settings = {
  className: "center",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  ${mobile({
    height: "100%",
    transform: "translate(0px, -135px)",
  })};
`;
const Buttons = styled.div`
  button:hover {
    opacity: 1;
  }
  button {
    opacity: 0;
    width: 5em;
    height: 73.5%;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 22.5%;
  }

  .back {
    left: 0%;
  }
  .next {
    right: 1.5%;
  }
  ${mobile({
    display: "none",
  })};
  svg {
    path {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }
`;
const StyledCardTopTen = styled.div`
  .top {
    display: flex;
    width: 90%;
    padding: 1em;
    img {
      width: 42%;
      height: 13em;
    }
  }
  .overLay {
    user-select: none;
    cursor: pointer;
    position: absolute;
    padding: 0 1em;
    bottom: 8%;
    /* left: 18.5%; */
    right: 4%;
    width: 55%;
    color: #ffffff;
    background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
    opacity: 0;
    z-index: 100;
  }
  .top:hover {
    transition: 0.4s ease-in-out;
    transform: scale(1.1);
    .num {
      opacity: 0;
      transition: 0.9s ease-in-out;
    }
    img {
      transition: 0.9s ease-in-out;
      z-index: 99;
      transform: translate(-50%, -30%) scale(1.6);
      width: 10em;
    }
    .overLay {
      transition: 0.9s ease-in-out;
      transform: translate(-37%, 0%) scale(1.1);
      opacity: 1;
    }
  }
  .num {
    width: 40%;
    svg {
      height: 12.8em;
    }
  }
`;
const TopTenMovie = ({ cast }) => {
  const arrowRef = useRef(null);
  const StyledTopTenMovie = styled.div`
    width: 100%;

    h3 {
      color: #ffffff;
      font-size: 26px;
      padding-left: 2em;
    }
    .rowHeader {
      width: 100%;
      margin: 0 auto;
    }
    .slick-list,
    .slick-slider,
    .slick-track {
      padding: 0;
      overflow: visible;
    }
  `;
  return (
    <StyledTopTenMovie>
      <Container>
        <h3>Top 10 Film this week</h3>
        <div className="rowHeader">
          <Slider ref={arrowRef} {...settings}>
            {cast.map((item, index) => {
              return (
                <StyledCardTopTen>
                  <div className="top">
                    <div className="num">
                      {index === 0 ? (
                        <Num1 />
                      ) : index === 1 ? (
                        <Num2 />
                      ) : index === 2 ? (
                        <Num3 />
                      ) : index === 3 ? (
                        <Num4 />
                      ) : index === 4 ? (
                        <Num5 />
                      ) : index === 5 ? (
                        <Num6 />
                      ) : index === 6 ? (
                        <Num7 />
                      ) : index === 7 ? (
                        <Num8 />
                      ) : index === 8 ? (
                        <Num9 />
                      ) : (
                        <Num10 />
                      )}
                    </div>
                    <img
                      src={
                        process.env.REACT_APP_IMG_URL + `${item?.mainPoster}`
                      }
                      alt="123"
                    />
                    <div className="overLay">
                      <div className="title">
                        <h1>{item?.movieName}</h1>
                      </div>
                      <div className="description">
                        <p>{item?.description}</p>
                      </div>
                    </div>
                  </div>
                </StyledCardTopTen>
              );
            })}
          </Slider>
          <Buttons>
            <button
              onClick={() => arrowRef.current.slickPrev()}
              className="back"
            >
              <PrevArrow />
            </button>
            <button
              onClick={() => arrowRef.current.slickNext()}
              className="next"
            >
              <NextArrow />
            </button>
          </Buttons>
        </div>
      </Container>
    </StyledTopTenMovie>
  );
};

export default TopTenMovie;
