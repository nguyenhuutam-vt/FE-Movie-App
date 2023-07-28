import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import icon2 from "../../assets/img/S3.png";
import icon1 from "../../assets/img/S31.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularRate from "./CircularRate";
import { NavLink } from "react-router-dom";
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
const FeatureSeries = ({ feature }) => {
  // const [feature, setFeature] = useState();
  // console.log("feature", feature);
  // useEffect(() => {
  //   getData();
  //   window.scrollTo(0, 0);
  // }, []);
  // const getData = () => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/popular?api_key=394a932c98b41cda99cc5b67d380cc7a&language=en-US`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setFeature(data.results));
  // };
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
  const Container = styled.div``;
  return (
    <Container>
      <Slider {...settings}>
        {feature?.map((item) => {
          return (
            <div>
              {" "}
              <Box
                sx={{
                  paddingTop: {
                    xs: "130%",
                    sm: "80%",
                    md: "60%",
                    lg: "45%",
                  },
                  marginTop: "-35px",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${item?.backdrop_path})`,
                }}
              />
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  paddingX: "30px",
                  color: "text.primary",
                  marginTop: "-700px",
                  padding: " 30px 90px",
                  color: "white",
                  width: { sm: "unset", md: "30%", lg: "40%" },
                }}
              >
                <Stack spacing={4} direction="column">
                  {/* title */}
                  <Typography
                    variant="h4"
                    fontSize={{ xs: "2rem", md: "2rem", lg: "4rem" }}
                    fontWeight="700"
                  >
                    {item?.title}
                  </Typography>
                  {/* title */}

                  <Stack direction="row" spacing={1} alignItems="center">
                    {/* rating */}
                    <CircularRate value={item?.vote_average} />

                    {/* rating */}

                    <Divider orientation="vertical" />
                    {/* genres */}
                    {/* {[...item?.genre_ids].splice(0, 2).map((genreId, index) => (
                      <Chip
                        variant="filled"
                        color="primary"
                        key={index}
                        label={
                          genres.find((e) => e.id === genreId) &&
                          genres.find((e) => e.id === genreId).name
                        }
                      />
                    ))} */}
                    {/* genres */}
                  </Stack>

                  {/* overview */}
                  <Typography variant="body1">{item.overview}</Typography>
                  {/* overview */}

                  {/* buttons */}
                  <NavLink to={`/movie/${item.id}`}>
                    <Button
                      variant="contained"
                      size="large"
                      color="error"
                      startIcon={<PlayArrowIcon />}
                      // component={Link}
                      // to={routesGen.mediaDetail(mediaType, movie.id)}
                      sx={{ width: "max-content" }}
                    >
                      watch now
                    </Button>
                  </NavLink>

                  {/* buttons */}
                </Stack>
              </Box>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default FeatureSeries;
