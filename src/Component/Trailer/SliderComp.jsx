import React, { useRef } from "react";

import { styled } from "styled-components";
import Slider from "react-slick";
import trailer from "../../assets/img/lala land 1.png";
import icon2 from "../../assets/img/S3.png";
import icon1 from "../../assets/img/S31.png";

import Project from "./Project";
import { mobile } from "../../responsive";
let data = [
  {
    img: trailer,
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
  },
  {
    img: trailer,
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
  },
  {
    img: trailer,
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
  },
  {
    img: trailer,
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
  },
  {
    img: trailer,
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
  },
];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <img
        style={{
          ...style,
          display: "block",
          zIndex: "1",
          right: "150px",
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
const settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  nextArrow: <SampleNextArrow className="sample" />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-left: 40px;
  ${mobile({
    height: "100%",
    transform: "translate(0px, -135px)",
  })};
`;
const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: 3rem;
  }

  .back {
    left: 0rem;
    background-color: transparent;
  }
  .next {
    background-color: transparent;
  }
  ${mobile({
    display: "none",
  })};
`;
const SliderComp = ({ movie }) => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = movie.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <img src={icon1} alt="" />
        </button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className="next"
          style={{ right: "5rem" }}
        >
          <img src={icon2} alt="" />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;
