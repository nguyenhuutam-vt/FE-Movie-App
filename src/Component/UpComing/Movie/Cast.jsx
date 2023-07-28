import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import tmdbConfigs from "./configs/tmdb.configs";
import { styled } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
const Cast = ({ imgTeaster }) => {
  console.log("imgTeaster", imgTeaster);
  const ImgCast = styled.img`
    object-fit: cover;
    width: 70%;
  `;
  const Container = styled.div`
    height: 100%;
    width: 60%;
  `;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const NameCast = styled.div`
    color: white;
  `;
  return (
    <Container>
      <h1 className="text-center mb-5" style={{ color: "wheat" }}>
        Actors
      </h1>
      <Slider {...settings}>
        {imgTeaster?.map((item) => {
          return (
            <div>
              <NavLink to={`/cast/${item?.id}`}>
                <ImgCast
                  src={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`}
                  alt=""
                />
              </NavLink>

              <NameCast>{item?.name}</NameCast>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default Cast;
