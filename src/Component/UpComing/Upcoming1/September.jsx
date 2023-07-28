import React from "react";
import { styled } from "styled-components";
import MovieListSeptember from "./MovieListSeptember";

const September = () => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
  `;
  const Line = styled.div`
    width: 100%;
    border: 1px solid;
    height: 0;
    margin-top: 20px;
    color: #959595;
  `;

  return (
    <Container>
      <Line />
      <MovieListSeptember />
    </Container>
  );
};

export default September;
