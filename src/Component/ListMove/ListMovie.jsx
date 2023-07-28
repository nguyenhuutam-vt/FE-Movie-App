import React from "react";
import { styled } from "styled-components";
import { mobile } from "../../responsive";

import { list } from "../../data/fetchData";
import "./ListMovie.css";
import Slider from "react-slick";
import { useState } from "react";
import axiosInstance from "../../service/axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 4,
  initialSlide: 0,
  // nextArrow: <SampleNextArrow className="sample" />,
  // prevArrow: <SamplePrevArrow />,

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
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};
const ListMovie = () => {
  const [upComming, setUpComming] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/movies/upcoming")
      .then((res) => {
        setUpComming(res.data.data);
      })
      .catch((err) => {});
  }, []);

  console.log("upComming", upComming);
  const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #1b0301;
    margin-top: -102px;
    /* display: flex; */
    ${mobile({
      height: "100%",

      transform: " translate(0px, -145px)",
      display: "flow-root",
    })}
  `;
  const Movie = styled.div`
    /* padding: 55px 28px; */
    ${mobile({ height: "100%", marginTop: "-50px" })}
  `;
  const Poster = styled.div`
    cursor: pointer;
    ${mobile({ height: "100%" })}
  `;
  const Title = styled.div`
    text-align: center;
    width: 100px;
    color: white;
  `;
  const Img = styled.img`
    ${mobile({ height: "100%" })}
  `;
  return (
    <Container>
      <Slider {...settings}>
        {upComming.map((item) => {
          return (
            <Movie className="poster">
              <Poster>
                <Link
                  to={`/detail/${item.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  <Img
                    style={{ width: "50%", borderRadius: "10px" }}
                    src={process.env.REACT_APP_IMG_URL + `${item?.mainPoster}`}
                    alt=""
                  />
                </Link>
              </Poster>
              <Title>{item.movieName}</Title>
            </Movie>
          );
        })}
      </Slider>
    </Container>
  );
};

export default ListMovie;
