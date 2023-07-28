import React from "react";
import { styled } from "styled-components";
import MovieList from "./MovieList";

const August = () => {
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
  const August = styled.div``;
  return (
    <Container>
      <August></August>
      <Line />
      <MovieList />
    </Container>
  );
};

export default August;
