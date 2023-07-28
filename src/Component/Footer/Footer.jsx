import React from "react";
import { styled } from "styled-components";
import m from "../../assets/img/M logo 2.svg";
import { mobile } from "../../responsive";
const Footer = () => {
  const Container = styled.div`
    text-align: center;
    height: 100%;
    width: 100%;
    background-color: #190401;
    ${mobile({
      // position: "absolute",
      // marginTop: "-200px",
    })};
  `;
  const ImgM = styled.div`
    width: 100%;
    text-align: center;
  `;
  const Text = styled.div`
    width: 100%;
    text-align: center;
    color: white;
  `;
  return (
    <Container>
      <ImgM>
        <img src={m} alt="" />
      </ImgM>
      <Text>M CINEMA © 2023 by Leon</Text>
    </Container>
  );
};

export default Footer;
