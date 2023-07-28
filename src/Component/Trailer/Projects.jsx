import React from "react";
import { styled } from "styled-components";
import "../Trailer/WatchTrailer.css";

import SliderComp from "./SliderComp";
import Genres from "../Genres/Genres";
import Popular from "../Popular/Popular";
import GenresMovie from "../GenresMovie/GenresMovie";
import Generess from "../GenresMovie/Generess";

const Projects = ({ movie }) => {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 3rem 0;

    position: relative;
    @media (max-width: 840px) {
      width: 100%;
      margin-top: -235px;
    }
    h1 {
      font-size: 1.9rem;
    }

    p {
      width: 28rem;
      margin: 0 auto;
      padding: 1rem 0;
      font-size: 0.9rem;
      @media (max-width: 500px) {
        width: 100%;
      }
    }
  `;
  return (
    <Container id="project" className="trailer">
      <div>
        <SliderComp movie={movie} />
      </div>
      <div>
        <Genres />
      </div>
      {/* <div>
        <Popular />
      </div> */}
    </Container>
  );
};

export default Projects;
