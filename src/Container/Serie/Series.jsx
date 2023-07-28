import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Navbar from "../../Component/Navbar";
import FeatureSeries from "./FeatureSeries";
import MovieSeries from "./MovieSeries";
import { Typography } from "@mui/material";

const Series = () => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
  `;
  const Containerr = styled.div`
    background: black;
    margin-top: -85px;
  `;
  const [feature, setFeature] = useState(null);
  console.log("feature", feature);
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=394a932c98b41cda99cc5b67d380cc7a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setFeature(data.results));
  };
  return (
    <Container>
      <Navbar />
      <FeatureSeries feature={feature} />
      <Containerr>
        <p
          style={{ padding: "30px 80px", fontSize: "2rem", color: "white" }}
          variant="body1"
          fontWeight="700"
        >
          Series
        </p>
        <MovieSeries feature={feature} />
      </Containerr>
    </Container>
  );
};

export default Series;
