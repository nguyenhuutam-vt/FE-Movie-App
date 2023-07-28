import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Slider from "react-slick";
import { styled } from "styled-components";

const MovieTeaster = ({ videoTester }) => {
  console.log("videoTesterr", videoTester);
  const Container = styled.div`
    height: 100%;
    width: 60%;
  `;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <Container>
      <h1 className="text-center mb-5" style={{ color: "wheat" }}>
        Trailer
      </h1>
      <Slider {...settings}>
        {videoTester?.map((item) => {
          return (
            <>
              {isLoading ? (
                <div className="cards">
                  <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height="500px" width="1000px" duration={2} />
                  </SkeletonTheme>
                </div>
              ) : (
                <iframe
                  type="text/html"
                  style={{ backgroundColor: "#000", marginLeft: "30px" }}
                  width="1000px"
                  height="500px"
                  src={`https://www.youtube.com/embed/${item?.key}?controls=1`}
                  // src={"https://www.themoviedb.org/video/play?key=" + videoTester?.key}
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              )}
            </>
          );
        })}
      </Slider>
    </Container>
  );
};

export default MovieTeaster;
