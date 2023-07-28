import React from "react";
import { styled } from "styled-components";
import poster from "../../../assets/img/4k-black-widow-2020-movie.jpg";
const Poster = () => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
  `;

  const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
  `;
  const ImgPoster = styled.img`
    height: 100%;
    width: 100%;
    opacity: 0.75;
  `;
  const TitlePoster = styled.div`
    width: 30%;
    position: absolute;
    bottom: 50%;
    left: 10%;
  `;
  const Title = styled.div`
    color: white;
    font-size: xxx-large;
  `;
  const Des = styled.div`
    color: white;
  `;
  return (
    <Container>
      <Wrapper>
        <ImgPoster src={poster} />
        <TitlePoster>
          <Title>Schedule Release All Movie Around The World</Title>
          <Des>Get up date to movie schedule release all around the world</Des>
        </TitlePoster>
      </Wrapper>
    </Container>
  );
};

export default Poster;
