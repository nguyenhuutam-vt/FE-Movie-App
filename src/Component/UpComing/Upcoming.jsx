import React from "react";
import { styled } from "styled-components";
import Navbar from "../Navbar";
import Poster from "./Poster/Poster";
import Upcoming1 from "./Upcoming1/Upcoming1";
import Footer from "../Footer/Footer";

const Upcoming = () => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
  `;
  return (
    <Container>
      <Navbar />
      <Poster />
      <Upcoming1 />
      <Footer />
    </Container>
  );
};

export default Upcoming;
