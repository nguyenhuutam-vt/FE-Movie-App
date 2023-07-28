import React from "react";
import { styled } from "styled-components";
import { mobile } from "../../../responsive";
import Navbar from "../../Navbar";
import MovieUpComing from "./MovieUpComing";
import Footer from "../../Footer/Footer";

const Movie = () => {
  const Container = styled.div`
    height: 100%;
    ${mobile({ height: "100%" })}
  `;
  return (
    <Container>
      <Navbar />
      <MovieUpComing />
      <Footer />
    </Container>
  );
};

export default Movie;
