import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "../../Navbar";
import PersonMediaGrid from "../PersonMediaGrid/PersonMediaGrid";

const CastInfo = () => {
  const { id } = useParams();
  console.log("id", id);
  const [cast, setCast] = useState("");
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getData("");
    getDataInfo("");
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=394a932c98b41cda99cc5b67d380cc7a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data.cast));
  };

  console.log("movie", movie);

  const getDataInfo = () => {
    fetch(
      `
      https://api.themoviedb.org/3/person/${id}?api_key=394a932c98b41cda99cc5b67d380cc7a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCast(data));
  };

  console.log("cast", cast);
  const Container = styled.div`
    height: 100%;
    width: 100%;
  `;
  const Body = styled.div`
    background-color: "red";
    padding: 80px 150px;
    background: black;
  `;
  return (
    <Container>
      <Navbar />
      <Body>
        <Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                width: { xs: "50%", md: "20%" },
              }}
            >
              <Box
                sx={{
                  paddingTop: "160%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "darkgrey",
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${cast?.profile_path})`,
                }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "80%" },
                padding: { xs: "1rem 0", md: "1rem 2rem" },
              }}
            >
              <Stack spacing={2}>
                <Typography
                  style={{ color: "wheat" }}
                  variant="h5"
                  fontWeight="700"
                >
                  {`${cast?.name} (${
                    cast?.birthday && cast?.birthday.split("-")[0]
                  }`}
                  {cast?.deathday &&
                    ` - ${cast?.deathday && cast?.deathday.split("-")[0]}`}
                  {")"}
                </Typography>
                <Typography style={{ color: "wheat" }}>
                  {cast?.biography}
                </Typography>
              </Stack>
            </Box>
          </Box>
          <PersonMediaGrid movie={movie} />
        </Box>
      </Body>
    </Container>
  );
};

export default CastInfo;
