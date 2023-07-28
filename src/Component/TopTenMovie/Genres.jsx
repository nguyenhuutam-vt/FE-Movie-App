import React, { useRef } from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
import { ReactComponent as NextArrow } from "../../assets/icons/nextArrow.svg";
import { ReactComponent as PrevArrow } from "../../assets/icons/prevArrow.svg";

import { mobile } from "../../responsive";
import { NavLink } from "react-router-dom";

const settings = {
  className: "center",
  adaptiveHeight: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 1em;
  h3 {
    margin-top: 0;
  }
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
    height: 84%;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 15%;
  }
  .back {
    left: 3%;
  }
  .next {
    right: 0;
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
const StyledTopTenMovie = styled.div`
  h3 {
    color: #ffffff;
    font-size: 26px;
    z-index: 1;
    user-select: none;
    padding-left: 2em;
  }
  .rowHeader {
    width: 100%;
    padding-left: 4em;
    .top {
      display: flex;
      position: relative;
      height: 26em;
      .img1 {
        cursor: pointer;
        transition: 0.2s ease-in-out;
        height: 26em;
        object-fit: cover;
      }
    }
    .overLay {
      user-select: none;
      cursor: pointer;
      position: absolute;
      padding: 0 1em;
      bottom: -0.2%;
      left: 0%;
      width: 73.57%;
      /* border-radius: 28px; */
      color: #ffffff;
      background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.8));
      opacity: 0;
      transition: 0.4s ease-in-out;
      z-index: 100;
    }
    .top:hover {
      transform: scale(1.2);
      transition: 0.4s ease-in-out;
      z-index: 10;

      .img1 {
        opacity: 0.9;
      }
      .overLay {
        opacity: 1;
        color: white;
      }
    }
    .num {
      width: 50%;
      svg {
        height: 13em;
      }
    }
  }
  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
    overflow: visible;
  }
`;
const GenresMovie2 = ({ title, name }) => {
  const arrowRef = useRef(null);

  console.log("casttt", title);

  return (
    <StyledTopTenMovie>
      <Container>
        <h3>{name}</h3>
        <div className="rowHeader">
          <Slider ref={arrowRef} {...settings}>
            {title?.map((item) => {
              return (
                <NavLink to={`/detail/${item?.id}`}>
                  <div className="top">
                    <img
                      className="img1"
                      src={
                        process.env.REACT_APP_IMG_URL + `${item?.mainPoster}`
                      }
                      alt="123"
                    />
                    <div className="overLay">
                      <div className="title">
                        <h1 style={{ color: "white" }}>{item?.movieName}</h1>
                      </div>
                      <div className="description">
                        <p style={{ color: "wheat" }}>{item?.description}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
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

export default GenresMovie2;
